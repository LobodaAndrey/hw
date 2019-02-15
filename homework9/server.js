const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let users = require('../node/users.json');
users = users.users;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
  res.send('<h1>Helloooo, I`m local host</h1>');
})

app.get('/users', (req, res) => {
  res.send(
    users
  );
});

app.get('/users/:id', (req, res)=> {
  let user = users.find((user) => {
    return user.id === Number(req.params.id);
  })
  res.send(user);
});

app.post('/users', function (req, res) {
  let user = {
    id: Date.now(),
    name: req.body.name
  };
  users.push(user);
  res.send(user);
})

app.put('/users/:id', function(req, res) {
  let user = users.find(function(user) {
    return user.id === Number(req.params.id);
  });
  user.name = req.body.name;
  res.sendStatus(200)
})

app.delete('/users/:id', (req, res) => {
  users = users.filter((user) => {
    return user.id !== Number(req.params.id);
  })
  res.sendStatus(200);
});

const server = app.listen(3000, () => {
  console.log('listenning on port 3000')
});