import React from 'react';
import { createComponent } from 'react-fela';

const ButtonGroupStyles = () => {

  let style = {
    "> h2": {
      margin: "0 0 0.5em"
    },
    "> div": {
      display: "flex";
      flexWrap: "wrap"
    }
  };

  return style;
}

const ButtonGroup = createComponent(ButtonGroupStyles);

const ButtonGroupComponent = props => (
  <ButtonGroup>
    <h2>Themes</h2>
    <div>{props.children}</div>
  </ButtonGroup>
);

export default ButtonGroup;
