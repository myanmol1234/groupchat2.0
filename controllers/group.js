
const Group=require('../models/group')
exports.createGroup=(req,res)=>{

    let groupname=req.body.groupname
    
    console.log(req.user.name)
    Group.create({
        
        groupname:groupname,
      
        

    }).then(ress=>{
       res.status(200).json("group added")
    })
    .catch(err=>{
        console.error(err)
    })
}