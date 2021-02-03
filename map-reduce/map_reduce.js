const fs = require('fs');

const HOST = process.env.HOST;

function getMapInput(filename) {
    const path = `${HOST}/${filename}`;
    return fs.readFileSync(path, 'utf-8');
}

function emitMapResult(key, value) {
    const filename = `${HOST}/map_results/${key}.txt`;
    fs.appendFileSync(filename, value + '\n');
}

function getReduceInputs() {
    const filenames = fs.readdirSync('map_results', 'utf-8');
    const inputs = [];
    for (const filename of filenames) {
        const key = filename.split('.')[0];
        const contents = fs.readFileSync(`map_results/${filename}`, 'utf-8');
        inputs.push([key, contents.split('\n').filter(value => value !== '')]);
    }
    return inputs;
}

function emitReduceResult(key, value) {
    const filename = 'reduce_results/results.txt';
    fs.appendFileSync(filename, key + ' ' + value + '\n');
}

module.exports.getMapInput = getMapInput;
module.exports.emitMapResult = emitMapResult;
module.exports.getReduceInputs = getReduceInputs;
module.exports.emitReduceResult = emitReduceResult;