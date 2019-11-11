import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import Error from "./Error";

export default function UserForm() {
  const [step, updateStep] = useState(1);
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [email, updateEmail] = useState("");
  const [occupation, updateOccupation] = useState("");
  const [city, updateCity] = useState("");
  const [bio, updateBio] = useState("");

  // Proceed to next step
  const nextStep = () => {
    updateStep(step + 1);
  };

  // Go back to previous step
  const prevStep = () => {
    updateStep(step - 1);
  };
  // Bring back to home after submission
  const finalStep = () => {
    updateStep(1);
    updateFirstName("");
    updateLastName("");
    updateEmail("");
    updateOccupation("");
    updateCity("");
    updateBio("");
  };

  // Handle Change
  const handleChange = input => e => {
    if (input === "firstName") {
      updateFirstName(e.target.value);
    } else if (input === "lastName") {
      updateLastName(e.target.value);
    } else if (input === "email") {
      updateEmail(e.target.value);
    } else if (input === "occupation") {
      updateOccupation(e.target.value);
    } else if (input === "city") {
      updateCity(e.target.value);
    } else if (input === "bio") {
      updateBio(e.target.value);
    }
  };

  const values = { firstName, lastName, email, occupation, city, bio };
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm prevStep={prevStep} nextStep={nextStep} values={values} />
      );
    case 4:
      return <Success finalStep={finalStep} />;
    default:
      return <Error />;
  }
}
