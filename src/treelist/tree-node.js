class TreeNode {
	constructor(value, parent, tree) {
		this._value = value;
		this._parent = parent;
		this._level = parent ? parent.level + 1 : 0;
		this._tree = tree;
		this._children = [];
	}

	get value() {
		return this._value;
	}
	set value(value) {
		this._value = value;
	}
	get parent() {
		return this._parent;
	}
	get level() {
		return this._level;
	}
	get children() {
		return this._children;
	}
	set children(value) {
		this._children = value;
	}
	add(value, o = {}) {
		o.parents = [this];
		this._tree.add(value, o);
	}
	getOffspring() {
		return this._tree.getOffspring(this);
	}
	getAncestors() {
		return this._tree.getAncestors(this);
	}
	getRoot() {
		return this._tree.getRoots(this)[0];
	}

	*[Symbol.iterator]() {
		for (const child of this.children) {
			yield child;
		}
	}
}

export default TreeNode;