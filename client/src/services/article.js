import axios from 'axios';
import { apiConfig } from '../config/api';

const getArticles = (page) => {
  const url = `${apiConfig.articleURL}?page=${page}&limit=${apiConfig.articlesLimit}`;

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

  const formData = new FormData();
  formData.append('previewImage', data.file);
  formData.append('description', data.previewText);
  formData.append('title', data.title);
  formData.append('tag', data.tag);
  formData.append('HTML', data.HTML);
  formData.append('userId', data.userId);
  console.log(formData);

  return axios({
    url, data: formData, headers, method: 'POST',
  });
};

const updateArticleViews = (id) => {
  const url = `${apiConfig.articleURL}/${id}/views`;

  return axios({ url });
};

export default {
  getArticles, getArticlesByOwner, getArticleById, addArticle, updateArticleViews,
};
