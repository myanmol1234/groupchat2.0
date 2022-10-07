const groupUser=require('../models/groupUser');
const user=require('../models/admin');

const Group=require('../models/groupm')
exports.createGroup=(req,res)=>{
  const groupname=req.body.groupname;
    const user=req.user.id.toString();
    
    console.log(req.body);
    Group.create({groupname:groupname,user:user}).then(ress=>{
        groupUser.Create({groupId:ress.id,userId:ress.user}).then(ress=>
            {res.status(201).json("group added")}).catch(err=>{
                console.error(err)})
       
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


exports.addUserToGroup=(req,res)=>
{
    
    const groupId=req.body.groupid;
    const useremail=req.body.addMembersinput;
    user.findOne({where:{email:useremail}}).then(ress=>
        {
            groupUser.create({groupId:groupId,userId:ress.id}).then(ress=>
                {
                res.status(201).json("group member added")
             })
             .catch(err=>{
                 console.error(err)
             })
        })
        .catch(err=>{
            console.error(err)
        })
    
}