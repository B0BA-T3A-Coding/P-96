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
    room_name=localStorage.getItem("room_name");

    function send(){
          document.getElementsById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0
          });
          document.getElementsById("msg").value="";
    }

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
message = message_data['message'];
name = message_data['name'];
like = message_data['like'];
name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>"+ message + "</hr>";
like_button = "<button class='btn btn-warning' id=+"+firebase_message_id+" value= "+like +" onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
   } });  }); }
getData();

function update_like(message_id){
   console.log("Click on like button "+message_id);
   button_id=message_id;
   Likes=document.getElementById(button_id).value;
   updated_likes= Number(Likes)+1;
   console.log(updated_likes);
   firebase.database().ref(room_name).child(message_id).update({
         like:updated_likes
   });
}
function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location.replace("index.html");
 }