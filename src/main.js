const Peer = require('peerjs');

const peer = new Peer(null, { host: 'hotwire-server.herokuapp.com', port: 80, path: '/' });

console.log(peer);
