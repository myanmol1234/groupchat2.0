const express = require('express')
const router=express.Router()
const GroupController=require('../controllers/group')
const authenticatemiddleware = require('../middleware/auth');
router.post('/creategroup', authenticatemiddleware.authenticate,GroupController.createGroup);
router.get('/getgroups',authenticatemiddleware.authenticate,GroupController.getGroups);


module.exports=router;