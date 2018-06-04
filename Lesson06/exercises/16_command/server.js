const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.post('/cmd', (req, res) => res.send('Received cmd: ' + JSON.stringify(req.body)));

app.listen(3000, () => console.log('Example app listening on port 3000!'));