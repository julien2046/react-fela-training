import React, { Component } from 'react';

import { createRenderer } from 'fela';
import { Provider, ThemeProvider } from "react-fela";

import prefixer from "fela-plugin-prefixer";
import fallbackValue from "fela-plugin-fallback-value";

import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Layout from "./Layout";

import SEASONS from "./seasons";

const renderer = createRenderer({
  plugins: [prefixer(), fallbackValue()]
});

class App extends Component {

  constructor() {
    super();

    this.state = {
      mainColor: '#3498db'
    }

    this.setMainColor = this.setMainColor.bind(this);
  }

  setMainColor(e) {
    this.setState({ mainColor: e.target.value });
  }

  render() {
    return (
      <Provider renderer={renderer}>
        <ThemeProvider theme={{ mainColor: this.state.mainColor }}>
          <Layout>
            {SEASONS.map(season =>(
              <Button
                active={this.state.mainColor === season.color}
                key={season.name}
                value={season.color}
                onClick={this.setMainColor}
              >
                {season.name}
              </Button>
            ))}
          </Layout>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
