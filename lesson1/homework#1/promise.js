const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const promiseArr = [];

makeGetRequest = url => {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.addEventListener('load', function() {
      if (xhr.status < 400) resolve(xhr.responseText);
      else reject(new Error('Request failed: ' + xhr.statusText));
    });
    xhr.addEventListener('error', function() {
      reject(new Error('Network error'));
    });
    xhr.send(null);
  });
};

for (let i = 0; i < 10; i++) {
  let url = `https://jsonplaceholder.typicode.com/users/${i + 1}`;
  promiseArr[i] = makeGetRequest(url);
}

Promise.all(promiseArr).then(data => {
  console.log(data);
});
