"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dfs = dfs;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Array of visited nodes
var visit = []; // Visited Node Counter

var vn = 0;
/**
 * DFS that traverses the tree
 * and then adds a name attribute
 * in the form of "Word (POS)"
 * to each node
 * @param v the structure to traverse
 */

function dfs(v) {
  Object.keys(v).forEach(function (k) {
    if (!visit[vn++]) {
      // Checking if ROOT
      if (v[k].pos == "ROOT") {
        v[k].name = "ROOT";
      }

      if (_typeof(v[k]) === "object") {
        try {
          // Getting the Word and POS
          var word = v[k].word;
          var pos = v[k].pos.toUpperCase();
        } catch (error) {} // Adding the name attribute


        v[k].name = word + " (" + pos + ")";
        dfs(v[k]);
      }
    } else {
      visit.splice(vn, 0, true);
    }
  });
  return v;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kZnMuanMiXSwibmFtZXMiOlsidmlzaXQiLCJ2biIsImRmcyIsInYiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImsiLCJwb3MiLCJuYW1lIiwid29yZCIsInRvVXBwZXJDYXNlIiwiZXJyb3IiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBSUEsS0FBSyxHQUFHLEVBQVosQyxDQUNBOztBQUNBLElBQUlDLEVBQUUsR0FBRyxDQUFUO0FBQ0E7Ozs7Ozs7O0FBT0EsU0FBU0MsR0FBVCxDQUFhQyxDQUFiLEVBQWdCO0FBQ1pDLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixDQUFaLEVBQWVHLE9BQWYsQ0FBdUIsVUFBU0MsQ0FBVCxFQUFZO0FBQy9CLFFBQUksQ0FBQ1AsS0FBSyxDQUFDQyxFQUFFLEVBQUgsQ0FBVixFQUFrQjtBQUNkO0FBQ0EsVUFBSUUsQ0FBQyxDQUFDSSxDQUFELENBQUQsQ0FBS0MsR0FBTCxJQUFZLE1BQWhCLEVBQXdCO0FBQ3BCTCxRQUFBQSxDQUFDLENBQUNJLENBQUQsQ0FBRCxDQUFLRSxJQUFMLEdBQVksTUFBWjtBQUNIOztBQUNELFVBQUksUUFBT04sQ0FBQyxDQUFDSSxDQUFELENBQVIsTUFBZ0IsUUFBcEIsRUFBOEI7QUFDMUIsWUFBSTtBQUNBO0FBQ0EsY0FBSUcsSUFBSSxHQUFHUCxDQUFDLENBQUNJLENBQUQsQ0FBRCxDQUFLRyxJQUFoQjtBQUNBLGNBQUlGLEdBQUcsR0FBR0wsQ0FBQyxDQUFDSSxDQUFELENBQUQsQ0FBS0MsR0FBTCxDQUFTRyxXQUFULEVBQVY7QUFDSCxTQUpELENBSUUsT0FBT0MsS0FBUCxFQUFjLENBQUUsQ0FMUSxDQU0xQjs7O0FBQ0FULFFBQUFBLENBQUMsQ0FBQ0ksQ0FBRCxDQUFELENBQUtFLElBQUwsR0FBWUMsSUFBSSxHQUFHLElBQVAsR0FBY0YsR0FBZCxHQUFvQixHQUFoQztBQUNBTixRQUFBQSxHQUFHLENBQUNDLENBQUMsQ0FBQ0ksQ0FBRCxDQUFGLENBQUg7QUFDSDtBQUNKLEtBZkQsTUFlTztBQUNIUCxNQUFBQSxLQUFLLENBQUNhLE1BQU4sQ0FBYVosRUFBYixFQUFpQixDQUFqQixFQUFvQixJQUFwQjtBQUNIO0FBQ0osR0FuQkQ7QUFvQkEsU0FBT0UsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXJyYXkgb2YgdmlzaXRlZCBub2Rlc1xudmFyIHZpc2l0ID0gW107XG4vLyBWaXNpdGVkIE5vZGUgQ291bnRlclxudmFyIHZuID0gMDtcbi8qKlxuICogREZTIHRoYXQgdHJhdmVyc2VzIHRoZSB0cmVlXG4gKiBhbmQgdGhlbiBhZGRzIGEgbmFtZSBhdHRyaWJ1dGVcbiAqIGluIHRoZSBmb3JtIG9mIFwiV29yZCAoUE9TKVwiXG4gKiB0byBlYWNoIG5vZGVcbiAqIEBwYXJhbSB2IHRoZSBzdHJ1Y3R1cmUgdG8gdHJhdmVyc2VcbiAqL1xuZnVuY3Rpb24gZGZzKHYpIHtcbiAgICBPYmplY3Qua2V5cyh2KS5mb3JFYWNoKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgaWYgKCF2aXNpdFt2bisrXSkge1xuICAgICAgICAgICAgLy8gQ2hlY2tpbmcgaWYgUk9PVFxuICAgICAgICAgICAgaWYgKHZba10ucG9zID09IFwiUk9PVFwiKSB7XG4gICAgICAgICAgICAgICAgdltrXS5uYW1lID0gXCJST09UXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdltrXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldHRpbmcgdGhlIFdvcmQgYW5kIFBPU1xuICAgICAgICAgICAgICAgICAgICB2YXIgd29yZCA9IHZba10ud29yZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IHZba10ucG9zLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgICAgICAgICAgICAgLy8gQWRkaW5nIHRoZSBuYW1lIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIHZba10ubmFtZSA9IHdvcmQgKyBcIiAoXCIgKyBwb3MgKyBcIilcIjtcbiAgICAgICAgICAgICAgICBkZnModltrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aXNpdC5zcGxpY2Uodm4sIDAsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHY7XG59XG5cbmV4cG9ydCB7IGRmcyB9Il19