export default function Upload(){

async function upload(e){

 e.preventDefault();

 const file=e.target.htmlfile.files[0];

 const formData=new FormData();
 formData.append("file",file);

 const response=await fetch("YOUR_HTTP_API_UPLOAD_URL",{
    method:"POST",
    body:formData
 });

 if(response.ok){
    alert("Upload Successful");
 }else{
    alert("Upload Failed");
 }
}

return(
<div>
<h1>Upload HTML File</h1>

<form onSubmit={upload}>

<input
type="file"
name="htmlfile"
accept=".html"
required
/>

<br/><br/>

<button type="submit">
Upload HTML
</button>

</form>

</div>
);
}