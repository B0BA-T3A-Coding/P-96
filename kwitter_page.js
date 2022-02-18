var firebaseConfig = {
      apiKey: "AIzaSyCIiRncIJ66hHHRVu2Ue2DKI75JOfhjU68",
      authDomain: "kwitterapp-9e648.firebaseapp.com",
      databaseURL: "https://kwitterapp-9e648-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-9e648",
      storageBucket: "kwitterapp-9e648.appspot.com",
      messagingSenderId: "251421544464",
      appId: "1:251421544464:web:e180b8b4e4de8aca323a95",
      measurementId: "G-YE7RXRHB68"
    };
    
    // Initialize Firebase
    var app = initializeApp(firebaseConfig);
    var analytics = getAnalytics(app);

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

//End code
      } });  }); }
getData();
