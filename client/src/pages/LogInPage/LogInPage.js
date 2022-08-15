import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { ToastContainer } from 'react-toastify';

import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';
import { ValidateInput } from '../../components/Input/Input';

import { login } from '../../redux/actionCreators/auth';
import { schema } from './validation-shema';

import 'react-toastify/dist/ReactToastify.css';
import './LogInPage.sass';

const LogInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = ({ email, password }) => {
    dispatch(login(email, password));
  };

  return (
    <section className="login-page">
      <Container>
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
            <Field component={ValidateInput} type="email" name="email" label="Email Address" />
            <Field component={ValidateInput} type="password" name="password" label="Password" />
            <Button type="submit">Log in</Button>
          </Form>
        </Formik>
        <div className="login-page__create-new">
          Don’t have a Times account?&nbsp;
          <Button variant="link" onClick={() => navigate('/sign-in')}>Create one</Button>
        </div>
      </Container>
      <ToastContainer />
    </section>
  );
};
export default LogInPage;
