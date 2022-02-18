function addUser(){
    username=document.getElementById("user_name");
    localStorage.setItem("user_name", user_name);
    window.location="Kwitter_room.html";
}