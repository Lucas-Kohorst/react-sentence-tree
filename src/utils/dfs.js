// Array of visited nodes
var visit = [];
// Visited Node Counter
var vn = 0;
/**
 * DFS that traverses the tree
 * and then adds a name attribute
 * in the form of "Word (POS)"
 * to each node
 * @param v the structure to traverse
 */
function dfs(v) {
    Object.keys(v).forEach(function(k) {
        if (!visit[vn++]) {
            // Checking if ROOT
            if (v[k].pos == "ROOT") {
                v[k].name = "ROOT"
            }
            if (typeof v[k] === "object") {
                try {
                    // Getting the Word and POS
                    var word = v[k].word;
                    var pos = v[k].pos.toUpperCase();
                } catch (error) {}
                // Adding the name attribute
                v[k].name = word + " (" + pos + ")";
                dfs(v[k]);
            }
        } else {
            visit.splice(vn, 0, true);
        }
    });
    return v;
}

export { dfs }