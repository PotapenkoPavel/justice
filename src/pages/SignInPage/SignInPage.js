import { Formik, Form, Field } from 'formik';

import { schema } from './validation-shema';
import { Button } from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import useAuth from '../../hooks/useAuth';

import './SignInPage.sass';

const SignInPage = () => {
  const { register } = useAuth();

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
          onSubmit={(values) => register(values)}
          validationSchema={schema}
        >
          <Form className="sign-in__form">
            <Field component={Input.Validate} name="firstName" label="First Name" />
            <Field component={Input.Validate} name="lastName" label="Last name" />
            <Field component={Input.Validate} name="email" label="Email Address" />
            <Field component={Input.Validate} name="password" label="Password" />
            <Button theme="primary" type="submit">Create Account</Button>
          </Form>
        </Formik>
      </div>
    </main>
  );
};

export default SignInPage;
