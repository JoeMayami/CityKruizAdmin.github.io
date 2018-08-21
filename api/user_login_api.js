//Check if user is signed in

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

     window.location = "../home.html";

  }
  
});

//Login user in not signed in

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

//Logout user
function logout(){
  firebase.auth().signOut();
}