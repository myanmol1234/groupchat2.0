const express = require('express')
const router=express.Router()
const MsgController=require('../controllers/message')
router.post('/addmessage', MsgController.addMessage);



module.exports=router;