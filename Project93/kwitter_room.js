var firebaseConfig = {
      apiKey: "AIzaSyBDhlCYJaR8bSwZIvFnFA2DR7cfGzXblkE",
      authDomain: "class93-1e4db.firebaseapp.com",
      databaseURL: "https://class93-1e4db-default-rtdb.firebaseio.com",
      projectId: "class93-1e4db",
      storageBucket: "class93-1e4db.appspot.com",
      messagingSenderId: "594160124116",
      appId: "1:594160124116:web:bcdd092c9444b6abd9bb41"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
