// const Web3 = require('web3');
// const converter = require('json-2-csv');
const WebSocket = require('ws');

console.log("Running block extractor");

const ws = new WebSocket(`ws://127.0.0.1:8546`);
ws.on('open', function open() {
    ws.send('{"jsonrpc":"2.0","method":"eth_subscribe","params":["newHeads"], "id":1}');
});

ws.on('message', function incoming(data) {
    var obj = JSON.parse(data);
    console.log(obj);
    // ws.close()
});
