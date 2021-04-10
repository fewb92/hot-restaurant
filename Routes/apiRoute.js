
const tables = require('../data/tables')
const waitlist = require ('../data/waitlist')


module.exports = (app) => {

app.get('/api/tables', (req, res) => res.json(tables))
app.get('/api/waitlist', (req, res) => res.json(waitlist))

app.post('/api/tables', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newReservation = req.body;
  

    console.log(newReservation);
    if (tables.length < 5) {
        tables.push(newReservation);
        res.json(true);
    } else {
        waitlist.push(newReservation);
        res.json(false);
    }
    
  });
}
