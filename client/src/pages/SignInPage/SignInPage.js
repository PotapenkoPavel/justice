import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { ToastContainer } from 'react-toastify';

import { useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';

import { useShowMessage } from '../../hooks/useShowMessage';
import { register, setError } from '../../redux/actionCreators/auth';
import { schema } from './validation-shema';

import './SignInPage.sass';

const SignInPage = () => {
  const error = useSelector((state) => state.auth.error);
  const { showMessage } = useShowMessage(setError);
  const dispatch = useDispatch();

  useEffect(() => {
    showMessage(error && error.message);
  }, [error]);

  const submitHandler = ({
    email, password, firstName, lastName,
  }) => {
    dispatch(register(email, password, firstName, lastName));
  };

  return (
    <main className="sign-in">
      <div className="container">
        <Title textAlign="center">Log in to your account</Title>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          onSubmit={submitHandler}
          validationSchema={schema}
        >
          <Form className="sign-in__form">
            <Field component={Input.Validate} name="firstName" label="First Name" />
            <Field component={Input.Validate} name="lastName" label="Last name" />
            <Field component={Input.Validate} name="email" label="Email Address" type="email" />
            <Field component={Input.Validate} name="password" label="Password" type="password" />
            <Button theme="primary" type="submit">Create Account</Button>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </main>
  );
};

export default SignInPage;
