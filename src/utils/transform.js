var _pj;
var child, children, forest, node, nodes, parent, rel;

function _pj_snippets(container) {
    function in_es6(left, right) {
        if (right instanceof Array || typeof right === "string") {
            return right.indexOf(left) > -1;
        } else {
            if (
                right instanceof Map ||
                right instanceof Set ||
                right instanceof WeakMap ||
                right instanceof WeakSet
            ) {
                return right.has(left);
            } else {
                return left in right;
            }
        }
    }
    container["in_es6"] = in_es6;
    return container;
}
_pj = {};
_pj_snippets(_pj);

function transformDependencies(dependencies) {
    nodes = {};
    for (
        var i, _pj_c = 0, _pj_a = dependencies, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1
    ) {
        i = _pj_a[_pj_c];
        [rel, parent, child] = i;
        nodes[child] = { Name: child, Relationship: rel };
    }
    forest = [];
    for (
        var i, _pj_c = 0, _pj_a = dependencies, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1
    ) {
        i = _pj_a[_pj_c];
        [rel, parent, child] = i;
        node = nodes[child];
        if (parent === "ROOT") {
            forest.push(node);
        } else {
            parent = nodes[parent];
            if (!_pj.in_es6("children", parent)) {
                parent["children"] = [];
            }
            children = parent["children"];
            children.push(node);
        }
    }
    return forest;
}

export { transformDependencies };