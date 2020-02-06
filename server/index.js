const express = require('express');
const app = express();
const port = 3004;

app.listen(port, () => console.log(`proxy server listening on port ${port}`));

app.use(express.static('public'));

module.exports = app;