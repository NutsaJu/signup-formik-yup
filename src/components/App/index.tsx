import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MuiField from "./MuiField";
import MuiSelect, { MuiSelectItems } from "./MuiSelect";
import { Button } from "@mui/material";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  position: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  position: "",
};

const PositionItems: MuiSelectItems[] = [
  {
    label: "Front End",
    value: "front_end",
  },
  {
    label: "Back End",
    value: "back_end",
  },
  {
    label: "Dev Ops",
    value: "dev_ops",
  },
  {
    label: "QA",
    value: "qa",
  },
];

const emailAdresses = ["test@gmail.com", "test2@gmail.com"];

const SignUpSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string()
    .lowercase()
    .email("Must be a valid email")
    .notOneOf(emailAdresses, "Email already taken")
    .required("Required"),
  password: Yup.string()
    .matches(/(?=.*[a-z])/, "One lowercase required")
    .matches(/(?=.*[A-Z])/, "One uppercase required")
    .matches(/(?=.*[0-9])/, "One number required")
    .min(8, "Minimum 8 characters required!")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must be the same")
    .required("Required"),
  position: Yup.string().required("Required"),
});

const App: React.FC = () => {
  const handleSubmit = (values: FormValues) => {
    alert(JSON.stringify(values));
  };

  return (
    <Container className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignUpSchema}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <Wrapper>
                <MuiField label="Name" name="name" required />
                <MuiField label="Email" name="email" required />
                <MuiField
                  label="Password"
                  name="password"
                  type="password"
                  required
                />
                <MuiField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  required
                />
                <MuiSelect
                  name="position"
                  items={PositionItems}
                  label="Position"
                />
                <Button
                  type="submit"
                  disabled={!dirty || !isValid}
                  variant="contained"
                >
                  Sign Up
                </Button>
              </Wrapper>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-color: white;
  box-shadow: rgba(255, 255, 255, 0.452) 0px 50px 100px -20px,
    rgba(241, 239, 239, 0.13) 0px 30px 60px -30px,
    rgba(255, 255, 255, 0.692) 0px -2px 6px 0px inset;
  margin-top: 50px;
  border-radius: 10px;
  width: 500px;
  padding: 50px;
  @media (max-width: 520px) {
    width: 300px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
