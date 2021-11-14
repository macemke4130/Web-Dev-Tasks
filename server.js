import express from 'express';

var app = express();
app.use(express.json());

app.use(express.static('./public'));

const localPort = 5000;

app.listen(process.env.PORT || localPort);
console.log(`... Listening on Local Port ${localPort} ...`);