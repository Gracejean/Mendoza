// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == ("username").value && password == ("password").value){
// alert ("Login successfully");
// window.location = "login.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }

function submit(){
     document.getElementById("form").reset;
}

function login(){
    document.getElementById("form").style.visibility = 'visible';
    document.getElementById("1stpage").style.visibility = 'hidden';
}

function signup(){
    document.getElementById("sign_up").style.visibility = 'visible';
    document.getElementById("1stpage").style.visibility = 'hidden';

}

function valid(){
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("confirmpassword").value;

    if (pass1 != pass2){
        alert("Unmatched password!");

    }
    else if(document.getElementById("sign_up").value == null){
        alert("Please fill up the form completely!");
    }
    else {
        alert("You have been register!");
        window.location = 'login.html';
    }
}