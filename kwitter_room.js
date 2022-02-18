const firebaseConfig = {
  apiKey: "AIzaSyClAycNArvgM2cE7_n2ZNGZShUfM7bTZe4",
  authDomain: "p-94-68f59.firebaseapp.com",
  databaseURL: "https://p-94-68f59-default-rtdb.firebaseio.com",
  projectId: "p-94-68f59",
  storageBucket: "p-94-68f59.appspot.com",
  messagingSenderId: "57708304619",
  appId: "1:57708304619:web:e29a5d977c55b5fb8986ae",
  measurementId: "G-ZKZD4FBWMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";


function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding Room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("room_name" + Room_names);
     room="<div class='room_name' id= " + Room_names +"onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
     document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log("name");
localStorage.setItem("room_name", name);
window.location("kwitter_room.html");
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}