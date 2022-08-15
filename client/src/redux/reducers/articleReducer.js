import {
  ARTICLE_SET_ERROR, ARTICLE_SET_LOADING, FETCH_ARTICLE_BY_ID, FETCH_ARTICLES, FETCH_ARTICLES_BY_OWNER, REMOVE_ARTICLE,
} from '../actionTypes/article';

const initialState = {
  articles: [],
  articlesByOwner: [],
  article: null,
  isLoading: false,
  error: null,
};

// eslint-disable-next-line default-param-last
export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_SET_LOADING:
      return { ...state, isLoading: action.payload };
    case ARTICLE_SET_ERROR:
      return { ...state, error: action.payload };
    case FETCH_ARTICLES:
      return { ...state, articles: action.payload.articles, count: action.payload.count };
    case FETCH_ARTICLE_BY_ID:
      return { ...state, article: action.payload };
    case FETCH_ARTICLES_BY_OWNER:
      return { ...state, articlesByOwner: action.payload };
    case REMOVE_ARTICLE:
      return { ...state, article: null };
    default:
      return state;
  }
};
