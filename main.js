
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAuth  , GoogleAuthProvider , signInWithPopup} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyDv-jV2uHrp8Xchmr3u540J6xmWK8PZEec",
    authDomain: "login-c2893.firebaseapp.com",
    projectId: "login-c2893",
    storageBucket: "login-c2893.firebasestorage.app",
    messagingSenderId: "848550093693",
    appId: "1:848550093693:web:b1142db0e0aa38f8afe214",
    measurementId: "G-KB4XZT429X"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();
  const googleLogin = document.getElementById("google-l");
  googleLogin.addEventListener("click" , function(){
    signInWithPopup(auth,provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        localStorage.setItem("currentUser", JSON.stringify({
        name: user.displayName,
        email: user.email,
        uid: user.uid
      }));
        window.location.href = "../book.html";
        
    }).catch((error) => {
        const errorcode = error.code;
        const errormessage = error.message;
    });
  })
  