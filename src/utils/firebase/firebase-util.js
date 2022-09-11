import {initializeApp} from 'firebase/app'

import {getAuth,signInWithPopup, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth'

import {getFirestore, getDoc, doc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCtqEbvr1g151FC1tgKndYbEH0Aq9offnQ",
    authDomain: "crown-clothing-db-e810c.firebaseapp.com",
    projectId: "crown-clothing-db-e810c",
    storageBucket: "crown-clothing-db-e810c.appspot.com",
    messagingSenderId: "495240850481",
    appId: "1:495240850481:web:222be6d5e6fc4ac9c27910",
    measurementId: "G-GC6YK1GHKC"
  };


  // Initialize Firebase 
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters(
    {
        prompt: 'select_account'
    
    });


 export const auth = getAuth();

 export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);   

 export const db = getFirestore();   

 export const createUserDocumentFromAuth = async (userAuth) =>{

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);

    console.log(userSnapShot);

    console.log(userSnapShot.exists());


    // if user data exists

    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }


    // if user data does not exist

    return userDocRef;

 }
