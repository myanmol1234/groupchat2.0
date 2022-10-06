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


const getmessages = (req, res)=> {

    const lastId=req.query.lastmsg||0
    let groupid=req.query.groupid
    let lastIdN=+lastId
    const userid=req.user.id  /// coming from middlware authentication
   
    groupid=+groupid
    console.log("idddddd is",req.user.id);
     Message.findAll({where:{userId:req.user.id}}).then(expenses => {
         return res.status(200).json({expenses, success: true})
     })
     .catch(err => {
         return res.status(500).json({ error: err, success: false})
     })
 }
