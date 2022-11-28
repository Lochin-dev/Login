"use ctrict";



let token = localStorage.getItem("token");
if (!token) {
   location.replace("login.html")
}

$('.chiqish').addEventListener('click' , ()=>{
   localStorage.removeItem("token")
   location.replace("login.html")
})
