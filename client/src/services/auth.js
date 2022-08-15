import { apiConfig } from '../config/api';
import { ajaxWrapper } from '../helpers/ajaxWrapper';

export const login = (data, token) => {
  const url = `${apiConfig.authURL}/login`;
  const headers = {};

  if (token) headers.Authorization = `Bearer ${token}`;

  return ajaxWrapper({
    url,
    data,
    headers,
    method: 'POST',
  });
};

export const register = (data) => {
  const url = `${apiConfig.authURL}/register`;

  return ajaxWrapper({
    url,
    data,
    method: 'POST',
  });
};

export default { login, register };
