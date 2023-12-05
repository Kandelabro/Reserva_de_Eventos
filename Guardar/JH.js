import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCn0DxX4s4WaqtzWMiz9rqfo8qRE7liLz4",
    authDomain: "reservaciones-92abf.firebaseapp.com",
    projectId: "reservaciones-92abf",
    storageBucket: "reservaciones-92abf.appspot.com",
    messagingSenderId: "918098030008",
    appId: "1:918098030008:web:7ae78b72b4c6bb1593334d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
console.log("Conexión a Firebase establecida correctamente.");


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const form = document.getElementById("Res");

form.addEventListener("submit", async function (event)  {
  event.preventDefault();

  const Nombre = form.nombre.value;
  const ApellidoP = form.apellidopaterno.value;
  const ApellidoM = form.apellidomaterno.value;
  const Correo = form.correo.value;
  const Asiento = form.asiento.value;

  // Almacena los datos en Firestore
  db.collection("JuniorH").add({
     Nombre:Nombre,
     Apellidopaterno:ApellidoP,
     Apellidomaterno:ApellidoM,
     Correo:Correo,
     Asiento: Asiento

  })
  .then((docRef) => {
    console.log("Documento almacenado con ID: ", docRef.id);
    // Puedes hacer más aquí, como mostrar un mensaje de éxito al usuario.
  })
  .catch((error) => {
    console.error("Error al almacenar el documento: ", error);
    // Puedes mostrar un mensaje de error al usuario.
  });

  // Limpia el formulario
  form.reset();
});
