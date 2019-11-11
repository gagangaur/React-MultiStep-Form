import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default function FormUserDetails(props) {
  const { nextStep, handleChange, values } = props;
  const handleClick = e => {
    e.preventDefault();
    nextStep();
  };
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter User Details" />
        <TextField
          hintText="Enter your First Name"
          floatingLabelText="First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
          style={{ marginTop: 20 }}
        />{" "}
        <br />
        <TextField
          hintText="Enter your Last Name"
          floatingLabelText="Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />{" "}
        <br />
        <TextField
          hintText="Enter your Email"
          floatingLabelText="Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />{" "}
        <br />
        <RaisedButton
          label="Contiune"
          primary={true}
          style={styles.button}
          onClick={handleClick}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
}

const styles = {
  button: {
    margin: 30
  }
};
