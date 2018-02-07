export function newFetch() {
  const API = 'http://localhost:8080/?query=';
  const DEFAULT_QUERY = 'redux';

  const myHeaders = new Headers({
    "Content-Type": "application/json",
    "Content-Length": "Some_Content"
    // "Bogus-Header": "Yeah baby!"
    // "X-Custom-Header": "ProcessThisImmediately"
  });

  var myInit = {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    body: JSON.stringify({'key': 'abc123'}),
    cache: 'default'
  };

  // var myInit = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   cache: 'default'
  // };

  var myRequest = new Request(`${API}${DEFAULT_QUERY}`, myInit);

  return fetch(myRequest)
    .then(response => response.json())
    .then(function(data) {
      return data;
    })
    .catch(err => console.log('ERR: ', err))
};
