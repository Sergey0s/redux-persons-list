import React, { Component } from 'react';

import Persons from './containers/Persons';

const style = {
    display: "inline-block",
    textAlign: "center",
    margin: "16px",
    width: "100%"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li style={style}>Task: Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
            <li style={style}>Tap on "Add Person" to create a new person then tap on it to delete</li>
        </ol>
        <Persons />
      </div>
    );
  }
}

export default App;
