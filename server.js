// require tables in api routes file
// const tables = require('./data/tables');
const express = require('express');
const app = express();
// const for routes file



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3001

require('./Routes/htmlRoute')(app)
require('./Routes/apiRoute')(app)

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));