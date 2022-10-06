function login(event)
   
{ event.preventDefault();

    alert("The form was submitted");

   // const name=document.getElementById("text");
    const password=document.getElementById("pass");
  const email=document.getElementById("email");

    let logindetails={
        //name:name.value,
        email:email.value,
        password:password.value,
     
    };
   
    axios.post("http://localhost:3000/login",logindetails)
    .then((response) => {
        if(response.status==201)
        { console.log("return response from login",response.data.message);
          
           
            window.location.href="./group.html"
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