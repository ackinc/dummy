require('dotenv').config();
const fs = require('fs');
const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
	res.setHeader("Content-Type", "application/json");
	res.writeHead(200);
        res.end(JSON.stringify({message: fs.readFileSync('./main.txt', {encoding: 'utf-8'})}));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
    fs.writeFileSync('./pid', '' + process.pid);
});
