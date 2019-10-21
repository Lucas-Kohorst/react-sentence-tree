import React, { Component } from 'react';

import TextField from "@material-ui/core/TextField";

import { SentenceTree } from '../Components/SentenceTree';

class SentenceTreeApplication extends Component {
   constructor(props) {
      super(props) 
      this.state = {
         sentence: "The little dog runs so fast."
      }
   }


  handleChange(event) {
    this.setState({
      sentence: event.target.value
    });
}

  render() {
    return (
      <div>
        <TextField
          id="standard-full-width"
          label="Sentence"
          style={{ margin: 8 }}
          value={this.state.sentence}
          onChange={this.handleChange.bind(this)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
        <SentenceTree sentence={this.state.sentence} />
      </div>
    );
  }
}

export { SentenceTreeApplication }