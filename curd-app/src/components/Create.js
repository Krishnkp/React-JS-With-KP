import React, { useState } from "react";
import { Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();
  const postData = () => {
    if (firstName.length > 0 && lastName.length > 0) {
      axios
        .post(`https://652cf067f9afa8ef4b267db8.mockapi.io/kptrailblazers`, {
          firstName,
          lastName,
          checkbox,
        })
        .then(() => {
          alert("Your Data is successfully saved");
          navigate("/read");
        });
    } else {
      if (firstName.length === 0 && lastName.length === 0) {
        alert(
          "The first name and last name are empty!! Please fill the name field"
        );
      } else {
        if (lastName.length === 0) {
          alert("The last name are empty!! Please fill the last name field");
        }
        if (firstName.length === 0) {
          alert("The frist name are empty!! Please fill the frist name field");
        }
      }
    }
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>
            First Name <span className="required">*</span>
          </label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>
            Last Name <span className="required">*</span>
          </label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <button
          className="btn btn-outline-dark"
          onClick={postData}
          type="submit"
        >
          Submit
        </button>
      </Form>
    </div>
  );
}
