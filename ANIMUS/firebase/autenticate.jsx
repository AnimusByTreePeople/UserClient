import { app } from "./init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  getUserFromUID,
  createUserFromUID,
} from "../src/controller/accountController";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signUpUser = async (email, password, name, cashierId) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      name,
      cashierId
    );
    console.log(userCredentials,"Im here");
    console.log("calling createUserWithEmailAndPassword");
    createUserFromUID(name, cashierId, userCredentials.user.uid);
    console.log("No error");
  } catch (error) {
    console.log(error.message, "firbase error");
  }
};

export const signInUser = async (email, password, cashierId) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password,
      cashierId
    );
    console.log(userCredentials.user.uid);

    const user = getUserFromUID(userCredentials.user.uid);

    return user;
  } catch (error) {
    console.log(error, "firbase error");
  }
};

export const signOutUser = async (email, password) => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};

export const googleSignIn = async () => {
  try {
    const user = await signInWithPopup(auth, provider);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};
