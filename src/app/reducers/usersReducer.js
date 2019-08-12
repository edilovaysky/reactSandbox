const initialState = {
  users: [],
  user: {},
  loading: false,
  error: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_PENDING':
      return { ...state, loading: true };
    case 'FETCH_USERS_FULFILLED':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'FETCH_USERS_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
  return state;
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_PENDING':
      return { ...state, loading: true };
    case 'FETCH_USER_FULFILLED':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'FETCH_USER_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
  return state;
};
