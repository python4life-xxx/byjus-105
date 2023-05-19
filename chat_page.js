var firebaseConfig = {
    apiKey: "AIzaSyC7rvhJUPj-96m387rh8220wAPX1kpvqaw",
    authDomain: "jsdbtest.firebaseapp.com",
    databaseURL: "https://jsdbtest.firebaseio.com",
    projectId: "jsdbtest",
    storageBucket: "jsdbtest.appspot.com",
    messagingSenderId: "557097620929",
    appId: "1:557097620929:web:d549209de61a48b20b8b40"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

function sendMessage() {
    var inputField = document.querySelector("input[type='text']");
    var message = inputField.value;
  
    if (message !== "") {
      firebase.firestore().collection("messages").add({
        sender: user_name,
        text: message,
        timestamp: Date.now(),
      });
  
      inputField.value = "";
    }
  
    return false;
}

function loadMessages() {
    firebase.firestore().collection("messages")
      .orderBy("timestamp")
      .onSnapshot(function (snapshot) {snapshot.docChanges().forEach(function (change) {
          if (change.type === "added") {
            var message = change.doc.data();
            var messageList = document.querySelector("#message-list");
  
            var newMessage = document.createElement("div");
            newMessage.classList.add("messages");
  
            var senderElement = document.createElement("p");
            senderElement.classList.add("sender");
            senderElement.textContent = message.sender + ":";
  
            var textElement = document.createElement("p");textElement.classList.add("text");
            textElement.textContent = message.text;
  
            newMessage.appendChild(senderElement);
            newMessage.appendChild(textElement);
  
            messageList.appendChild(newMessage);
          }
        });
      });
}
  
function getData() { firebase.database().ref("/"+room_name).on('value',
  function(snapshot) { document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData =
  childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
  // Inicia el código.
  <div>
  </div>
  // Termina el código.
} }); }); }
getData();

function updateLike(){
  like = localStorage.getItem("likes")

  like++
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}