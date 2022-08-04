import { Formik, Form, Field } from 'formik';

import { schema } from './validation-shema';
import { Button } from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';

import './SignInPage.sass';

const SignInPage = () => (
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
        onSubmit={() => true}
        validationSchema={schema}
      >
        <Form className="sign-in__form">
          <Field component={Input} name="firstName" label="First Name" />
          <Field component={Input} name="lastName" label="Last name" />
          <Field component={Input} name="email" label="Email Address" />
          <Field component={Input} name="password" label="Password" />
          <Button type="primary">Create Account</Button>
        </Form>
      </Formik>
    </div>
  </main>
);

export default SignInPage;
