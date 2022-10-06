
const Group=require('../models/groupm')
exports.createGroup=(req,res)=>{

    let {groupname}=req.body;
    
    console.log(req.body);
    Group.create({groupname:groupname,}).then(ress=>{
       res.status(201).json("group added")
    })
    .catch(err=>{
        console.error(err)
    })
}

exports.getGroups=(req,res)=>{
    Group.findAll().then(groups=>{
        res.status(200).json(groups)
    })
    .catch(err=>{
        console.error(err)

    })
}