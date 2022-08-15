import ArticleAPI from '../../services/article';
import {
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

export const fetchArticles = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { status, data } = await ArticleAPI.getArticles();

    if (status === 200) {
      dispatch({
        type: FETCH_ARTICLES,
        payload: data.articles,
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
