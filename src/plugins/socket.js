import io from 'socket.io-client';

export const socket = io.connect(process.env.REACT_APP_SOCKET_SERVER_URL);
