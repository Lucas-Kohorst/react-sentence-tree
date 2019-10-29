import CoreNLP, { Properties, Pipeline } from "corenlp";
import { transformDependencies, transformConstituency } from "./transform";
import { dfsConstituency, dfsDependency } from "./dfs";
import { fallbackDependency, fallbackConstituency } from "./fallbackData";

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
 * @param {String} treeData the sentence structure data
 * @param {String} language the language to parse
 */
function getDependencyTree(sentence, language) {
    return new Promise((resolve, reject) => {
        const props = new Properties({
            annotators: "parse"
        });
        const pipeline = new Pipeline(props, language); // uses ConnectorServer by default

        const sent = new CoreNLP.simple.Sentence(sentence);
        pipeline
            .annotate(sent)
            .then(sent => {
                // Adding an attribute "Name" with the POS and word to each element in the array
                // Returning the new TreeData
                var dependency = sent.governors();
                var dependencyTree = [];

                // Adding all of the dependency's to the initial list
                dependency.forEach(value => {
                    var dependencyArray = [];
                    var governorGloss =
                        value.governorGloss() == "" ? "ROOT" : value.governorGloss();
                    dependencyArray.push(value.dep());
                    dependencyArray.push(governorGloss);
                    dependencyArray.push(value.dependentGloss());
                    dependencyTree.push(dependencyArray);
                });

                var treeData = dfsDependency(transformDependencies(dependencyTree));

                resolve(treeData);
            })
            .catch(err => {
                resolve(fallbackDependency);
            });
    });
}
/**
 * Takes in a sentence and returns
 * the JSON data of the sentence's dependency tree
 * @param {String} treeData the sentence structure data
 * @param {String} language the language to parse
 */
function getConstituencyTree(sentence, language) {
    return new Promise((resolve, reject) => {
        const props = new Properties({
            annotators: "parse"
        });
        const pipeline = new Pipeline(props, language); // uses ConnectorServer by default

        const sent = new CoreNLP.simple.Sentence(sentence);
        pipeline
            .annotate(sent)
            .then(sent => {
                var treeString = JSON.stringify(
                    CoreNLP.util.Tree.fromSentence(sent).rootNode
                );
                var treeJSON = JSON.parse(treeString);

                // Adding an attribute "Name" with the POS and word to each element in the array
                // Returning the new TreeData
                var treeDFS = dfsConstituency(treeJSON);
                var treeDFSString = JSON.stringify(treeDFS, null, 2);
                var treeData = JSON.parse(treeDFSString);

                resolve(treeData);
            })
            .catch(err => {
                resolve(fallbackConstituency);
            });
    });
}

export { getDependencyTree, getConstituencyTree };