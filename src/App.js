import React, { Component } from 'react';

import { createRenderer } from 'fela';
import { Provider, ThemeProvider } from "react-fela";

import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Layout from "./Layout";

class App extends Component {

  constructor() {
    super();

    this.state = {
      mainColor: '#3498db'
    }

    this.setMainColor = this.setMainColor.bind(this);
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
