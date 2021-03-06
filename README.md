<p align="center">
  
  <h3 align="center">React Sentence Tree</h3>

  <p align="center">
    Quickly visualize sentences in a Tree Diagram
    <br />
    <a href="https://github.com/Lucas-Kohorst/react-sentence-tree-demo" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/Lucas-Kohorst/react-sentence-tree/issues" target="_blank">Report Bug</a>
    ·
    <a href="https://github.com/Lucas-Kohorst/react-sentence-tree/issues" target="_blank">Request Feature</a>
  </p>

  <div align="center">
  <a href="https://badge.fury.io/js/react-sentence-tree" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-sentence-tree.svg" alt="npm version" height="18"></a>
  <a href="https://github.com/Lucas-Kohorst/react-sentence-tree//network/members" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/forks/Lucas-Kohorst/react-sentence-tree?style=social"></img></a>
  <a href="https://github.com/Lucas-Kohorst/react-sentence-tree//stargazers" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/Lucas-Kohorst/react-sentence-tree?style=social"></img></a>
  <a href="https://github.com/Lucas-Kohorst/react-sentence-tree//issues" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/issues/Lucas-Kohorst/react-sentence-tree"></img></a>
  <a href="https://github.com/Lucas-Kohorst/react-sentence-tree/blob/master/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/l/react-sentence-tree"></img></a>
  <a href="https://linkedin.com/in/lucaskohorst"  target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555"></img></a>
  </div>

</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Quick Start](#quick-start)
  * [Failed to Compile](#failed-to-compile)
* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#Install)
  * [Configuring StanfordNLP](#StanfordNLP)
* [Documentation](#documentation)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## Quick Start
This is a react component that will render constituency/syntactical and dependency trees based on sentence input

#### 1. Install
```npm i react-sentence-tree```

#### 2. Import 
```import { SentenceTree } from 'react-sentence-tree```

#### Start a Stanford CoreNLP Server
Stanford CoreNLP can by downloaded and ran through npm thanks to [CoreNLP @gerardobort](https://www.npmjs.com/package/corenlp). If you want to [compile from sources see below](#StandfordNLP)

```
npm explore corenlp -- npm run corenlp:download
```

Once downloaded you can easily start the server by running

```bash
npm explore corenlp -- npm run corenlp:server
```

#### 3. Render
```
// Custom sentence
<SentenceTree sentence="The little dog ran fast">

// Dependency Tree
<SentenceTree type={"dependency"} textbox=true>

// Textbox for user input
<SentenceTree textbox=true>
```

## Failed to Compile
If you receive this error an error similar to 
```
./node_modules/corenlp/dist/connector/connector-server.js
Module not found: Can't resolve 'request-promise-native' in '/<filepath>/node_modules/corenlp/dist/connector'
```

Don't worry this can easily be fixed by opening ```/<filepath>/node_modules/corenlp/dist/package.json``` and changing the following line

```
"request-promise-native": "./src/polyfills/request-promise-native.js",
```
 
to

```
"request-promise-native": "./dist/polyfills/request-promise-native.js",
```

I have opened a [pull request](https://github.com/gerardobort/node-corenlp/pull/56) for this as well. 
Now the package should work. If you are still having problems open an [issue](https://github.com/Lucas-Kohorst/react-sentence-tree//issues)
or [contact me](#contact)

<!-- ABOUT THE PROJECT -->
## About The Project

This react component provides an easy way to the constituency/syntactical structure or dependency tree of a sentence.

### Built With
* [React](https://github.com/facebook/react)
* [CoreNLP - NPM](https://www.npmjs.com/package/corenlp)
* [react-d3-Tree](https://www.npmjs.com/package/react-d3-tree)

<!-- GETTING STARTED -->
## Getting Started

## Install
```npm i react-sentence-tree```

## Import 
```import { SentenceTree } from 'react-sentence-tree```

## StanfordNLP

Credits to [CoreNLP @gerardobort](https://www.npmjs.com/package/corenlp)

##### Download Stanford CoreNLP

##### Shortcut

Via `npm`, run this command from your own project after having installed this library:

```
npm explore corenlp -- npm run corenlp:download
```

Once downloaded you can easily start the server by running

```
npm explore corenlp -- npm run corenlp:server
```

Or you can manually download the project from the Stanford's CoreNLP download section at: https://stanfordnlp.github.io/CoreNLP/download.html
You may want to download, apart of the full package, other language models (see more on that page).

##### Via sources

For advanced projects, when you have to customize the library a bit more, we highly recommend to download the StanfordCoreNLP from the [original repository](https://github.com/stanfordnlp/CoreNLP), and compile the source code by using `ant jar`.

##### Configure Stanford CoreNLP

There are two method to connect your NodeJS application to Stanford CoreNLP:

1. HTTP is the preferred method since it requires CoreNLP to initialize just once to serve many requests, it also avoids extra I/O given that the CLI method need to write temporary files to run *recommended*.
2. Via Command Line Interface, this is by spawning processes from your app.

##### Using StanfordCoreNLPServer

```bash
# Run the server using all jars in the current directory (e.g., the CoreNLP home directory)
java -mx4g -cp "*" edu.stanford.nlp.pipeline.StanfordCoreNLPServer -port 9000 -timeout 15000
```

CoreNLP connects by default via StanfordCoreNLPServer, using port 9000.  You can also opt to setup the connection differently:

You can configure the corenlp port in [utils/Tree.js](https://github.com/Lucas-Kohorst/react-sentence-tree/blob/master/src/utils/Tree.js)

```
import CoreNLP, { Properties, Pipeline, ConnectorServer } from 'corenlp';

// Configure to port of your choosing 9000 default
const connector = new ConnectorServer({ dsn: 'http://localhost:9000' });

// Pass it into the pipeline
const pipeline = new Pipeline(props, "English", connector);
```

## 4. Usage
```
// Custom sentence
<SentenceTree sentence="The little dog ran fast">

// Dependency Tree
<SentenceTree type={"dependency"} textbox=true>

// Textbox for user input
<SentenceTree textbox=true>

// @todo Add more usage examples
```

<!-- Documentation -->
## Documentation

#### Sentence Props
| **Property** | **Type** | **Required?** | **Options**                                                 | **Default**                        | **Description**                                   |
|--------------|----------|---------------|-------------------------------------------------------------|------------------------------------|---------------------------------------------------|
| sentence     | string   |               |                                                             | "I shot an elephant in my pajamas" | The sentence that you wish to parse               |
| type         | string   |               | "constituency", "dependency"                                | constituency                       | The type of tree you want to generate             |
| textField    | boolean  |               | true, false                                                 | false                              | If you want to render a text field for user input |
| language     | string   |               | see https://github\.com/stanfordnlp/CoreNLP\#latest\-models | "English"                          | The language you want to parse                    |


#### Tree Props
Credits to [react-d3-tree @bkrem](https://www.npmjs.com/package/react-d3-tree)

| Property                      | Type                   | Options                                                                                | Required? | Default                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|:------------------------------|:-----------------------|:---------------------------------------------------------------------------------------|:----------|:--------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `data`                        | `array`<br/>`object`   |                                                                                        | required  | `undefined`                                                   | Single-element array containing the root node object (see `myTreeData` above). <br/> Passing the root node object without an array wrapping it is also possible. <br /><br /> `react-d3-tree` will automatically attach a unique `id` attribute to each node in the DOM, as well as `data-source-id` & `data-target-id` attributes to each link connecting two nodes.                                                                                                                                                                                  |
| `nodeSvgShape`                | `object`               | see [Node shapes](#node-shapes)                                                        |           | `{shape: 'circle', shapeProps: {r: 10}}`                      | Sets a specific SVG shape element + shapeProps to be used for each node.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `nodeLabelComponent`          | `object`               | see [Using foreignObjects](#using-foreignobjects)                                      |           | `null`                                                        | Allows using a React component as a node label; requires `allowForeignObjects` to be set.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `onClick`                     | `func`                 |                                                                                        |           | `undefined`                                                   | Callback function to be called when a node is clicked. <br /><br />Has the function signature `(nodeData, evt)`. The clicked node's data object is passed as first parameter, event object as second.                                                                                                                                                                                                                                                                                                                                                  |
| `onMouseOver`                 | `func`                 |                                                                                        |           | `undefined`                                                   | Callback function to be called when mouse enters the space belonging to a node. <br /><br />Has the function signature `(nodeData, evt)`. The clicked node's data object is passed as first parameter, event object as second.                                                                                                                                                                                                                                                                                                                         |
| `onMouseOut`                  | `func`                 |                                                                                        |           | `undefined`                                                   | Callback function to be called when mouse leaves the space belonging to a node. <br /><br />Has the function signature `(nodeData, evt)`. The clicked node's data object is passed as first parameter, event object as second.                                                                                                                                                                                                                                                                                                                         |
| `onLinkClick`                 | `func`                 |                                                                                        |           | `undefined`                                                   | Callback function to be called when a link is clicked. <br /><br />Has the function signature `(linkSource, linkTarget, evt)`. The clicked link's parent data object is passed as first parameter, the child's as second, the event object as third.                                                                                                                                                                                                                                                                                                   |
| `onLinkMouseOver`             | `func`                 |                                                                                        |           | `undefined`                                                   | Callback function to be called when mouse enters the space belonging to a link. <br /><br />Has the function signature `(linkSource, linkTarget, evt)`. The clicked link's parent data object is passed as first parameter, the child's as second, the event object as third.                                                                                                                                                                                                                                                                          |
| `onLinkMouseOut`              | `func`                 |                                                                                        |           | `undefined`                                                   | Callback function to be called when mouse leaves the space belonging to a link. <br /><br />Has the function signature `(linkSource, linkTarget, evt)`. The clicked link's parent data object is passed as first parameter, the child's as second, the event object as third.                                                                                                                                                                                                                                                                          |
| `onUpdate`                    | `func`                 |                                                                                        |           | `undefined`                                                   | Callback function to be called when the inner D3 component updates. That is - on every zoom or translate event, or when tree branches are toggled. <br /><br />Has the function signature `(updateTarget: {targetNode, currentTranslate, currentZoom})`.                                                                                                                                                                                                                                                                                               |
| `orientation`                 | `string` (enum)        | `horizontal` `vertical`                                                                |           | `horizontal`                                                  | `horizontal` - Tree expands left-to-right. <br /><br /> `vertical` - Tree expands top-to-bottom.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `translate`                   | `object`               |                                                                                        |           | `{x: 0, y: 0}`                                                | Translates the graph along the x/y axis by the specified amount of pixels (avoids the graph being stuck in the top left canvas corner).                                                                                                                                                                                                                                                                                                                                                                                                                |
| `pathFunc`                    | `string (enum)`/`func` | `diagonal`<br/>`elbow`<br/>`straight`<br/>`customFunc(linkData, orientation)`          |           | `diagonal`                                                    | `diagonal` - Smooth, curved edges between parent-child nodes. <br /><br /> `elbow` - Sharp edges at right angles between parent-child nodes.  <br /><br /> `straight` - Straight lines between parent-child nodes. <br /><br /> `customFunc` - Custom draw function that accepts `linkData` as its first param and `orientation` as its second.                                                                                                                                                                                                        |
| `collapsible`                 | `bool`                 |                                                                                        |           | `true`                                                        | Toggles ability to collapse/expand the tree's nodes by clicking them.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `useCollapseData`             | `bool`                 | see [Pre-defining a node's `_collapsed` state](#pre-defining-a-nodes-_collapsed-state) |           | `false`                                                       | Toggles whether the tree should automatically use any `_collapsed: bool` properties it finds on nodes in the passed data set to configure its initial layout.                                                                                                                                                                                                                                                                                                                                                                                          |
| `shouldCollapseNeighborNodes` | `bool`                 |                                                                                        |           | `false`                                                       | If a node is currently being expanded, all other nodes at the same depth will be collapsed.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `initialDepth`                | `number`               | `0..n`                                                                                 |           | `undefined`                                                   | Sets the maximum node depth to which the tree is expanded on its initial render. <br /> Tree renders to full depth if prop is omitted.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `depthFactor`                 | `number`               | `-n..0..n`                                                                             |           | `undefined`                                                   | Ensures the tree takes up a fixed amount of space (`node.y = node.depth * depthFactor`), regardless of tree depth. <br /> **TIP**: Negative values invert the tree's direction.                                                                                                                                                                                                                                                                                                                                                                        |
| `zoomable`                    | `bool`                 |                                                                                        |           | `true`                                                        | Toggles ability to zoom in/out on the Tree by scaling it according to `props.scaleExtent`.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `zoom`                        | `number`               | `0..n`                                                                                 |           | `1`                                                           | A floating point number to set the initial zoom level. It is constrained by `props.scaleExtent`. `1` is the default "non-zoomed" level.                                                                                                                                                                                                                                                                                                                                                                                                                |
| `scaleExtent`                 | `object`               | `{min: 0..n, max: 0..n}`                                                               |           | `{min: 0.1, max: 1}`                                          | Sets the minimum/maximum extent to which the tree can be scaled if `props.zoomable` is true.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `nodeSize`                    | `object`               | `{x: 0..n, y: 0..n}`                                                                   |           | `{x: 140, y: 140}`                                            | Sets a fixed size for each node. <br /><br /> This does not affect node circle sizes, circle sizes are handled by the `circleRadius` prop.                                                                                                                                                                                                                                                                                                                                                                                                             |
| `separation`                  | `object`               | `{siblings: 0..n, nonSiblings: 0..n}`                                                  |           | `{siblings: 1, nonSiblings: 2}`                               | Sets separation between neighbouring nodes, differentiating between siblings (same parent) and non-siblings.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `transitionDuration`          | `number`               | `0..n`                                                                                 |           | `500`                                                         | Sets the animation duration (in ms) of each expansion/collapse of a tree node. <br /><br /> Set this to `0` to deactivate animations completely.                                                                                                                                                                                                                                                                                                                                                                                                       |
| `textLayout`                  | `object`               | `{textAnchor: enum, x: -n..0..n, y: -n..0..n, transform: string}`                      |           | `{textAnchor: "start", x: 10, y: -10, transform: undefined }` | Configures the positioning of each node's text (name & attributes) relative to the node itself. Defining a `textLayout` property on a node passed in `props.data` will override this global configuration for that node.<br/><br/>`textAnchor` enums mirror the [`text-anchor` spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor).<br/><br/>`x` & `y` accept integers denoting `px` values.<br/><br/> `transform` mirrors the [svg `transform` spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform). |
| `styles`                      | `object`               | see [Styling](#styling)                                                                |           | `Node`/`Link` CSS files                                       | Overrides and/or enhances the tree's default styling.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `allowForeignObjects`         | `bool`                 | see [Using foreignObjects](#using-foreignobjects)                                      |           | `false`                                                       | Allows use of partially supported `<foreignObject />` elements.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `circleRadius` (legacy)       | `number`               | `0..n`                                                                                 |           | `undefined`                                                   | Sets the radius of each node's `<circle>` element.<br /><br /> **Will be deprecated in v2, please use `nodeSvgShape` instead.**                                                                                                                                                                                                                                                                                                                                                                                                                        |


<!-- ROADMAP -->
## Roadmap
See the [open issues](https://github.com/Lucas-Kohorst/react-sentence-tree/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Feel free to fork, open pull requests and contribute to this project

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/<feature>`)
3. Commit your Changes (`git commit -m 'Useful description of the feature'`)
4. Push to the Branch (`git push origin feature/<feature>`)
5. Open a Pull Request

<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact
[@KohorstLucas](https://twitter.com/KohoestLucas)<br />
[kohorstlucas@gmail.com](mailto:kohorstlucas@gmail.com)

<!-- ACKNOWLEDGEMENTS -->
## Research and Acknowledgments
### Research
* [Penn Treeebank Constitutes](http://surdeanu.info/mihai/teaching/ista555-fall13/readings/PennTreebankConstituents.html)
* [Stanford NLP Parser](https://nlp.stanford.edu/software/lex-parser.shtml)
* [A Fundamental Algorithm for Dependency Parsing](http://web.stanford.edu/~mjkay/covington.pdf)
* [Tree Syntax of Natural Language](cs.cornell.edu/courses/cs474/2004fa/lec1.pdf)
* [Constituency vs. Dependency Parsing](http://www.ruslang.ru/doc/melchuk_festschrift2012/Kahane.pdf.)
* [Constituency Parsing](https://web.stanford.edu/~jurafsky/slp3/13.pdf.)
* [Dependency Parsing](https://web.stanford.edu/~jurafsky/slp3/15.pdf.)
* [Ideas for hard to parse sentences](https://www.reddit.com/r/LanguageTechnology/comments/dlj40d/what_are_some_of_the_hardest_types_or_examples_of/.)

### Packages
* [react-d3-tree @bkrem](https://www.npmjs.com/package/react-d3-tree)
* [CoreNLP @gerardobort](https://www.npmjs.com/package/corenlp)
