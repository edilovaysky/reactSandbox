const initialState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_PENDING':
      return { ...state, loading: true };
    case 'FETCH_POSTS_FULFILLED':
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case 'FETCH_POSTS_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
  return state;
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POST_PENDING':
      return { ...state, loading: true };
    case 'FETCH_POST_FULFILLED':
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case 'FETCH_POST_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
  return state;
};
