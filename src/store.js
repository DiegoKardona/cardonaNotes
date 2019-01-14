import { createStore } from "redux";
import firebase from "./firebase";

const reducer = (state, action) => {
  const currentUser = firebase.auth().currentUser;

  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, logged: true, user: action.payload };

    case "USER_LOGOUT":
      return { ...state, logged: false };

    case "CHANGE_USERNAME": {
      currentUser.updateProfile({ displayName: action.payload });

      return {
        ...state,
        user: { ...currentUser.providerData[0] }
      };
    }

    case "CHANGE_AVATAR": {
      currentUser.updateProfile({ photoURL: action.payload });

      alert("Avatar changed!");

      return {
        ...state,
        user: { ...currentUser.providerData[0] }
      };
    }

    default:
      return state;
  }
};

const initialState = {
  logged: null,
  user: {}
};

const store = createStore(reducer, initialState);

export default store;
