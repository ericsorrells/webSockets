export function wsConstructor() {
  const socket = new WebSocket('ws://localhost:8080/');
  return socket;
}
