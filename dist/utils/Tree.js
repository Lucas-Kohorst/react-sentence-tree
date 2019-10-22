"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTreeData = getTreeData;

var _corenlp = _interopRequireWildcard(require("corenlp"));

var _fallbackData = require("./fallbackData");

var _dfs = require("./dfs");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getTreeData(sentence) {
  return new Promise(function (resolve, reject) {
    var props = new _corenlp.Properties({
      annotators: "parse"
    });
    var pipeline = new _corenlp.Pipeline(props, "English"); // uses ConnectorServer by default

    var sent = new _corenlp["default"].simple.Sentence(sentence);
    pipeline.annotate(sent).then(function (sent) {
      // Transforming the Tree to the correct format
      var treeString = JSON.stringify(_corenlp["default"].util.Tree.fromSentence(sent).rootNode);
      var treeJSON = JSON.parse(treeString); // Adding an attribute "Name" with the POS and word to each element in the array
      // Returning the new TreeData

      var treeDFS = (0, _dfs.dfs)(treeJSON);
      var treeDFSString = JSON.stringify(treeDFS, null, 2);
      var treeData = JSON.parse(treeDFSString);
      resolve(treeData);
    })["catch"](function (err) {
      resolve(_fallbackData.fallbackData);
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9UcmVlLmpzIl0sIm5hbWVzIjpbImdldFRyZWVEYXRhIiwic2VudGVuY2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInByb3BzIiwiUHJvcGVydGllcyIsImFubm90YXRvcnMiLCJwaXBlbGluZSIsIlBpcGVsaW5lIiwic2VudCIsIkNvcmVOTFAiLCJzaW1wbGUiLCJTZW50ZW5jZSIsImFubm90YXRlIiwidGhlbiIsInRyZWVTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwidXRpbCIsIlRyZWUiLCJmcm9tU2VudGVuY2UiLCJyb290Tm9kZSIsInRyZWVKU09OIiwicGFyc2UiLCJ0cmVlREZTIiwidHJlZURGU1N0cmluZyIsInRyZWVEYXRhIiwiZXJyIiwiZmFsbGJhY2tEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQWdCQSxTQUFTQSxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUMzQixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsUUFBTUMsS0FBSyxHQUFHLElBQUlDLG1CQUFKLENBQWU7QUFDekJDLE1BQUFBLFVBQVUsRUFBRTtBQURhLEtBQWYsQ0FBZDtBQUdBLFFBQU1DLFFBQVEsR0FBRyxJQUFJQyxpQkFBSixDQUFhSixLQUFiLEVBQW9CLFNBQXBCLENBQWpCLENBSm9DLENBSWE7O0FBRWpELFFBQU1LLElBQUksR0FBRyxJQUFJQyxvQkFBUUMsTUFBUixDQUFlQyxRQUFuQixDQUE0QlosUUFBNUIsQ0FBYjtBQUNBTyxJQUFBQSxRQUFRLENBQ0hNLFFBREwsQ0FDY0osSUFEZCxFQUVLSyxJQUZMLENBRVUsVUFBQUwsSUFBSSxFQUFJO0FBQ1Y7QUFDQSxVQUFJTSxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxvQkFBUVEsSUFBUixDQUFhQyxJQUFiLENBQWtCQyxZQUFsQixDQUErQlgsSUFBL0IsRUFBcUNZLFFBQXBELENBQWpCO0FBQ0EsVUFBSUMsUUFBUSxHQUFHTixJQUFJLENBQUNPLEtBQUwsQ0FBV1IsVUFBWCxDQUFmLENBSFUsQ0FLVjtBQUNBOztBQUNBLFVBQUlTLE9BQU8sR0FBRyxjQUFJRixRQUFKLENBQWQ7QUFDQSxVQUFJRyxhQUFhLEdBQUdULElBQUksQ0FBQ0MsU0FBTCxDQUFlTyxPQUFmLEVBQXdCLElBQXhCLEVBQThCLENBQTlCLENBQXBCO0FBQ0EsVUFBSUUsUUFBUSxHQUFHVixJQUFJLENBQUNPLEtBQUwsQ0FBV0UsYUFBWCxDQUFmO0FBRUF2QixNQUFBQSxPQUFPLENBQUN3QixRQUFELENBQVA7QUFDSCxLQWRMLFdBZVcsVUFBQUMsR0FBRyxFQUFJO0FBQ1Z6QixNQUFBQSxPQUFPLENBQUMwQiwwQkFBRCxDQUFQO0FBQ0gsS0FqQkw7QUFrQkgsR0F6Qk0sQ0FBUDtBQTBCSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JlTkxQLCB7IFByb3BlcnRpZXMsIFBpcGVsaW5lLCBDb25uZWN0b3JTZXJ2ZXIgfSBmcm9tIFwiY29yZW5scFwiO1xuaW1wb3J0IHsgZmFsbGJhY2tEYXRhIH0gZnJvbSAnLi9mYWxsYmFja0RhdGEnXG5pbXBvcnQgeyBkZnMgfSBmcm9tICcuL2RmcydcblxuLyoqXG4gKiBTdGFydCBhIENvcmVOTFAgc2VydmVyXG4gKiBAc2VlIGh0dHBzOi8vc3RhbmZvcmRubHAuZ2l0aHViLmlvL0NvcmVOTFAvZG93bmxvYWQuaHRtbFxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vc3RhbmZvcmRubHAvQ29yZU5MUC9ibG9iL21hc3Rlci9SRUFETUUubWRcbiAqIEBzZWUgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvY29yZW5scFxuICogQHJ1biB1c2luZyBgbnBtIGV4cGxvcmUgY29yZW5scCAtLSBucG0gcnVuIGNvcmVubHA6c2VydmVyYCB3aXRoIGNvcmVubHAgaW5zdGFsbGVkXG4gKiBAcnVuIHVzaW5nIGBqYXZhIC1teDRnIC1jcCBcIipcIiBlZHUuc3RhbmZvcmQubmxwLnBpcGVsaW5lLlN0YW5mb3JkQ29yZU5MUFNlcnZlciAtcG9ydCA5MDAwIC10aW1lb3V0IDE1MDAwYFxuICovXG5cbi8qKlxuICogVGFrZXMgaW4gYSBzZW50ZW5jZSBhbmQgcmV0dXJuc1xuICogdGhlIEpTT04gZGF0YSBvZiB0aGUgc2VudGVuY2UncyBzdHJ1Y3R1cmVcbiAqIEBwYXJhbSB7Kn0gdHJlZURhdGEgdGhlIHNlbnRlbmNlIHN0cnVjdHVyZSBkYXRhIFxuICovXG5mdW5jdGlvbiBnZXRUcmVlRGF0YShzZW50ZW5jZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gbmV3IFByb3BlcnRpZXMoe1xuICAgICAgICAgICAgYW5ub3RhdG9yczogXCJwYXJzZVwiXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwaXBlbGluZSA9IG5ldyBQaXBlbGluZShwcm9wcywgXCJFbmdsaXNoXCIpOyAvLyB1c2VzIENvbm5lY3RvclNlcnZlciBieSBkZWZhdWx0XG5cbiAgICAgICAgY29uc3Qgc2VudCA9IG5ldyBDb3JlTkxQLnNpbXBsZS5TZW50ZW5jZShzZW50ZW5jZSk7XG4gICAgICAgIHBpcGVsaW5lXG4gICAgICAgICAgICAuYW5ub3RhdGUoc2VudClcbiAgICAgICAgICAgIC50aGVuKHNlbnQgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFRyYW5zZm9ybWluZyB0aGUgVHJlZSB0byB0aGUgY29ycmVjdCBmb3JtYXRcbiAgICAgICAgICAgICAgICB2YXIgdHJlZVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KENvcmVOTFAudXRpbC5UcmVlLmZyb21TZW50ZW5jZShzZW50KS5yb290Tm9kZSk7XG4gICAgICAgICAgICAgICAgdmFyIHRyZWVKU09OID0gSlNPTi5wYXJzZSh0cmVlU3RyaW5nKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZGluZyBhbiBhdHRyaWJ1dGUgXCJOYW1lXCIgd2l0aCB0aGUgUE9TIGFuZCB3b3JkIHRvIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm5pbmcgdGhlIG5ldyBUcmVlRGF0YVxuICAgICAgICAgICAgICAgIHZhciB0cmVlREZTID0gZGZzKHRyZWVKU09OKTtcbiAgICAgICAgICAgICAgICB2YXIgdHJlZURGU1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRyZWVERlMsIG51bGwsIDIpXG4gICAgICAgICAgICAgICAgdmFyIHRyZWVEYXRhID0gSlNPTi5wYXJzZSh0cmVlREZTU3RyaW5nKVxuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cmVlRGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZhbGxiYWNrRGF0YSlcbiAgICAgICAgICAgIH0pO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7IGdldFRyZWVEYXRhIH0iXX0=