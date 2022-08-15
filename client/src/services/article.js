import axios from 'axios';
import { apiConfig } from '../config/api';

const getArticles = () => {
  const url = `${apiConfig.articleURL}`;

  return axios({ url, method: 'GET' });
};

const getArticlesByOwner = (id, token) => {
  const url = `${apiConfig.articleURL}/owner/${id}`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios({ url, headers, method: 'GET' });
};

const getArticleById = (id) => {
  const url = `${apiConfig.articleURL}/${id}`;

  return axios({ url, method: 'GET' });
};

const addArticle = (data, token) => {
  const url = `${apiConfig.articleURL}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'multipart/form-data',
  };

  return axios({
    url, data, headers, method: 'POST',
  });
};

const updateArticleViews = (id) => {
  const url = `${apiConfig.articleURL}/${id}/views`;

  return axios({ url });
};

export default {
  getArticles, getArticlesByOwner, getArticleById, addArticle, updateArticleViews,
};
