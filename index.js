document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

if(sessionStorage.getItem("useremail")!=null || sessionStorage.getItem("useremail") != undefined){
    location.replace("demo.html");
}

// firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//         console.log(user);
//         location.replace("demo.html")
//     }
// })

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((u) => {sessionStorage.setItem("useremail",u.user.email)
        sessionStorage.setItem("loggedIn",true)
        location.replace("demo.html")
    })
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}