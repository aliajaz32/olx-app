// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, getDoc, setDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfO2SXQWUGgeAh6hQplDJ4uTfGpayjj-A",
  authDomain: "proj1-4df0f.firebaseapp.com",
  projectId: "proj1-4df0f",
  storageBucket: "proj1-4df0f.appspot.com",
  messagingSenderId: "589401748212",
  appId: "1:589401748212:web:5b0857ba842498040624a1",
  measurementId: "G-CEYCGCG0V4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage()


// function signUp(email,password,number){
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     const uid = user.uid;
//     alert("success signed up");
//     setDoc(doc(db, "users", uid), {
//             email,
//             password,
//             number
//           })
//           .then(() => {
//             alert('Added in database')
//           }).catch(e => {
//             alert('Not added in database')
//           })
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage);
//     // ..
//   });
// }
async function signUp(email, password, number) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const uid = userCredential.user.uid;
  try {
    await setDoc(doc(db, "users", uid), {
      email,
      password,
      number
    })
    alert("registered and added in  database");
  }
  catch (e) {
    alert(e.message);
    alert("not added in database")
  }
}

async function signIn(email, password) {

  const userObj = await signInWithEmailAndPassword(auth, email, password);
  const user = await getDoc(doc(db, 'users', userObj.user.uid));
  return user.data();

  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   // alert("success logged in ")
  //   // alert("user",user);
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   alert(errorMessage);
  // });
}

async function getAds() {
  const querySnapshot = await getDocs(collection(db, "ads"))
  const ads = []
  querySnapshot.forEach((doc) => {
    ads.push({ ...doc.data(), id: doc.id })
  })
  return ads
}
async function setAd(title, price, images) {
  try {
    await addDoc(collection(db, "ads"), {
      title,
      price,
      images
    })

    alert("add successfully uploaded");
  }
  catch (e) {
    console.log(e);
    alert("not added in database")
  }

}
async function getAdDetails(adId) {
  const docRef = doc(db, "ads", adId);
  const docSnap = await getDoc(docRef);
  // console.log(docSnap.data())
  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data()
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function uploadImageToStorage(files) {
  const storageRef = ref(storage,'/profile/'+files[0].name);
  const response = await uploadBytes(storageRef, files[0])
  return await getDownloadURL(response.ref)
}

async function uploadImagesToStorage(files) {
  let urls = []
  for (let i = 0; i < files.length; i++) {
    const storageRef = ref(storage, `/profile/${files[i].name}`);
    const response = await uploadBytes(storageRef, files[i])
    const url = await getDownloadURL(response.ref)
    urls.push(url)
  }
  return urls
}

export { signIn, signUp, db, getAds, getAdDetails, setAd, uploadImageToStorage, uploadImagesToStorage };