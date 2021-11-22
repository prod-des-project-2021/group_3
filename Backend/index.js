const express = require('express');
const app = express();
const port = 4000;
const client = require('./db');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
})

//getting tasks from spesific user
app.get('/mytasks/:uid', (req, res) => {
  client.query('SELECT * FROM vuosikello WHERE user_id = $1', [req.params.uid]).then(results => {
    res.json(results.rows);
  })
})

//posting new activity
app.post('/yearclockActivities', (req, res) => {
  client.query('INSERT INTO vuosikello(task_id, user_id, task_name, month, category, info, stage) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
                                    [uuidv4(), req.body.user_id, req.body.task_name, req.body.month, req.body.category, req.body.info, req.body.stage])
  .then(results => {
    res.sendStatus(201);
  })
  .catch(error => res.sendStatus(500));
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