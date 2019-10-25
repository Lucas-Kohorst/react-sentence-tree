// Array of visited nodes
var visitConstituency = [];
// Visited Node Counter
var vnConstituency = 0;
/**
 * DFS that traverses the tree
 * and then adds a name attribute
 * in the form of "Word (POS)"
 * to each node
 * @param v the structure to traverse
 */
function dfsConstituency(v) {
    Object.keys(v).forEach(function(k) {
        if (!visitConstituency[vnConstituency++]) {
            // Checking if ROOT
            if (v[k].pos == "ROOT") {
                v[k].name = "ROOT";
            }
            if (typeof v[k] === "object") {
                try {
                    // Getting the Word and POS
                    var word = v[k].word;
                    var pos = v[k].pos.toUpperCase();
                } catch (error) {}
                // Adding the name attribute
                v[k].name = word + " (" + pos + ")";
                dfsConstituency(v[k]);
            }
        } else {
            visitConstituency.splice(vnConstituency, 0, true);
        }
    });
    return v;
}

// Array of visited nodes
var visitDependency = [];
// Visited Node Counter
var vnDependency = 0;
/**
 * DFS that traverses the tree
 * and then adds a name attribute
 * in the form of "Word (POS)"
 * to each node
 * @param v the structure to traverse
 */
function dfsDependency(v) {
    Object.keys(v).forEach(function(k) {
        if (!visitDependency[vnDependency++]) {
            // Checking if ROOT
            if (v[k].Relationship == "ROOT") {
                v[k].name = "ROOT";
            }
            if (typeof v[k] === "object") {
                try {
                    // Getting the Word and POS
                    var word = v[k].Name;
                    var pos = v[k].Relationship.toUpperCase();
                } catch (error) {}
                // Adding the name attribute
                v[k].name = word + " (" + pos + ")";
                dfsDependency(v[k]);
            }
        } else {
            visitDependency.splice(vnDependency, 0, true);
        }
    });
    return v;
}

export { dfsConstituency, dfsDependency };