const Peer = require('peerjs');

var peer = new Peer(null, {host: 'hotwire-server.herokuapp.com', port: 80, path: '/'});

console.log(peer);