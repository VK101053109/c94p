user_name=localStorage.getItem("user_name_key");
document.getElementById("welcome_name").innerHTML="Welcome "+user_name;
var firebaseConfig = {
    apiKey: "AIzaSyC23ZtY56UttSihwrDrIsUB2emTq-isvqI",
    authDomain: "c94p-974e3.firebaseapp.com",
    databaseURL: "https://c94p-974e3-default-rtdb.firebaseio.com",
    projectId: "c94p-974e3",
    storageBucket: "c94p-974e3.appspot.com",
    messagingSenderId: "671321345768",
    appId: "1:671321345768:web:f539c81b31815de1fc835d"
  };
  firebase.initializeApp(firebaseConfig);
  function logout(){
    window.location="index.html";
  }
  function addroom(){
    folder_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(folder_name).update({
        purpose:"room created"
    })
    

  }