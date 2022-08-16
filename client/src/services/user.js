import { ajaxWrapper } from '../helpers/ajaxWrapper';

const getUser = (id, token) => {
  const url = `${process.env.REACT_APP_API_URL}/user/${id}`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return ajaxWrapper({
    url,
    headers,
    method: 'GET',
  });
};

const updateUserInformation = (id, data, token) => {
  const url = `${process.env.REACT_APP_API_URL}/user/${id}`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return ajaxWrapper({
    url,
    data,
    headers,
    method: 'PATCH',
  });
};

const updateUserAvatar = (id, file, token) => {
  const url = `${process.env.REACT_APP_API_URL}/user/${id}/avatar`;
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'multipart/form-data',
  };
  const data = {
    avatar: file,
  };

  return ajaxWrapper({
    url,
    data,
    headers,
    method: 'PATCH',
  });
};

const deleteUserAvatar = (id, token) => {
  const url = `${process.env.REACT_APP_API_URL}/user/${id}/avatar`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return ajaxWrapper({
    url,
    headers,
    method: 'DELETE',
  });
};

export default {
  getUser, updateUserInformation, updateUserAvatar, deleteUserAvatar,
};
