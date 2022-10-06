function signup(event)
   
{ event.preventDefault();

    alert("The form was submitted");

    const name=document.getElementById("text");
    const password=document.getElementById("pass");
    const email=document.getElementById("mail");

    let obj={
        name:name.value,
        email:email.value,
        password:password.value,
    };
    console.log('object is ', obj);
    axios.post("http://localhost:3000/signup",obj)
    .then((response) => {
        if(response.status==201)
        {  console.log(response);
            window.location.href="./login.html";
            
        }
        else
        {
            throw new Error("failed to login")
        }
        
       
      console.log(response);
    
    })
    .catch((err) => {
        
        console.log(err);
    });

    
}