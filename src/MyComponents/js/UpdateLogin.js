import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';

export const UpdateLogin = (props) => {
  const navigate = useNavigate();
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
  });
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
      }}
      validationSchema={validate}
      onSubmit={ (values) => {
        navigate("/TestUpdate",{state: {firstName: values.firstName,lastName: values.lastName,id: props.id}});
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Login</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <button className="btn btn-dark mt-3 s" type="submit">Register</button>
            <button className="btn btn-danger mt-3 r" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
