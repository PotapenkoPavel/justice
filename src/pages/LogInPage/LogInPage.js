import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import { schema } from '../SignInPage/validation-shema';

import './LogInPage.sass';

const LogInPage = () => (
  <section className="login-page">
    <div className="container">
      <Title type="h2" textAlign="center">Log in to your account</Title>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => localStorage.setItem('user', JSON.stringify(values))}
      >
        <Form className="login-page__form">
          <Field component={Input} name="email" label="Email Address" />
          <Field component={Input} name="password" label="Password" />
          <Button type="primary">Log in</Button>
        </Form>
      </Formik>
      <div className="login-page__create-new">
        Don’t have a Times account?&nbsp;
        <Link to="/sign-in"><span>Create one</span></Link>
      </div>
    </div>
  </section>
);

export default LogInPage;
