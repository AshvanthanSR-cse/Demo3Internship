export default function Login({success}){

async function login(e){
 e.preventDefault();

 const username=e.target.username.value;
 const password=e.target.password.value;

 const response=await fetch("YOUR_HTTP_API_LOGIN_URL",{
   method:"POST",
   headers:{
     "Content-Type":"application/json"
   },
   body:JSON.stringify({
      username,
      password
   })
 });

 if(response.ok){
    alert("Login Successful");
    success();
 }else{
    alert("Login Failed");
 }
}

return(
<div>
<h1>Cloud Deployment Portal</h1>
<form onSubmit={login}>
<p>Username</p>
<input type="text" name="username" required/>
<p>Password</p>
<input type="password" name="password" required/>
<br/><br/>
<button type="submit">Login</button>
</form>
</div>
);
}