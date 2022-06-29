//la Configuracion de Firebase
var firebase = {
    projectId: 'pagina-p-ship-brokers',
    appId: '1:246015462916:web:791f643f03ac73cfa76f51',
    storageBucket: 'pagina-p-ship-brokers.appspot.com',
    apiKey: 'AIzaSyC1_xhG-PZVXtkiwGZf03qJ_lxMC91koLc',
    authDomain: 'pagina-p-ship-brokers.firebaseapp.com',
    messagingSenderId: '246015462916',
    measurementId: 'G-225GM1D4CX',
  };

  //inicializar Firebase
  firebase.initializeApp(firebase);
//   provideFirebaseApp(() => initializeApp(environment.firebase)), si invocara de environment

//listen for submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

//reference contactInfo Collections
let contactInfo = firebase.database().ref("infos");

function submitForm(e){
    e.preventDefault();
    // 
    //get imput values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let phone = document.querySelector(".phone").value;
    let message = document.querySelector(".message").value;
    // console.log(name, name, phone, message);
 
    saveContactInfo(name, email, phone, message)

    document.querySelector(".contact-form").requestFullscreen();
}
//save infos to firebase

function saveContactInfo(name, email, phone, message){
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        phone: phone,
        message: message,
    });
}