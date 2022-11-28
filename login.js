"use ctrict";



setTimeout(()=>{
   let token=localStorage.getItem("token")
if(token){
   alert("Token bor")
   location.replace("index.html")
}
},1000) 
$('#forma').addEventListener('submit', async function (e) {
   e.preventDefault()

   let tokenData={}

   await fetch("https://reqres.in/api/login" , {
      method: 'POST',
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         email: $('.gmail').value,
         password: $('.password').value
      })
   }).then(ras=>ras.json()).then(data=>tokenData=data)
 

if(tokenData.token){
   localStorage.setItem("token",JSON.stringify(tokenData.token))
   location.replace("index.html")
}else{
   alert('Logini kriting')
}

})
