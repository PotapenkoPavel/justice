import axios from 'axios';
import { apiConfig } from '../config/api';

export const getArticles = () => {
  const url = `${apiConfig.articleURL}`;

  return axios({ url, method: 'GET' });
};

export const getArticlesByOwner = (id, token) => {
  const url = `${apiConfig.articleURL}/owner/${id}`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios({ url, headers, method: 'GET' });
};

export const getArticleById = (id) => {
  const url = `${apiConfig.articleURL}/${id}`;

  return axios({ url, method: 'GET' });
};

export const addArticle = (data, token) => {
  const url = `${apiConfig.articleURL}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'multipart/form-data',
  };

  return axios({
    url, data, headers, method: 'POST',
  });
};

export default {
  getArticles, getArticlesByOwner, getArticleById, addArticle,
};
