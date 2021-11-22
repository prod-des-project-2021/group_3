const express = require('express')
const app = express()
const port = 4000
const client = require('./db');
const cors = require('cors');

app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//getting tasks from spesific user
app.get('/mytasks/:uid', (req, res) => {
  client.query('SELECT * FROM vuosikello WHERE user_id = $1', [req.params.uid]).then(results => {
    res.json(results.rows);
  })
})

app.post('/us', (req, res) => {
  let username = 'feeeeeeeeelix'
  let password = 'felixisthebest'

  client.query('INSERT INTO users(user_id, username, password) VALUES ($1, $2, $3)', 
  ['1', username, password])
.then(results => {
res.sendStatus(201);
})
.catch(error => res.sendStatus(500));
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})