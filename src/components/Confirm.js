import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export default function FormUserDetails(props) {
  const {
    prevStep,
    nextStep,
    values: { firstName, lastName, email, occupation, city, bio }
  } = props;
  const handleClick = input => {
    if (input === "prev") {
      prevStep();
    } else {
      // Processing of form
      nextStep();
    }
  };
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Confirm User Data" />
        <List>
          <ListItem primaryText="First Name" secondaryText={firstName} />
          <ListItem primaryText="Last Name" secondaryText={lastName} />
          <ListItem primaryText="Email" secondaryText={email} />
          <ListItem primaryText="Occupation" secondaryText={occupation} />
          <ListItem primaryText="City" secondaryText={city} />
          <ListItem primaryText="Bio" secondaryText={bio} />
        </List>
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
          label="Confirm & Contiune"
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
