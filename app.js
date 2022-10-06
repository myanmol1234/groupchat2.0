const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
const sequelize=require('./utili/database');

//app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes = require('./routes/user1');
const grouproutes=require('./routes/group1');
const messageroutes=require('./routes/message1');

const User=require('./models/admin')
const Message=require('./models/messagem')
const Group=require('./models/groupm')

app.use(bodyParser.json())

app.use(adminRoutes);
app.use(grouproutes);
app.use(messageroutes);

Group.hasMany(Message)
Message.belongsTo(Group);

User.hasMany(Message)
Message.belongsTo(User);

sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });