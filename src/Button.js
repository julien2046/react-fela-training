import { createComponent } from 'react-fela';
import { darken } from 'polished';

const Button = ({ active, theme: { mainColor } }) => {

  let buttonColor = '#ecf0f1';

  if (active) {
    buttonColor = mainColor;
  }

  const style = {
    appearance: "none",
    border: "none",
    background: buttonColor,
    boxShadow: `0 5px ${darken(0.2, buttonColor)}`,
    cursor: "pointer",
    flex: 1,
    fontFamily: "inherit",
    fontSize: "1em",
    fontWeight: "bold",
    padding: "1em",
    margin: "0 0 calc(5px + 1em)",
    outline: "none"
  };

  [":hover", ":focus"].forEach(
    value => (style[value] = { background: darken(0.1, buttonColor) })
  );

  return style;
};

export default createComponent(Button, "button", ["onClick", "value"]);
