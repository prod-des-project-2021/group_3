const express = require('express')
const app = express()
const port = 4000
const client = require('./db');
const cors = require('cors');
var bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//getting tasks from specific user
app.get('/mytasks/:uid', (req, res) => {
  client.query('SELECT * FROM vuosikello WHERE user_id = $1', [req.params.uid]).then(results => {
    res.json(results.rows);
  })
})

//getting tips
app.get('/tips', (req, res) => {
  client.query('SELECT * FROM tips').then(results => {
    res.json(results.rows);
  })
  .catch(error => res.sendStatus(500));
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

//updating spesific activity
app.put('/updateActivity', (req, res) => {
  client.query('UPDATE vuosikello SET task_name = $1, month = $2, category = $3, info = $4, stage = $5 WHERE task_id = $6', [req.body.task_name, req.body.month, req.body.category, req.body.info, req.body.stage, req.body.task_id])
  .then(results => {
    res.sendStatus(200);
  })
  .catch(error => res.sendStatus(500));
})

//delete spesific activity
app.delete('/deleteActivity', (req, res) => {
  client.query('DELETE FROM vuosikello WHERE task_id = $1', [req.body.task_id])
  .then(results => {
    res.status(201).send('Row deleted!')
  })
  .catch(error => res.sendStatus(500));
})

//change the title of yearclock
app.put('/updateYear', (req, res) => {
  client.query('UPDATE vuosikello SET task_name = $1 WHERE user_id = $2 AND month = $3', [req.body.title, req.body.user_id, 13])
  .then(results => {
    res.sendStatus(200);
  })
  .catch(error => res.sendStatus(500));
})

//inserting registration details into db
app.post('/signup', (req, res) => {
  let username = req.body.user.toString().trim();
  let password = req.body.pass.toString().trim();
  let userid = uuidv4();
  let year = new Date().getFullYear();

  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  console.log('test')
  console.log(hashedPassword)
  client.query('INSERT INTO users(user_id, username, password) VALUES ($1, $2, $3)', 
  [userid, username, hashedPassword])
  .then(results => {
    client.query('INSERT INTO vuosikello(task_id, user_id, task_name, month, category, info, stage) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
    [uuidv4(), userid, year, 13, '-', '-', '-']);
    res.sendStatus(201);
  })
  .catch(error => res.sendStatus(500));
})

//checking login details with existing ones in db
app.post('/logon', (req, res) => {
  let username = req.body.user.toString().trim();
  let password = req.body.pass.toString().trim();

  client.query('SELECT * FROM users WHERE username = $1', [username]).then(results => {
    if (results.rowCount != 0) {
      results.rows.forEach(element => 
        bcrypt.compare(password, element.password).then(bcryptResult =>{
          if(bcryptResult == true){
            console.log(element.user_id);
            res.json(element.user_id);
          }
          else{
            res.status(406).send('Login credentials do not fit')
          }
        })
      )
    } else {
      res.status(406).send('Login credentials do not fit')
    }
  })
})

// use credentials to log in then utilize them to retrieve the id and delete everything with that id
app.post('/delaccount', (req, res) => {
  let username = req.body.user.toString().trim();
  let password = req.body.pass.toString().trim();
  let id

  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  client.query('SELECT * FROM users WHERE username = $1', [username]).then(results => {
    results.rows.forEach(element => 
      bcrypt.compare(password, element.password).then(bcryptResult =>{
        if(bcryptResult == true){
          id = element.user_id
          //del here check id and stuff
          client.query('DELETE FROM users WHERE user_id = $1', [id])
          client.query('DELETE FROM vuosikello WHERE user_id = $1', [id]).then(results => {
           res.json(results.rows);
          })
        }
        else{
          res.status(406).send('Login credentials do not fit')
        }
      })
      )
  })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})