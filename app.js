const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
const sequelize=require('./utili/database');

//app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes = require('./routes/user1');
const grouproutes=require('./routes/group1');
app.use(bodyParser.json())

app.use(adminRoutes);
app.use(grouproutes);

sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });