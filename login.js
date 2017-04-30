/*global location*/

function checkIt(){
    var username = document.loginForm.userid.value;
    var password = document.loginForm.userpswrd.value;
    if(username == "admin@fakenews.org" && password == "fakenews"){
        window.location.href="index.html";
    }
    else{
        alert("Incorret username or password");
    }
}
