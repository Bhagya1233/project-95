
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDnjildQURQx6xuLTNg8ruLnQ0EzHOL31Q",
      authDomain: "bitter-app-d2b62.firebaseapp.com",
      databaseURL: "https://bitter-app-d2b62-default-rtdb.firebaseio.com",
      projectId: "bitter-app-d2b62",
      storageBucket: "bitter-app-d2b62.appspot.com",
      messagingSenderId: "544607663796",
      appId: "1:544607663796:web:f53b6cff23255456b649e1"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

 function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
 localStorage.setItem("room_name",room_name);
 window.location = "kwitter_message.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_names ="+ Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_message.html";
}
