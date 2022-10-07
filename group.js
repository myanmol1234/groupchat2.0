

 window.addEventListener('load', ()=> {
    const token= localStorage.getItem('token');
    axios.get('http://localhost:3000/getgroups',{ headers: {"Authorization" : token} }).then(response => {
        if(response.status === 200){
            console.log(response);
            console.log(response.data);
            
            //response.data.expenses.forEach(expense => {
              
                const groupul=document.getElementById('groupul');
                let data=response.data;
        for(let i=0;i<data.length;i++){

                groupul.innerHTML=groupul.innerHTML+`<li>
        <a href="./home.html?groupid=${data[i].id}">
            <img src="data:image/png;base64,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">
        <p>${data[i].groupname}</p>
        </a>
    </li>`

        }
            
        } else {
            throw new Error();
        }
    })
});


function creategroup(event){
    event.preventDefault();
    alert("The form was submitted");
    const token = localStorage.getItem('token');
  
    const creategroupname=document.getElementById("creategroupname");
    
    let obj={
        
        groupname:creategroupname.value,
       
    };
   
    axios.post("http://localhost:3000/creategroup",obj,{ headers: {"Authorization" : token} })
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

