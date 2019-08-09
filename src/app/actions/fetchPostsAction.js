import axios from 'axios';

const fetchPostsAction = {
  type: 'FETCH_POSTS',
  payload: axios
    .get('http://jsonplaceholder.typicode.com/posts/')
    .then(response => response.data)
    .catch(err => console.log('error', err)),
};

export default fetchPostsAction;
