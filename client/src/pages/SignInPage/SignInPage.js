import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { ToastContainer } from 'react-toastify';

import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { ValidateInput } from '../../components/Input/Input';

import { register } from '../../redux/actionCreators/auth';
import { schema } from './validation-shema';

import './SignInPage.sass';

const SignInPage = () => {
  const dispatch = useDispatch();

  const submitHandler = ({
    email, password, firstName, lastName,
  }) => {
    dispatch(register(email, password, firstName, lastName));
  };

  return (
    <main className="sign-in">
      <Container>
        <Title textAlign="center">Create your free account</Title>
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
            <Field component={ValidateInput} name="firstName" label="First Name" />
            <Field component={ValidateInput} name="lastName" label="Last name" />
            <Field component={ValidateInput} name="email" label="Email Address" type="email" />
            <Field component={ValidateInput} name="password" label="Password" type="password" />
            <Button type="submit">Create Account</Button>
          </Form>
        </Formik>
      </Container>
      <ToastContainer />
    </main>
  );
};

export default SignInPage;
