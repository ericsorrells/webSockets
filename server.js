let events = require("events");
let http = require("http");

console.log('WEB_SOCKET SERVER RUNNING!!!');

const port = '8080';

const requestHandler = (request, response) => {
  console.log('URL:', request.url)
  console.log('HEADERS: ', request.headers)
  console.log('HTTP METHOD: ', request.method)
}

// create the server
const server = http.createServer(requestHandler)

// allow server to listen on designated port
server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})

