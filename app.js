const os = require('os');
/* Q1 */
// /home/student/WebstormProjects/Node_LAB
console.log('Hello World');

/* Q2 */
// Use OS system library
console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());

/* Q3 */
// Read a file
const fs =  require('fs');
const fileName = __dirname + '/test.txt';

fs.readFile(fileName, (err, data) => {
    if(err) {
        console.error(err);
    }
    console.log(data.toString());
});

// Read the file in synchronous way
const data = fs.readFileSync(fileName);
console.log(data.toString());

/* Q4 */
const fileName1 = __dirname + '/test.txt';
const outFileName = __dirname + '/test-coy.txt';

const readStream = fs.createReadStream(fileName1);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

const data1 = fs.readFileSync(fileName1);
console.log(data1.toString());

/* Q5 */
const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3000);

// Printing in Hello World
// http://localhost:3000

const http1 = require('http');

http1.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    switch(req.method){
        case 'GET' :
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'GET' :
            res.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(3002, (err) => {
    console.log('Server is listening to port 3002');
});
