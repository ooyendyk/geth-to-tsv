// const Web3 = require('web3');
// const converter = require('json-2-csv');
// const ObjectsToCsv = require('objects-to-csv');
const WebSocket = require('ws');
const fs = require('fs');

// Clear log.tsv and add header
console.log("Running ETL pipeline");
const header = 'parentHash' + '\t' + 'sha3Uncles' + '\t' + 'miner' + '\t' + 'stateRoot' + '\t' + 'transactionsRoot' + '\t' + 'receiptsRoot' + '\t' + 'logsBloom' + '\t' + 'difficulty' + '\t' + 'number' + '\t' + 'gasLimit' + '\t' + 'gasUsed' + '\t' + 'timestamp' + '\t'+'extraData' + '\t' + 'mixHash' + '\t' + 'nonce' + '\t' + 'baseFeePerGas' + '\t' + 'hash';
fs.writeFile('log.tsv', header, function(){console.log('Resetting log')});

// Connect to Geth node websocket
const ws = new WebSocket(`ws://127.0.0.1:8546`);
ws.on('open', function open() {
    ws.send('{"jsonrpc":"2.0","method":"eth_subscribe","params":["newHeads"], "id":1}');
});

// Log each event
ws.on('message', function incoming(data) {
    var obj = JSON.parse(data);
    try {
        var entry = '\n' + obj.params.result.parentHash + '\t' + obj.params.result.sha3Uncles + '\t' + obj.params.result.miner + '\t' + obj.params.result.stateRoot + '\t' + obj.params.result.transactionsRoot + '\t' + obj.params.result.receiptsRoot + '\t' + obj.params.result.logsBloom + '\t' + obj.params.result.difficulty + '\t' + obj.params.result.number + '\t' + obj.params.result.gasLimit + '\t' + obj.params.result.gasUsed + '\t' + obj.params.result.timestamp + '\t' + obj.params.result.extraData + '\t' + obj.params.result.mixHash + '\t' + obj.params.result.nonce + '\t' + obj.params.result.baseFeePerGas + '\t' + obj.params.result.hash;
        fs.appendFileSync('log.tsv', entry);
    } catch (e) {
        console.log('ERR: obj.params.* not found ')
    }
    // ws.close()
});
