
const Group=require('../models/groupm')
exports.createGroup=(req,res)=>{
  const groupname=req.body.groupname;
    const user=req.user.id.toString();
    
    console.log(req.body);
    Group.create({groupname:groupname,user:user}).then(ress=>{
       res.status(201).json("group added")
    })
    .catch(err=>{
        console.error(err)
    })
}

exports.getGroups=(req,res)=>{
    console.log("idddddd is",req.user.id);
    Group.findAll().then(groups=>{
        res.status(200).json(groups)
    })
    .catch(err=>{
        console.error(err)

    })
}