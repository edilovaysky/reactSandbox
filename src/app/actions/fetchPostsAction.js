import axios from 'axios';

export const fetchPostsAction = () => {
  return {
    type: 'FETCH_POSTS',
    payload: axios
      .get('http://jsonplaceholder.typicode.com/posts/')
      .then(response => response.data)
      .catch(err => console.log('error', err)),
  };
};
