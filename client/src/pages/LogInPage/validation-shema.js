import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string()
    .email('invalid email')
    .required('Please enter your username or email address.'),
  password: yup
    .string()
    .matches(/[A-Z]/, 'should includes min 1 english upper case letter')
    .matches(/[a-z]/, 'should includes min 1 english lower case letter')
    .matches(/\d+/, 'should includes min 1 number')
    .matches(/[!@#$%^&]/, 'should includes min 1 any spec symbol (!@#$%^&)')
    .min(6, 'should be min 6 letters')
    .required('Please enter your password.'),
});
