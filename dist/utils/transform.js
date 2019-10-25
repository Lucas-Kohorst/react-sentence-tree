"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformDependencies = transformDependencies;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _pj;

var child, children, forest, node, nodes, parent, rel;

function _pj_snippets(container) {
  function in_es6(left, right) {
    if (right instanceof Array || typeof right === "string") {
      return right.indexOf(left) > -1;
    } else {
      if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
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

  for (var i, _pj_c = 0, _pj_a = dependencies, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    i = _pj_a[_pj_c];
    var _i = i;

    var _i2 = _slicedToArray(_i, 3);

    rel = _i2[0];
    parent = _i2[1];
    child = _i2[2];
    nodes[child] = {
      Name: child,
      Relationship: rel
    };
  }

  forest = [];

  for (var i, _pj_c = 0, _pj_a = dependencies, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    i = _pj_a[_pj_c];
    var _i3 = i;

    var _i4 = _slicedToArray(_i3, 3);

    rel = _i4[0];
    parent = _i4[1];
    child = _i4[2];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy90cmFuc2Zvcm0uanMiXSwibmFtZXMiOlsiX3BqIiwiY2hpbGQiLCJjaGlsZHJlbiIsImZvcmVzdCIsIm5vZGUiLCJub2RlcyIsInBhcmVudCIsInJlbCIsIl9wal9zbmlwcGV0cyIsImNvbnRhaW5lciIsImluX2VzNiIsImxlZnQiLCJyaWdodCIsIkFycmF5IiwiaW5kZXhPZiIsIk1hcCIsIlNldCIsIldlYWtNYXAiLCJXZWFrU2V0IiwiaGFzIiwidHJhbnNmb3JtRGVwZW5kZW5jaWVzIiwiZGVwZW5kZW5jaWVzIiwiaSIsIl9wal9jIiwiX3BqX2EiLCJfcGpfYiIsImxlbmd0aCIsIk5hbWUiLCJSZWxhdGlvbnNoaXAiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxHQUFKOztBQUNBLElBQUlDLEtBQUosRUFBV0MsUUFBWCxFQUFxQkMsTUFBckIsRUFBNkJDLElBQTdCLEVBQW1DQyxLQUFuQyxFQUEwQ0MsTUFBMUMsRUFBa0RDLEdBQWxEOztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JDLFNBQXRCLEVBQWlDO0FBQzdCLFdBQVNDLE1BQVQsQ0FBZ0JDLElBQWhCLEVBQXNCQyxLQUF0QixFQUE2QjtBQUN6QixRQUFJQSxLQUFLLFlBQVlDLEtBQWpCLElBQTBCLE9BQU9ELEtBQVAsS0FBaUIsUUFBL0MsRUFBeUQ7QUFDckQsYUFBT0EsS0FBSyxDQUFDRSxPQUFOLENBQWNILElBQWQsSUFBc0IsQ0FBQyxDQUE5QjtBQUNILEtBRkQsTUFFTztBQUNILFVBQ0lDLEtBQUssWUFBWUcsR0FBakIsSUFDQUgsS0FBSyxZQUFZSSxHQURqQixJQUVBSixLQUFLLFlBQVlLLE9BRmpCLElBR0FMLEtBQUssWUFBWU0sT0FKckIsRUFLRTtBQUNFLGVBQU9OLEtBQUssQ0FBQ08sR0FBTixDQUFVUixJQUFWLENBQVA7QUFDSCxPQVBELE1BT087QUFDSCxlQUFPQSxJQUFJLElBQUlDLEtBQWY7QUFDSDtBQUNKO0FBQ0o7O0FBQ0RILEVBQUFBLFNBQVMsQ0FBQyxRQUFELENBQVQsR0FBc0JDLE1BQXRCO0FBQ0EsU0FBT0QsU0FBUDtBQUNIOztBQUNEVCxHQUFHLEdBQUcsRUFBTjs7QUFDQVEsWUFBWSxDQUFDUixHQUFELENBQVo7O0FBRUEsU0FBU29CLHFCQUFULENBQStCQyxZQUEvQixFQUE2QztBQUN6Q2hCLEVBQUFBLEtBQUssR0FBRyxFQUFSOztBQUNBLE9BQ0ksSUFBSWlCLENBQUosRUFBT0MsS0FBSyxHQUFHLENBQWYsRUFBa0JDLEtBQUssR0FBR0gsWUFBMUIsRUFBd0NJLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUQxRCxFQUNrRUgsS0FBSyxHQUFHRSxLQUQxRSxFQUNpRkYsS0FBSyxJQUFJLENBRDFGLEVBRUU7QUFDRUQsSUFBQUEsQ0FBQyxHQUFHRSxLQUFLLENBQUNELEtBQUQsQ0FBVDtBQURGLGFBRXlCRCxDQUZ6Qjs7QUFBQTs7QUFFR2YsSUFBQUEsR0FGSDtBQUVRRCxJQUFBQSxNQUZSO0FBRWdCTCxJQUFBQSxLQUZoQjtBQUdFSSxJQUFBQSxLQUFLLENBQUNKLEtBQUQsQ0FBTCxHQUFlO0FBQUUwQixNQUFBQSxJQUFJLEVBQUUxQixLQUFSO0FBQWUyQixNQUFBQSxZQUFZLEVBQUVyQjtBQUE3QixLQUFmO0FBQ0g7O0FBQ0RKLEVBQUFBLE1BQU0sR0FBRyxFQUFUOztBQUNBLE9BQ0ksSUFBSW1CLENBQUosRUFBT0MsS0FBSyxHQUFHLENBQWYsRUFBa0JDLEtBQUssR0FBR0gsWUFBMUIsRUFBd0NJLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUQxRCxFQUNrRUgsS0FBSyxHQUFHRSxLQUQxRSxFQUNpRkYsS0FBSyxJQUFJLENBRDFGLEVBRUU7QUFDRUQsSUFBQUEsQ0FBQyxHQUFHRSxLQUFLLENBQUNELEtBQUQsQ0FBVDtBQURGLGNBRXlCRCxDQUZ6Qjs7QUFBQTs7QUFFR2YsSUFBQUEsR0FGSDtBQUVRRCxJQUFBQSxNQUZSO0FBRWdCTCxJQUFBQSxLQUZoQjtBQUdFRyxJQUFBQSxJQUFJLEdBQUdDLEtBQUssQ0FBQ0osS0FBRCxDQUFaOztBQUNBLFFBQUlLLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ25CSCxNQUFBQSxNQUFNLENBQUMwQixJQUFQLENBQVl6QixJQUFaO0FBQ0gsS0FGRCxNQUVPO0FBQ0hFLE1BQUFBLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFELENBQWQ7O0FBQ0EsVUFBSSxDQUFDTixHQUFHLENBQUNVLE1BQUosQ0FBVyxVQUFYLEVBQXVCSixNQUF2QixDQUFMLEVBQXFDO0FBQ2pDQSxRQUFBQSxNQUFNLENBQUMsVUFBRCxDQUFOLEdBQXFCLEVBQXJCO0FBQ0g7O0FBQ0RKLE1BQUFBLFFBQVEsR0FBR0ksTUFBTSxDQUFDLFVBQUQsQ0FBakI7QUFDQUosTUFBQUEsUUFBUSxDQUFDMkIsSUFBVCxDQUFjekIsSUFBZDtBQUNIO0FBQ0o7O0FBQ0QsU0FBT0QsTUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9wajtcbnZhciBjaGlsZCwgY2hpbGRyZW4sIGZvcmVzdCwgbm9kZSwgbm9kZXMsIHBhcmVudCwgcmVsO1xuXG5mdW5jdGlvbiBfcGpfc25pcHBldHMoY29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gaW5fZXM2KGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIGlmIChyaWdodCBpbnN0YW5jZW9mIEFycmF5IHx8IHR5cGVvZiByaWdodCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIHJpZ2h0LmluZGV4T2YobGVmdCkgPiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICByaWdodCBpbnN0YW5jZW9mIE1hcCB8fFxuICAgICAgICAgICAgICAgIHJpZ2h0IGluc3RhbmNlb2YgU2V0IHx8XG4gICAgICAgICAgICAgICAgcmlnaHQgaW5zdGFuY2VvZiBXZWFrTWFwIHx8XG4gICAgICAgICAgICAgICAgcmlnaHQgaW5zdGFuY2VvZiBXZWFrU2V0XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmlnaHQuaGFzKGxlZnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCBpbiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb250YWluZXJbXCJpbl9lczZcIl0gPSBpbl9lczY7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbl9waiA9IHt9O1xuX3BqX3NuaXBwZXRzKF9waik7XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybURlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMpIHtcbiAgICBub2RlcyA9IHt9O1xuICAgIGZvciAoXG4gICAgICAgIHZhciBpLCBfcGpfYyA9IDAsIF9wal9hID0gZGVwZW5kZW5jaWVzLCBfcGpfYiA9IF9wal9hLmxlbmd0aDsgX3BqX2MgPCBfcGpfYjsgX3BqX2MgKz0gMVxuICAgICkge1xuICAgICAgICBpID0gX3BqX2FbX3BqX2NdO1xuICAgICAgICBbcmVsLCBwYXJlbnQsIGNoaWxkXSA9IGk7XG4gICAgICAgIG5vZGVzW2NoaWxkXSA9IHsgTmFtZTogY2hpbGQsIFJlbGF0aW9uc2hpcDogcmVsIH07XG4gICAgfVxuICAgIGZvcmVzdCA9IFtdO1xuICAgIGZvciAoXG4gICAgICAgIHZhciBpLCBfcGpfYyA9IDAsIF9wal9hID0gZGVwZW5kZW5jaWVzLCBfcGpfYiA9IF9wal9hLmxlbmd0aDsgX3BqX2MgPCBfcGpfYjsgX3BqX2MgKz0gMVxuICAgICkge1xuICAgICAgICBpID0gX3BqX2FbX3BqX2NdO1xuICAgICAgICBbcmVsLCBwYXJlbnQsIGNoaWxkXSA9IGk7XG4gICAgICAgIG5vZGUgPSBub2Rlc1tjaGlsZF07XG4gICAgICAgIGlmIChwYXJlbnQgPT09IFwiUk9PVFwiKSB7XG4gICAgICAgICAgICBmb3Jlc3QucHVzaChub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudCA9IG5vZGVzW3BhcmVudF07XG4gICAgICAgICAgICBpZiAoIV9wai5pbl9lczYoXCJjaGlsZHJlblwiLCBwYXJlbnQpKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50W1wiY2hpbGRyZW5cIl0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkcmVuID0gcGFyZW50W1wiY2hpbGRyZW5cIl07XG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3Jlc3Q7XG59XG5cbmV4cG9ydCB7IHRyYW5zZm9ybURlcGVuZGVuY2llcyB9OyJdfQ==