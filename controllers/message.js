const Message=require('../models/messagem')
exports.addMessage=(req,res)=>{
 const msg=req.body.msg;
 const groupId=req.body.groupid;
   
    
    console.log(req.body);
    Message.create({msg,groupId}).then(ress=>{
       res.status(201).json("Msg sent")
    })
    .catch(err=>{
        console.error(err)
    })
}

