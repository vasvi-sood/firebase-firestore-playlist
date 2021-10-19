import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import {  getAuth, signInWithPopup,GoogleAuthProvider,signInWithRedirect } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCmTHDnIBAYh7rHWDAvpTMvrOyOIXPgInQ",
    authDomain: "avian-mile-315111.firebaseapp.com",
    projectId: "avian-mile-315111",
    storageBucket: "avian-mile-315111.appspot.com",
    messagingSenderId: "412270154473",
    appId: "1:412270154473:web:15231f2e6eeef8f54b1678",
    measurementId: "G-BSFTB5JHZY"
  };
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  let signin=document.getElementById("signin");
  let signout=document.getElementById("signout");
signin.addEventListener('click',(e)=>{
    console.log("sign in press");
    Googlesign();
})
signout.addEventListener('click',(e)=>{
    console.log("sign out press");
    Googlesignout();
})
  function Googlesign(){
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

function Googlesignout()
{
signOut(auth).then(() => {
 console.log("signed out");
}).catch((error) => {
console.log("error",error);
});
}