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

//inserting registration details into db
app.post('/signup', (req, res) => {
  let username = req.body.user.toString().trim();
  let password = req.body.pass.toString().trim();

  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  console.log('test')
  console.log(hashedPassword)
  client.query('INSERT INTO users(user_id, username, password) VALUES ($1, $2, $3)', 
  [uuidv4(), username, hashedPassword])
  .then(results => {
    res.sendStatus(201);
  })
  .catch(error => res.sendStatus(500));
})

//checking login details with existing ones in db
app.post('/logon', (req, res) => {
  let username = req.body.user.toString().trim();
  let password = req.body.pass.toString().trim();

  client.query('SELECT * FROM users WHERE username = $1', [username]).then(results => {
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
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})