// firebase.auth().onAuthStateChanged((user)=>{
//     if(!user){
//         location.replace("home.html")
//     }else{
//         document.getElementById("user").innerHTML = "Hello, "+user.email
//     }
// })


function logout(){
    sessionStorage.removeItem("useremail");
    sessionStorage.removeItem("loggedIn");
}