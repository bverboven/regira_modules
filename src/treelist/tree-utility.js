import TreeNode from './tree-node';
import { isIterable, toArray, distinct } from '../utilities/array-utility';

export const toNodes = ({ tree, nodes }) => {
    if (!isIterable(nodes)) {
        //if (nodes instanceof TreeNode) {
        nodes = [nodes];
    }
    return toArray(nodes).flatMap(node => node instanceof TreeNode ? node : tree.getNodes(node));
};

export const findParents = ({ tree, value, fkSelector, parentsSelector }) => {
    const parentValues = parentsSelector ? parentsSelector(value) : [];
    const nodes = tree.getNodes();
    const parentFilter = fkSelector
        ? n => n.value !== value && fkSelector(value, n.value)
        : n => parentValues.includes(n.value);
    return nodes.filter(parentFilter);
};

export const addValue = ({ tree, value, fkSelector, parentsSelector }) => {
    const addedNodes = [];
    console.debug("AddValue", { tree, value, fkSelector, parentsSelector });
    let parentNodes = findParents({ tree, value, fkSelector, parentsSelector });
    if (!parentNodes.length) {
        parentNodes = [null];
    }
    for (const parentNode of parentNodes) {
        const node = new TreeNode(value, parentNode, tree);
        tree._nodes.add(node);
        addedNodes.push(node);
    };
    return addedNodes;
};


export default {
    toNodes,
    addValue
};