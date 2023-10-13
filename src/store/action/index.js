import { collection, onSnapshot } from "firebase/firestore";
import {db } from "../../config";


function addAds() {
    return (dispatch) => {
      onSnapshot(collection(db, "ads"), (querySnapshot) => {
        const ads = []
        querySnapshot.forEach((doc) => {
          ads.push({ ...doc.data(), id: doc.id })
        })
        dispatch({
          type: 'ADD_ADS', //nishani
          payload: ads
        })
      }) //redux-thunk
    }
  }
function addUser(user) {

    console.log('action user=>', user);
                return {
                    type: 'ADD_USER',
                    payload : user
                }
    }
    function removeUser() {
            return {
                type:"REMOVE_USER"
            }
    }
    
    export {
      addUser,
      removeUser,addAds
    }