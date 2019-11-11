import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

export default function Success(props) {
  const handleClick = () => {
    props.finalStep();
  };
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Success" />
        <h1>Thank You for your submission.</h1>
        <p>You will get email for further instructions.</p>
        <RaisedButton
          label="Home"
          secondary={true}
          style={styles.button}
          onClick={() => {
            handleClick();
          }}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
const styles = {
  button: {
    marginTop: 20
  }
};
