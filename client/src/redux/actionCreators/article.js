import ArticleAPI from '../../services/article';
import {
  ADD_ARTICLE,
  ARTICLE_SET_ERROR, ARTICLE_SET_LOADING, FETCH_ARTICLE_BY_ID, FETCH_ARTICLES, FETCH_ARTICLES_BY_OWNER, REMOVE_ARTICLE,
} from '../actionTypes/article';

export const setLoading = (value) => ({
  type: ARTICLE_SET_LOADING,
  payload: value,
});

export const setError = (message) => ({
  type: ARTICLE_SET_ERROR,
  payload: message,
});

export const addArticle = (data, token) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { status, data: { article } } = await ArticleAPI.addArticle(data, token);

    if (status === 200) {
      console.log(article);
      dispatch({
        type: ADD_ARTICLE,
        payload: article,
      });
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchArticles = (page) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { status, data } = await ArticleAPI.getArticles(page);

    if (status === 200) {
      dispatch({
        type: FETCH_ARTICLES,
        payload: {
          articles: data.articles,
          count: data.count,
        },
      });
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchArticleById = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { status, data } = await ArticleAPI.getArticleById(id);

    if (status === 200) {
      dispatch({
        type: FETCH_ARTICLE_BY_ID,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchArticlesByOwner = (id, token) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { status, data } = await ArticleAPI.getArticlesByOwner(id, token);

    if (status === 200) {
      dispatch({
        type: FETCH_ARTICLES_BY_OWNER,
        payload: data.articles,
      });
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const removeArticle = () => ({
  type: REMOVE_ARTICLE,
});
