import firebase from "firebase";

//Importing redux
import store from "./store.js";

var config = {
  apiKey: "AIzaSyAnLuxFRoSgJKhhBWf3MdgjJWVieBmFqW4",
  authDomain: "cardonanotes.firebaseapp.com",
  databaseURL: "https://cardonanotes.firebaseio.com",
  projectId: "cardonanotes",
  storageBucket: "cardonanotes.appspot.com",
  messagingSenderId: "796779341473"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch({
      type: "USER_LOGIN",
      payload: { ...user.providerData[0] }
    });
  } else {
    store.dispatch({ type: "USER_LOGOUT" });
  }
});

export default firebase;
