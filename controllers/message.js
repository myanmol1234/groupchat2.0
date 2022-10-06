const Message=require('../models/messagem')
exports.addMessage=(req,res)=>{

    let {msg,groupid}=req.body;
    
    console.log(req.body);
    Message.create({msg,groupid}).then(ress=>{
       res.status(201).json("Msg sent")
    })
    .catch(err=>{
        console.error(err)
    })
}