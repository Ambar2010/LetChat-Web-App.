
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
user_name =  localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
