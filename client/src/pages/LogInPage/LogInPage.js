import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Button } from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';

import { useShowMessage } from '../../hooks/useShowMessage';
import { login, setError } from '../../redux/actions/auth';
import { schema } from './validation-shema';

import 'react-toastify/dist/ReactToastify.css';
import './LogInPage.sass';

const LogInPage = () => {
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const { showMessage } = useShowMessage(setError);

  const submitHandler = (values) => {
    dispatch(login(values));
  };

  useEffect(() => {
    showMessage(error && error.message);
  }, [error]);

  return (
    <section className="login-page">
      <div className="container">
        <Title type="h2" textAlign="center">Log in to your account</Title>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={schema}
          onSubmit={submitHandler}
        >
          <Form className="login-page__form">
            <Field component={Input.Validate} type="email" name="email" label="Email Address" />
            <Field component={Input.Validate} type="password" name="password" label="Password" />
            <Button theme="primary" type="submit">Log in</Button>
          </Form>
        </Formik>
        <div className="login-page__create-new">
          Don’t have a Times account?&nbsp;
          <Link to="/sign-in"><span>Create one</span></Link>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};
export default LogInPage;
