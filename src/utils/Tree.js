import CoreNLP, { Properties, Pipeline, ConnectorServer } from "corenlp";
import { fallbackData } from './fallbackData'
import { dfs } from './dfs'

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
 * the JSON data of the sentence's structure
 * @param {*} treeData the sentence structure data 
 */
function getTreeData(sentence) {
    return new Promise((resolve, reject) => {
        const props = new Properties({
            annotators: "parse"
        });
        const pipeline = new Pipeline(props, "English"); // uses ConnectorServer by default

        const sent = new CoreNLP.simple.Sentence(sentence);
        pipeline
            .annotate(sent)
            .then(sent => {
                // Transforming the Tree to the correct format
                var treeString = JSON.stringify(CoreNLP.util.Tree.fromSentence(sent).rootNode);
                var treeJSON = JSON.parse(treeString);

                // Adding an attribute "Name" with the POS and word to each element in the array
                // Returning the new TreeData
                var treeDFS = dfs(treeJSON);
                var treeDFSString = JSON.stringify(treeDFS, null, 2)
                var treeData = JSON.parse(treeDFSString)

                resolve(treeData)
            })
            .catch(err => {
                resolve(fallbackData)
            });
    })
}

export { getTreeData }