const fs = require('fs');
const path = require('path');

const three = (somePath) => {
    const isDir = false;
    fs.stat(somePath, (err, stats) => {
        const s = stats.isDirectory();
        isDir = s;
    });
    if (isDir) {
        (fs.readdir(somePath, (err, files) => {
            console.log(files);
        }));
    }
    return path.resolve(somePath);
};


console.log(three('1-6-node-eventloop-timers'));

