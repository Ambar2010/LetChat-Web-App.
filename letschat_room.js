
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBCu4uWhgB28t2z6m6QNURXUN1Fzn58_1g",
      authDomain: "lets-chat-web-app-a7350.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-a7350-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-a7350",
      storageBucket: "lets-chat-web-app-a7350.appspot.com",
      messagingSenderId: "6524743197",
      appId: "1:6524743197:web:b7a42c6849cc076c93a0f4"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "letschat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names +  "onclick = 'redirectToRoomName(this.id)'># " +Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "letschat_page.html";
      
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

