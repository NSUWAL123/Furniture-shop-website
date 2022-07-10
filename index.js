function validate() {
    var email = document.forms["subscribeForm"] ["email"].value;
    if (email == "") {
        alert("Please enter your email to Subscribe!")
    }
    else {
        alert ("Thanks for Subscribing us!")
    }
}