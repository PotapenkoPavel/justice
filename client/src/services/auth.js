import { ajaxWrapper } from '../helpers/ajaxWrapper';

const login = (data, token) => {
  const url = `${process.env.REACT_APP_API_URL}/auth/login`;
  const headers = {};

  if (token) headers.Authorization = `Bearer ${token}`;

  return ajaxWrapper({
    url,
    data,
    headers,
    method: 'POST',
  });
};

const register = (data) => {
  const url = `${process.env.REACT_APP_API_URL}/auth/register`;

  return ajaxWrapper({
    url,
    data,
    method: 'POST',
  });
};

export default { login, register };
