import TreeNode from './tree-node';
import { isIterable, toArray, except, distinct, toMap } from '../utilities/array-utility';
import { toNodes, addValue } from './tree-utility';

const selfSelector = x => x;

class TreeList {
	constructor(values = [], { fkSelector = null, parentsSelector = null, valueSelector = selfSelector }) {
		this._fkSelector = fkSelector;
		this._parentsSelector = parentsSelector;
		this._valueSelector = valueSelector;

		this._roots = new Set();
		this._nodes = new Set();
		if (isIterable(values)) {
			this.addRange(values);
		}
	}

	add(value, { parents = [], position, fkSelector = this._fkSelector, parentsSelector = this._parentsSelector, valueSelector = this._valueSelector } = {}) {
		return this.addRange([value], { parents, position, fkSelector, parentsSelector, valueSelector });
	}
	addRange(values, { parents = [], position, fkSelector = this._fkSelector, parentsSelector = this._parentsSelector, valueSelector = this._valueSelector } = {}) {
		//return values.map(value => addValue({ tree: this, value, fkSelector, parentsSelector }));
		const treeNodes = this.getNodes();
		if (typeof (position) === "number") {
			position += i;
		}
		const addedNodes = toArray(values).map((value, i) => {
			if (typeof (position) === "number") {
				position += i;
			}

			let parentNodes = [...parents];

			if (!parentNodes.length) {
				parentNodes = fkSelector
					? treeNodes.filter(parent => fkSelector(valueSelector(value), valueSelector(parent.value)))
					: treeNodes.filter(parent => (parentsSelector(valueSelector(value)) || []).includes(valueSelector(parent.value)));
			}
			if (!parentNodes.length) {
				parentNodes = [null];
			}

			return parentNodes.map(parent => {
				const node = new TreeNode(valueSelector(value), parent, this);
				let insertPosition = treeNodes.length;
				if (parent) {
					if (position == null || position >= parent.children.length - 1) {
						position = parent.children.length;
					}
					const childBeforeInsert = parent.children[position - 1];
					parent.children.splice(position, 0, node);
					insertPosition = treeNodes.indexOf(childBeforeInsert || parent) + 1;
				} else {
					if (position == null || position >= treeNodes.length) {
						position = treeNodes.length;
					}
					insertPosition = position;
				}
				treeNodes.splice(insertPosition, 0, node);

				node.children = treeNodes.filter(child => fkSelector
					? fkSelector(child.value, value)
					: (parentsSelector(child.value) || []).includes(value)
				);
				return node;
			});
		});

		this._nodes = new Set(treeNodes);

		return addedNodes;
	}
	moveRoot(value, position) {
		const treeNodes = this.getNodes();
		const nodes = this.getNodes(value);

		for (const node of nodes) {
			treeNodes.remove(node);
		}
		nodes.reverse();
		for (const node of nodes) {
			(position == null)
				? treeNodes.push(node)
				: treeNodes.splice(position, 0, node);
		}

		this._nodes = new Set(treeNodes);
	}

	remove(value) {
		return this.removeRange([value]);
	}
	removeRange(values) {
		const nodes = this.getNodes(values);
		// also remove all it's offspring
		const nodesToRemove = [...nodes, ...this.getOffspring(nodes)];

		// remove node for all it's parents
		for (const node of nodesToRemove.map(node => node.parent)) {
			node.children = except(node.children, nodesToRemove);
		}

		this._nodes = new Set(except(this._nodes, nodesToRemove));
	}
	clear() {
		for (const node of this._nodes) {
			// ToDo: is this necessary?
			node.value = null;
		}
		this._nodes = new Set();
	}


	/**
	 * Retrieves all TreeNodes for the given value(s)
	 * @param {any} values (default undefined so we can treat null as a valid value)
	 * @returns {Array<TreeNode>} collection of TreeNodes
	 */
	getNodes(values = undefined) {
		if (typeof (values) === 'undefined') {
			return [...this._nodes];
		}

		if (!isIterable(values)) {
			values = [values];
		}

		const arr = toArray(values);
		return [...this._nodes].filter(n => arr.includes(n.value));
	}
	/**
	 * Retrieves all roots for the given TreeNode(s)
	 * @param {Array<TreeNode>|TreeNode} nodes
	 * @returns {Array<TreeNode>} collection of TreeNodes
	 */
	getRoots(nodes = null) {
		if (!nodes) {
			return [...this._nodes].filter((x) => x.parent === null);
		}

		if (nodes instanceof TreeNode) {
			nodes = [nodes];
		}

		const roots = nodes
			.map(node => {
				let root = node;
				while (root.parent) {
					root = root.parent;
				}
				return root;
			});
		return distinct(roots);
	}
	/**
	 * Retrieves all parents and their parents for the given TreeNode(s)
	 * @param {Array<TreeNode>|TreeNode} nodes (or values)
	 * @returns {Array<TreeNode>} collection of TreeNodes
	 */
	getAncestors(nodes) {
		const getParents = node => node.parent ? [node.parent].concat(getParents(node.parent)) : [];
		const arr = toNodes({ tree: this, nodes });
		const ancestors = arr.flatMap(getParents);
		return distinct(ancestors);
	}
	/**
	 * Retrieves all children and their children for the given TreeNode(s)
	 * @param {Array<TreeNode>|TreeNode} nodes
	 * @returns {Array<TreeNode>} collection of TreeNodes
	 */
	getOffspring(nodes) {
		const getChildren = node => node.children.length > 0 ? [...node.children, ...node.children.flatMap(getChildren)] : [];
		const arr = toNodes({ tree: this, nodes });
		return arr.flatMap(getChildren);
	}
	/**
	 * Retrieves all (distinct) values from this TreeList
	 * @returns {Array<Object>} collection of values
	 */
	getValues() {
		return this.getNodes().map(x => x.value);
	}

	*[Symbol.iterator]() {
		//yield* this._nodes[Symbol.iterator]();
		// for (const node of this._nodes) {
		// 	yield node;
		// }
		yield* this.getValues().values();
	}

	static injectArrayPrototype() {
		Object.getOwnPropertyNames(Array.prototype)
			.forEach(prop => {
				if (prop !== "constructor" && !TreeList.prototype.hasOwnProperty(prop)) {
					Object.defineProperty(TreeList.prototype, prop, {
						value: function () {
							return Array.prototype[prop].apply([...this], [...arguments]);
						},
						configurable: true
					});
				}
			});
	}
}

export default TreeList;