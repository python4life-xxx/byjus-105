// Configuración de Firebase de tu app web
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
const firebaseConfig = {
    apiKey: "AIzaSyBFoSOKPnB7qskgaf_iob4FNaRABc1t-DU",
    authDomain: "kwitter-fa66f.firebaseapp.com",
    databaseURL: "https://kwitter-fa66f-default-rtdb.firebaseio.com",
    projectId: "kwitter-fa66f",
    storageBucket: "kwitter-fa66f.appspot.com",
    messagingSenderId: "827752874436",
    appId: "1:827752874436:web:4ebca60d93e246b0f5e491",
    measurementId: "G-DTN468D63Q"
 };
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



