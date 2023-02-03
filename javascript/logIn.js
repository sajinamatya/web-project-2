 // function for form validation where the email and password is checked if it is empty or not 
 function valid() {
    // Storing the value of the input field element in their respective variable 
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    // if-else condition
    if (email == "" || password == "")   // checking if the email and password is empty
    {
        alert("Incorrect format please try again"); //shows the alert box with message 
    }
    else {
        alert("Successfully logged in"); // shows the alert box with message 
    }
}