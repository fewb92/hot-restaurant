const path = require('path')

module.exports = (app) => {

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.get('/reservation', (req, res) => res.sendFile(path.join(__dirname, '../public/reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '../public/tables.html')))
// JSON
}

