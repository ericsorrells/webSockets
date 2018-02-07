let events = require("events");
let http = require("http");

console.log('WEB_SOCKET SERVER RUNNING!!!');
//https://blog.risingstack.com/your-first-node-js-http-server/
const port = '8080';

const requestHandler = (request, response) => {
  console.log('URL:', request.url)
  console.log('HEADERS: ', request.headers)
  console.log('HTTP METHOD: ', request.method)

  if (request.method === 'OPTIONS') {
    console.log('!OPTIONS');
    let headers = {};
    headers["Access-Control-Allow-Origin"] = request.headers.origin;
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";

    response.writeHead(200, headers);
    response.end(); //telling the server that the response headers and body have been sent, and that the request has been fulfilled
  }

  if(request.method === 'GET') {
    console.log('!GET')
    let body = "";

    let headers = {};
    headers['Access-Control-Allow-Origin']      = request.headers.origin,
    headers['Connection']                       = 'Upgrade',
    headers['sec-websocket-accept']             = '123',
    headers['Access-Control-Allow-Credentials'] = true,
    headers['x-My-CustomHeader']                 = 'blah-blah'

    response.writeHead(200, headers);
    response.end('Hello GET request!!')
  }

  if(request.method === 'POST') {
    console.log('!POST')
    let body = "";
    request.on('data', function (chunk) {
      console.log('data: ', chunk)
      body += chunk;
    });

    request.on('end', function () {
      console.log('body: ' + body);
      if(body){
        let jsonObj = JSON.parse(body);
        console.log('BODY: ', jsonObj)
      }
    })

    let headers = {};
    headers['Access-Control-Allow-Origin']      = request.headers.origin,
    headers['Connection']                       = 'Upgrade',
    headers['sec-websocket-accept']             = '123',
    headers['Access-Control-Allow-Credentials'] = true

    response.writeHead(200, headers);
    response.write(JSON.stringify({ hits: 1 }))
    response.end()
  }
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

