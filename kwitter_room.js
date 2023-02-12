
var firebaseConfig = {
      apiKey: "AIzaSyCGymyRDxExUojGX6qv0AZtWAtuuOwHylU",
      authDomain: "yaboi-4fdc1.firebaseapp.com",
      databaseURL: "https://yaboi-4fdc1-default-rtdb.firebaseio.com",
      projectId: "yaboi-4fdc1",
      storageBucket: "yaboi-4fdc1.appspot.com",
      messagingSenderId: "742080568089",
      appId: "1:742080568089:web:2557d486764724e7a9c388"
    };
    
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

     function addRoom()
     {
      room_name = document.getElementById ("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}