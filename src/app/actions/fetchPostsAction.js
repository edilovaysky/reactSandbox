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

export const fetchPostAction = postId => {
  return {
    type: 'FETCH_POST',
    payload: axios
      .get(`http://jsonplaceholder.typicode.com${postId}`)
      .then(response => response.data)
      .catch(err => console.log('error', err)),
  };
};
