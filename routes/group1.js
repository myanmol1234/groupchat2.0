const express = require('express')
const router=express.Router()
const GroupController=require('../controllers/group')
router.post('/creategroup', GroupController.createGroup);


module.exports=router;