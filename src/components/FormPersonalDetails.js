import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default function FormUserDetails(props) {
  const { prevStep, nextStep, handleChange, values } = props;
  const handleClick = input => {
    if (input === "prev") {
      prevStep();
    } else {
      nextStep();
    }
  };
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter Personal Details" />
        <TextField
          hintText="Enter your Occupation"
          floatingLabelText="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
          style={{ marginTop: 20 }}
        />{" "}
        <br />
        <TextField
          hintText="Enter your City"
          floatingLabelText="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />{" "}
        <br />
        <TextField
          hintText="Enter your Bio"
          floatingLabelText="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
          required
        />{" "}
        <br />
        <RaisedButton
          label="Back"
          secondary={false}
          style={styles.button}
          onClick={() => {
            handleClick("prev");
          }}
        />
        <RaisedButton
          label="Contiune"
          primary={true}
          style={styles.button}
          onClick={() => {
            handleClick("next");
          }}
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
