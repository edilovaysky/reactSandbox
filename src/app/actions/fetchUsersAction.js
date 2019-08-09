import axios from 'axios';
import { store } from '../store';

export const fetchUsersAction = () => {
  return {
    type: 'FETCH_USERS',
    payload: axios
      .get('http://jsonplaceholder.typicode.com/users/')
      .then(response => response.data)
      .catch(err => console.log('error', err)),
  };
};

export const fetchUserAction = user => {
  return {
    type: 'FETCH_USER',
    payload: store.getState(),
  };
};
