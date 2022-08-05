import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string()
    .email('invalid email')
    .required('Please enter your username or email address.'),
  password: yup
    .string()
    .required('Please enter your password.'),
});
