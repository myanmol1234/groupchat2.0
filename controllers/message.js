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


exports.getmessages = (req, res)=> {

    const lastId=req.query.lastmsg||0
    console.log("query is ",req.query);
    let groupid=req.query.groupid; 
    console.log("groupidddddddd",groupid);
    let lastIdN=+lastId
   // const userid=req.user.id  /// coming from middlware authentication
   
    //groupId=+groupId
    
    Message.findAll({ where:{groupId:groupid}}).then(msg => {
         return res.status(201).json({msg, success: true})
     })
     .catch(err => {
        console.log(err);
         return res.status(500).json({ error: err, success: false})
     })
 }

