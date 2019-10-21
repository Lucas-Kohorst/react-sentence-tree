import React, { Component } from "react";

import Tree from "react-d3-tree";
import TextField from "@material-ui/core/TextField";

import { getTreeData } from './../utils/Tree'
import { fallbackData } from './../utils/fallbackData'

const containerStyles = {
  width: "100%",
  height: "100vh"
};

class SentenceTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: fallbackData,
      translate: {},
      sentence: this.props.sentence
        ? this.props.sentence
        : ""
    };
  }

  componentWillMount() {
    this._updateTree()
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

  _updateTree() {
    getTreeData(this.state.sentence).then(value => {
      this.setState({
        treeData: value
      });
    });
  }

  _handleChange(event) {
    this.setState({
      sentence: event.target.value
    });
    this._updateTree()
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
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
        <h1>{this.state.sentence}</h1>
        <Tree
          data={this.state.treeData}
          translate={this.state.translate}
          orientation={"vertical"}
        />
      </div>
    );
  }
}

export { SentenceTree }
