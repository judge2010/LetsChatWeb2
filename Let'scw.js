// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_3PCVki2QvCe9IxICIRBHg7B2T34fez4",
    authDomain: "let-s-chat-web.firebaseapp.com",
    projectId: "let-s-chat-web",
    storageBucket: "let-s-chat-web.appspot.com",
    messagingSenderId: "681408095361",
    appId: "1:681408095361:web:ceffaadc216aa343ec1980"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var username = localStorage.getItem("username");
  function  Logout(){
   localStorage.removeItem("username");
   window.location = "index.html"
  }
  document.getElementById("welcome").innerHTML="Welcome " + username +" !"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       var row = "<div class='room_name' id='"+ Room_names + "' onclick = 'redirect_to_room_name(this.id)'>" + Room_names + "</div>";
       document.getElementById("output").innerHTML += row + "<hr>";
      //End code
      });});}
getData();
