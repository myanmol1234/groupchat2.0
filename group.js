
document.addEventListener('DOMContentLoaded',async()=>{
   
    createGroup();
})
function createGroup(){
  
    const creategroupname=document.getElementById('creategroupname')
    const creategroupbtn=document.getElementById('creategroupbtn')
    
    creategroupbtn.addEventListener('click',()=>{
       
        console.log(creategroupname.value);
        const token= localStorage.getItem('token')

        axios.post('http://localhost:3000/creategroup',{
            groupname:creategroupname.value
         },{
             headers:{"Authorization":token}
         }).then(ress=>{
             console.log(ress)
         })

   
    
})

}