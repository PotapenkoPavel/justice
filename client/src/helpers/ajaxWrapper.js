import axios from 'axios';

export const ajaxWrapper = (params) => {
  const defaultHeaders = {
    Accept: 'application/json',
  };

  const headers = {
    ...defaultHeaders,
    ...params.headers,
  };

  return axios({
    headers,
    method: params.method,
    url: params.url,
    data: params.data,
  });
};
