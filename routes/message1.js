const express = require('express')
const router=express.Router()
const MsgController=require('../controllers/message')
const authenticatemiddleware = require('../middleware/auth');
router.post('/addmessage', authenticatemiddleware.authenticate,MsgController.addMessage);

router.get('/getmessages',authenticatemiddleware.authenticate,MsgController.getmessages);

module.exports=router;