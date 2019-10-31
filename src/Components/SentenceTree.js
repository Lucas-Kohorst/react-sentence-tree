import React, { Component } from "react";

import Tree from "react-d3-tree";
import TextField from "@material-ui/core/TextField";
import { getDependencyTree, getConstituencyTree } from "../utils/Tree";

import {
  fallbackConstituency
} from "../utils/fallbackData";

const containerStyles = {
  width: "100%",
  height: "100vh"
};

class SentenceTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: fallbackConstituency,
      translate: {},
      sentence: this.props.sentence ? this.props.sentence : "",
      type: this.props.type ? this.props.type : "constituency",
      header: this.props.header ? true : false,
      textField: this.props.textField ? true : false,
      language: this.props.language ? this.props.language : "English"
    };
  }

  componentWillMount() {
    this.updateTree();
  }

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 10
      }
    });
  }

  updateTree() {
    if (this.state.type == "constituency") {
      getConstituencyTree(this.state.sentence, this.state.language).then(value => {
        this.setState({
          treeData: value
        })
      });
    } 
    
    if (this.state.type == "dependency") {
      getDependencyTree(this.state.sentence, this.state.language).then(value => {
        this.setState({
          treeData: value
        });
      });
    }
  }

  _handleChange(event) {
    this.setState({
      sentence: event.target.value
    });
    this.updateTree();
  }

  _header() {
    if (this.state.header == true) {
      return (
        <h1>
          {this.state.type.charAt(0).toUpperCase() + this.state.type.slice(1)}
        </h1>
      );
    }
  }

  _textField() {
    if (this.state.textField == true) {
      return (
        <TextField
          id="standard-full-width"
          label="Sentence"
          style={{ margin: 8 }}
          value={this.state.sentence}
          onChange={this._handleChange.bind(this)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
      );
    }
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        {this._header()}
        {this._textField()}
        <Tree
          data={this.state.treeData}
          translate={this.state.translate}
          orientation={"vertical"}
          // Props that can be applied to the tree
          // @see https://github.com/Lucas-Kohorst/react-sentence-tree#tree-props
          nodeSvgShape={this.props.nodeSvgShape}
          nodeLabelComponent={this.props.nodeLabelComponent}
          onClick={this.props.onClick}
          onMouseOver={this.props.onMouseOver}
          onMouseOut={this.props.onMouseOut}
          onLinkClick={this.props.onLinkClick}
          onLinkMouseOver={this.props.onLinkMouseOver}
          onLinkMouseOut={this.props.onLinkMouseOut}
          onUpdate={this.props.onUpdate}
          pathFunc={this.props.pathFunc}
          collapsible={this.props.collapsible}
          useCollapseData={this.props.useCollapseData}
          shouldCollapseNeighborNodes={this.props.shouldCollapseNeighborNodes}
          initialDepth={this.props.initialDepth}
          depthFactor={this.props.depthFactor}
          zoomable={this.props.zoomable}
          zoom={this.props.zoom}
          scaleExtent={this.props.scaleExtent}
          nodeSize={this.props.nodeSize}
          separation={this.props.separation}
          transitionDuration={this.props.transitionDuration}
          textLayout={this.props.textLayout}
          allowForeignObjects={this.props.allowForeignObjects}
        />
      </div>
    );
  }
}

export { SentenceTree };