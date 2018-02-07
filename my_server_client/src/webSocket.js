export function wsConstructor() {
  const socket = new WebSocket('ws://localhost:8080/');
  // socket.send("Here's some text that the server is urgently awaiting!");

  return socket;
}
