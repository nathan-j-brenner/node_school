var request = require('http').request;
var headers = {
    host: 'localhost',
    port: 9876,
    method: "GET",
};

var yolo = request(headers, (res) => {
    res.setEncoding("utf8");
    res.on('data', (data) => console.log('BODY: ' + data));
    res.on("end", () => console.error('done!'));
});

yolo.end();