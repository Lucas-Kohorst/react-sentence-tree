"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDependencyTree = getDependencyTree;
exports.getConstituencyTree = getConstituencyTree;

var _corenlp = _interopRequireWildcard(require("corenlp"));

var _transform = require("./transform");

var _dfs = require("./dfs");

var _fallbackData = require("./fallbackData");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Start a CoreNLP server
 * @see https://stanfordnlp.github.io/CoreNLP/download.html
 * @see https://github.com/stanfordnlp/CoreNLP/blob/master/README.md
 * @see https://www.npmjs.com/package/corenlp
 * @run using `npm explore corenlp -- npm run corenlp:server` with corenlp installed
 * @run using `java -mx4g -cp "*" edu.stanford.nlp.pipeline.StanfordCoreNLPServer -port 9000 -timeout 15000`
 */

/**
 * Takes in a sentence and returns
 * the JSON data of the sentence's dependency tree
 * @param {*} treeData the sentence structure data
 */
function getDependencyTree(sentence) {
  return new Promise(function (resolve, reject) {
    var props = new _corenlp.Properties({
      annotators: "parse"
    });
    var pipeline = new _corenlp.Pipeline(props, "English"); // uses ConnectorServer by default

    var sent = new _corenlp["default"].simple.Sentence(sentence);
    pipeline.annotate(sent).then(function (sent) {
      // Adding an attribute "Name" with the POS and word to each element in the array
      // Returning the new TreeData
      var dependency = sent.governors();
      var dependencyTree = []; // Adding all of the dependency's to the initial list

      dependency.forEach(function (value) {
        var dependencyArray = [];
        var governorGloss = value.governorGloss() == "" ? "ROOT" : value.governorGloss();
        dependencyArray.push(value.dep());
        dependencyArray.push(governorGloss);
        dependencyArray.push(value.dependentGloss());
        dependencyTree.push(dependencyArray);
      });
      var treeData = (0, _dfs.dfsDependency)((0, _transform.transformDependencies)(dependencyTree));
      resolve(treeData);
    })["catch"](function (err) {
      resolve(_fallbackData.fallbackDependency);
    });
  });
}
/**
 * Takes in a sentence and returns
 * the JSON data of the sentence's dependency tree
 * @param {*} treeData the sentence structure data
 */


function getConstituencyTree(sentence) {
  return new Promise(function (resolve, reject) {
    var props = new _corenlp.Properties({
      annotators: "parse"
    });
    var pipeline = new _corenlp.Pipeline(props, "English"); // uses ConnectorServer by default

    var sent = new _corenlp["default"].simple.Sentence(sentence);
    pipeline.annotate(sent).then(function (sent) {
      var treeString = JSON.stringify(_corenlp["default"].util.Tree.fromSentence(sent).rootNode);
      var treeJSON = JSON.parse(treeString); // Adding an attribute "Name" with the POS and word to each element in the array
      // Returning the new TreeData

      var treeDFS = (0, _dfs.dfsConstituency)(treeJSON);
      var treeDFSString = JSON.stringify(treeDFS, null, 2);
      var treeData = JSON.parse(treeDFSString);
      resolve(treeData);
    })["catch"](function (err) {
      resolve(_fallbackData.fallbackConstituency);
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9UcmVlLmpzIl0sIm5hbWVzIjpbImdldERlcGVuZGVuY3lUcmVlIiwic2VudGVuY2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInByb3BzIiwiUHJvcGVydGllcyIsImFubm90YXRvcnMiLCJwaXBlbGluZSIsIlBpcGVsaW5lIiwic2VudCIsIkNvcmVOTFAiLCJzaW1wbGUiLCJTZW50ZW5jZSIsImFubm90YXRlIiwidGhlbiIsImRlcGVuZGVuY3kiLCJnb3Zlcm5vcnMiLCJkZXBlbmRlbmN5VHJlZSIsImZvckVhY2giLCJ2YWx1ZSIsImRlcGVuZGVuY3lBcnJheSIsImdvdmVybm9yR2xvc3MiLCJwdXNoIiwiZGVwIiwiZGVwZW5kZW50R2xvc3MiLCJ0cmVlRGF0YSIsImVyciIsImZhbGxiYWNrRGVwZW5kZW5jeSIsImdldENvbnN0aXR1ZW5jeVRyZWUiLCJ0cmVlU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInV0aWwiLCJUcmVlIiwiZnJvbVNlbnRlbmNlIiwicm9vdE5vZGUiLCJ0cmVlSlNPTiIsInBhcnNlIiwidHJlZURGUyIsInRyZWVERlNTdHJpbmciLCJmYWxsYmFja0NvbnN0aXR1ZW5jeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7Ozs7Ozs7OztBQVNBOzs7OztBQUtBLFNBQVNBLGlCQUFULENBQTJCQyxRQUEzQixFQUFxQztBQUNqQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsUUFBTUMsS0FBSyxHQUFHLElBQUlDLG1CQUFKLENBQWU7QUFDekJDLE1BQUFBLFVBQVUsRUFBRTtBQURhLEtBQWYsQ0FBZDtBQUdBLFFBQU1DLFFBQVEsR0FBRyxJQUFJQyxpQkFBSixDQUFhSixLQUFiLEVBQW9CLFNBQXBCLENBQWpCLENBSm9DLENBSWE7O0FBRWpELFFBQU1LLElBQUksR0FBRyxJQUFJQyxvQkFBUUMsTUFBUixDQUFlQyxRQUFuQixDQUE0QlosUUFBNUIsQ0FBYjtBQUNBTyxJQUFBQSxRQUFRLENBQ0hNLFFBREwsQ0FDY0osSUFEZCxFQUVLSyxJQUZMLENBRVUsVUFBQUwsSUFBSSxFQUFJO0FBQ1Y7QUFDQTtBQUNBLFVBQUlNLFVBQVUsR0FBR04sSUFBSSxDQUFDTyxTQUFMLEVBQWpCO0FBQ0EsVUFBSUMsY0FBYyxHQUFHLEVBQXJCLENBSlUsQ0FNVjs7QUFDQUYsTUFBQUEsVUFBVSxDQUFDRyxPQUFYLENBQW1CLFVBQUFDLEtBQUssRUFBSTtBQUN4QixZQUFJQyxlQUFlLEdBQUcsRUFBdEI7QUFDQSxZQUFJQyxhQUFhLEdBQ2JGLEtBQUssQ0FBQ0UsYUFBTixNQUF5QixFQUF6QixHQUE4QixNQUE5QixHQUF1Q0YsS0FBSyxDQUFDRSxhQUFOLEVBRDNDO0FBRUFELFFBQUFBLGVBQWUsQ0FBQ0UsSUFBaEIsQ0FBcUJILEtBQUssQ0FBQ0ksR0FBTixFQUFyQjtBQUNBSCxRQUFBQSxlQUFlLENBQUNFLElBQWhCLENBQXFCRCxhQUFyQjtBQUNBRCxRQUFBQSxlQUFlLENBQUNFLElBQWhCLENBQXFCSCxLQUFLLENBQUNLLGNBQU4sRUFBckI7QUFDQVAsUUFBQUEsY0FBYyxDQUFDSyxJQUFmLENBQW9CRixlQUFwQjtBQUNILE9BUkQ7QUFVQSxVQUFJSyxRQUFRLEdBQUcsd0JBQWMsc0NBQXNCUixjQUF0QixDQUFkLENBQWY7QUFFQWYsTUFBQUEsT0FBTyxDQUFDdUIsUUFBRCxDQUFQO0FBQ0gsS0F0QkwsV0F1QlcsVUFBQUMsR0FBRyxFQUFJO0FBQ1Z4QixNQUFBQSxPQUFPLENBQUN5QixnQ0FBRCxDQUFQO0FBQ0gsS0F6Qkw7QUEwQkgsR0FqQ00sQ0FBUDtBQWtDSDtBQUNEOzs7Ozs7O0FBS0EsU0FBU0MsbUJBQVQsQ0FBNkI1QixRQUE3QixFQUF1QztBQUNuQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsUUFBTUMsS0FBSyxHQUFHLElBQUlDLG1CQUFKLENBQWU7QUFDekJDLE1BQUFBLFVBQVUsRUFBRTtBQURhLEtBQWYsQ0FBZDtBQUdBLFFBQU1DLFFBQVEsR0FBRyxJQUFJQyxpQkFBSixDQUFhSixLQUFiLEVBQW9CLFNBQXBCLENBQWpCLENBSm9DLENBSWE7O0FBRWpELFFBQU1LLElBQUksR0FBRyxJQUFJQyxvQkFBUUMsTUFBUixDQUFlQyxRQUFuQixDQUE0QlosUUFBNUIsQ0FBYjtBQUNBTyxJQUFBQSxRQUFRLENBQ0hNLFFBREwsQ0FDY0osSUFEZCxFQUVLSyxJQUZMLENBRVUsVUFBQUwsSUFBSSxFQUFJO0FBQ1YsVUFBSW9CLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQ2JyQixvQkFBUXNCLElBQVIsQ0FBYUMsSUFBYixDQUFrQkMsWUFBbEIsQ0FBK0J6QixJQUEvQixFQUFxQzBCLFFBRHhCLENBQWpCO0FBR0EsVUFBSUMsUUFBUSxHQUFHTixJQUFJLENBQUNPLEtBQUwsQ0FBV1IsVUFBWCxDQUFmLENBSlUsQ0FNVjtBQUNBOztBQUNBLFVBQUlTLE9BQU8sR0FBRywwQkFBZ0JGLFFBQWhCLENBQWQ7QUFDQSxVQUFJRyxhQUFhLEdBQUdULElBQUksQ0FBQ0MsU0FBTCxDQUFlTyxPQUFmLEVBQXdCLElBQXhCLEVBQThCLENBQTlCLENBQXBCO0FBQ0EsVUFBSWIsUUFBUSxHQUFHSyxJQUFJLENBQUNPLEtBQUwsQ0FBV0UsYUFBWCxDQUFmO0FBRUFyQyxNQUFBQSxPQUFPLENBQUN1QixRQUFELENBQVA7QUFDSCxLQWZMLFdBZ0JXLFVBQUFDLEdBQUcsRUFBSTtBQUNWeEIsTUFBQUEsT0FBTyxDQUFDc0Msa0NBQUQsQ0FBUDtBQUNILEtBbEJMO0FBbUJILEdBMUJNLENBQVA7QUEyQkgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29yZU5MUCwgeyBQcm9wZXJ0aWVzLCBQaXBlbGluZSB9IGZyb20gXCJjb3JlbmxwXCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm1EZXBlbmRlbmNpZXMsIHRyYW5zZm9ybUNvbnN0aXR1ZW5jeSB9IGZyb20gXCIuL3RyYW5zZm9ybVwiO1xuaW1wb3J0IHsgZGZzQ29uc3RpdHVlbmN5LCBkZnNEZXBlbmRlbmN5IH0gZnJvbSBcIi4vZGZzXCI7XG5pbXBvcnQgeyBmYWxsYmFja0RlcGVuZGVuY3ksIGZhbGxiYWNrQ29uc3RpdHVlbmN5IH0gZnJvbSBcIi4vZmFsbGJhY2tEYXRhXCI7XG5cbi8qKlxuICogU3RhcnQgYSBDb3JlTkxQIHNlcnZlclxuICogQHNlZSBodHRwczovL3N0YW5mb3JkbmxwLmdpdGh1Yi5pby9Db3JlTkxQL2Rvd25sb2FkLmh0bWxcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0YW5mb3JkbmxwL0NvcmVOTFAvYmxvYi9tYXN0ZXIvUkVBRE1FLm1kXG4gKiBAc2VlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2NvcmVubHBcbiAqIEBydW4gdXNpbmcgYG5wbSBleHBsb3JlIGNvcmVubHAgLS0gbnBtIHJ1biBjb3JlbmxwOnNlcnZlcmAgd2l0aCBjb3JlbmxwIGluc3RhbGxlZFxuICogQHJ1biB1c2luZyBgamF2YSAtbXg0ZyAtY3AgXCIqXCIgZWR1LnN0YW5mb3JkLm5scC5waXBlbGluZS5TdGFuZm9yZENvcmVOTFBTZXJ2ZXIgLXBvcnQgOTAwMCAtdGltZW91dCAxNTAwMGBcbiAqL1xuXG4vKipcbiAqIFRha2VzIGluIGEgc2VudGVuY2UgYW5kIHJldHVybnNcbiAqIHRoZSBKU09OIGRhdGEgb2YgdGhlIHNlbnRlbmNlJ3MgZGVwZW5kZW5jeSB0cmVlXG4gKiBAcGFyYW0geyp9IHRyZWVEYXRhIHRoZSBzZW50ZW5jZSBzdHJ1Y3R1cmUgZGF0YVxuICovXG5mdW5jdGlvbiBnZXREZXBlbmRlbmN5VHJlZShzZW50ZW5jZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gbmV3IFByb3BlcnRpZXMoe1xuICAgICAgICAgICAgYW5ub3RhdG9yczogXCJwYXJzZVwiXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwaXBlbGluZSA9IG5ldyBQaXBlbGluZShwcm9wcywgXCJFbmdsaXNoXCIpOyAvLyB1c2VzIENvbm5lY3RvclNlcnZlciBieSBkZWZhdWx0XG5cbiAgICAgICAgY29uc3Qgc2VudCA9IG5ldyBDb3JlTkxQLnNpbXBsZS5TZW50ZW5jZShzZW50ZW5jZSk7XG4gICAgICAgIHBpcGVsaW5lXG4gICAgICAgICAgICAuYW5ub3RhdGUoc2VudClcbiAgICAgICAgICAgIC50aGVuKHNlbnQgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFkZGluZyBhbiBhdHRyaWJ1dGUgXCJOYW1lXCIgd2l0aCB0aGUgUE9TIGFuZCB3b3JkIHRvIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm5pbmcgdGhlIG5ldyBUcmVlRGF0YVxuICAgICAgICAgICAgICAgIHZhciBkZXBlbmRlbmN5ID0gc2VudC5nb3Zlcm5vcnMoKTtcbiAgICAgICAgICAgICAgICB2YXIgZGVwZW5kZW5jeVRyZWUgPSBbXTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZGluZyBhbGwgb2YgdGhlIGRlcGVuZGVuY3kncyB0byB0aGUgaW5pdGlhbCBsaXN0XG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jeS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlcGVuZGVuY3lBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ292ZXJub3JHbG9zcyA9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5nb3Zlcm5vckdsb3NzKCkgPT0gXCJcIiA/IFwiUk9PVFwiIDogdmFsdWUuZ292ZXJub3JHbG9zcygpO1xuICAgICAgICAgICAgICAgICAgICBkZXBlbmRlbmN5QXJyYXkucHVzaCh2YWx1ZS5kZXAoKSk7XG4gICAgICAgICAgICAgICAgICAgIGRlcGVuZGVuY3lBcnJheS5wdXNoKGdvdmVybm9yR2xvc3MpO1xuICAgICAgICAgICAgICAgICAgICBkZXBlbmRlbmN5QXJyYXkucHVzaCh2YWx1ZS5kZXBlbmRlbnRHbG9zcygpKTtcbiAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jeVRyZWUucHVzaChkZXBlbmRlbmN5QXJyYXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIHRyZWVEYXRhID0gZGZzRGVwZW5kZW5jeSh0cmFuc2Zvcm1EZXBlbmRlbmNpZXMoZGVwZW5kZW5jeVRyZWUpKTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJlZURhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsbGJhY2tEZXBlbmRlbmN5KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBUYWtlcyBpbiBhIHNlbnRlbmNlIGFuZCByZXR1cm5zXG4gKiB0aGUgSlNPTiBkYXRhIG9mIHRoZSBzZW50ZW5jZSdzIGRlcGVuZGVuY3kgdHJlZVxuICogQHBhcmFtIHsqfSB0cmVlRGF0YSB0aGUgc2VudGVuY2Ugc3RydWN0dXJlIGRhdGFcbiAqL1xuZnVuY3Rpb24gZ2V0Q29uc3RpdHVlbmN5VHJlZShzZW50ZW5jZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gbmV3IFByb3BlcnRpZXMoe1xuICAgICAgICAgICAgYW5ub3RhdG9yczogXCJwYXJzZVwiXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwaXBlbGluZSA9IG5ldyBQaXBlbGluZShwcm9wcywgXCJFbmdsaXNoXCIpOyAvLyB1c2VzIENvbm5lY3RvclNlcnZlciBieSBkZWZhdWx0XG5cbiAgICAgICAgY29uc3Qgc2VudCA9IG5ldyBDb3JlTkxQLnNpbXBsZS5TZW50ZW5jZShzZW50ZW5jZSk7XG4gICAgICAgIHBpcGVsaW5lXG4gICAgICAgICAgICAuYW5ub3RhdGUoc2VudClcbiAgICAgICAgICAgIC50aGVuKHNlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHZhciB0cmVlU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgICAgIENvcmVOTFAudXRpbC5UcmVlLmZyb21TZW50ZW5jZShzZW50KS5yb290Tm9kZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdmFyIHRyZWVKU09OID0gSlNPTi5wYXJzZSh0cmVlU3RyaW5nKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZGluZyBhbiBhdHRyaWJ1dGUgXCJOYW1lXCIgd2l0aCB0aGUgUE9TIGFuZCB3b3JkIHRvIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm5pbmcgdGhlIG5ldyBUcmVlRGF0YVxuICAgICAgICAgICAgICAgIHZhciB0cmVlREZTID0gZGZzQ29uc3RpdHVlbmN5KHRyZWVKU09OKTtcbiAgICAgICAgICAgICAgICB2YXIgdHJlZURGU1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRyZWVERlMsIG51bGwsIDIpO1xuICAgICAgICAgICAgICAgIHZhciB0cmVlRGF0YSA9IEpTT04ucGFyc2UodHJlZURGU1N0cmluZyk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRyZWVEYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZhbGxiYWNrQ29uc3RpdHVlbmN5KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBnZXREZXBlbmRlbmN5VHJlZSwgZ2V0Q29uc3RpdHVlbmN5VHJlZSB9OyJdfQ==