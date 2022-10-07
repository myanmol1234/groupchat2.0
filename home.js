

 window.addEventListener('load', ()=> {
    var count=0;
    const token= localStorage.getItem('token');
    let paramString = window.location.href;
    console.log("home url is",paramString);
    let groupid=paramString.split('groupid=')[1]
    console.log("group iddddddddd",groupid);
    
    console.log("token is ",token);
    axios.get(`http://localhost:3000/getmessages?lastmsg=0&groupid=${groupid}`,{ headers: {"Authorization" : token} }).then(response => {
        if(response.status === 201){
            console.log(response);
            console.log(response.data);
            
            //response.data.expenses.forEach(expense => {
              
                const dataa=response.data.msg;
             
                for(let i=count;i<dataa.length;i++){
                    if(i%2==0){
                        messages_cont_ul.innerHTML=messages_cont_ul.innerHTML+ ` <li class="even">${dataa[i]. msg} </li>`
                
                
                    }
                    else{
                
                    messages_cont_ul.innerHTML=messages_cont_ul.innerHTML+ ` <li >${dataa[i]. msg} </li>`
                    }
                   
                }
            
        } else {
            throw new Error();
        }
    })
});


function addmessage(event){
    event.preventDefault();
    const token= localStorage.getItem('token');
    alert("The form was submitted");
    let paramString = window.location.href;
    let groupid=paramString.split('groupid=')[1]
    const messageinput=document.getElementById("messageinput");
    
    let obj={
        
        msg:messageinput.value,
        groupid:groupid,
       
    };
   
    axios.post("http://localhost:3000/addmessage",obj,{  headers:{"Authorization":token}})
    .then((response) => {
        if(response.status==201)
        { console.log("return response from group",response.data.message);
          
           
            //window.location.href="./group.html"
        }
        else
        {
            throw new Error(response.data.message)
        }
        
       
      console.log(response);
    
    })
    .catch((err) => {
        
        console.log(err);
    });

}


function addmembers(event)
{
    const addMembersinput=document.getElementById('addMembersinput')
    event.preventDefault();
    const token= localStorage.getItem('token');
    alert("The form was submitted");
    let paramString = window.location.href;
    let groupid=paramString.split('groupid=')[1]
    
    
    let obj={
        
        addMembersinput: addMembersinput.value,
        groupid:groupid,
       
    };
   
    axios.post("http://localhost:3000/addmembers",obj,{  headers:{"Authorization":token}})
    .then((response) => {
        if(response.status==201)
        { console.log("return response ",response.data.message);
          
           
            //window.location.href="./group.html"
        }
        else
        {
            throw new Error(response.data.message)
        }
        
       
      console.log(response);
    
    })
    .catch((err) => {
        
        console.log(err);
    });
}
