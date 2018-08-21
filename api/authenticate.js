


firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location = "../home.html";
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

<script src="../config.js"></script>