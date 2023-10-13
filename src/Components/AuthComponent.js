import React, { useState, useEffect } from 'react' ;
import { signIn, signUp } from '../config' ;
import Box from '@mui/material/Box' ;
import { useNavigate } from 'react-router-dom' ;
import TextField from '@mui/material/TextField' ;
import Dashboard from './Dashboard' ;
import { useDispatch, useSelector } from 'react-redux' ;
import { addUser } from '../store/action' ;
import Navbar from './Navbar' ;
import { height } from '@mui/system' ;
import Footer from './Footer' ;
import { addAds } from '../store/action' ;


function AuthComponent() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const [query, searchQuery] = useState('');
  const ads = useSelector(state => state.ads);
    const [tempAds,  setAds  ] = useState(ads);
  const [modalState, setModalState] = useState(false)
 
  useEffect(async () => {
    dispatch(addAds());
    console.log('use eff from auth')
    console.log('ads from auth', ads)
  }, [])

  function searchData(val) {
    console.log('query',query)
    console.log('ads=>', ads);
    console.log(val);
    return ads.filter(function (el) {
      return el.title.toLowerCase().indexOf(val.toLowerCase()) !== -1
    })
  }

  function searchAd(query) {
     console.log('search query in the function',query) 
    var now = searchData(query);
    console.log('searched data=>', now);
    setAds(now);
  }

  const login = async () => {
    try {
      const user = await signIn(email, password);
      alert("login success");
      console.log("after login user ", user);
      dispatch(addUser(user));
      setModalState(false)
      // navigate('/dashboard');
    }
    catch (e) {
      alert("loche hogye")
    }
  }
  

  // function logUp(email,password){
  //     signUp(email,password,number)
  // }
  const logUp = async () => {
    try {
      await signUp(email, password, number);
      alert("chal hogya sign up")
    }
    catch (e) {
      alert("loche hogye")
    }
  }

  return <div>
    <Navbar onTick={()=>{setModalState(true)}}   onClick={(val) => { searchQuery(val) ; searchAd(val)   }} />
    <div style={{ margin: '2%' }}>
      <div style={{ width: '100%', overflowX: 'scroll' }}>
        <img style={{ width: '110%', height: '150px' }} src="https://images.olx.com.pk/thumbnails/245178240-800x600.webp" alt="" />
      </div>
    </div>
    <Dashboard query={{ query }} ads={tempAds} />
    
  { modalState &&
            <div id="myModal" className="modal">
    <div className="modal-content">
    <span onClick={()=>{ setModalState(!modalState)   }} className="close">&times;</span>
    <h1>please login or sign up to continue auth wala</h1>
    <input type="text" placeholder='enter your email'  onChange={(e)=>{setEmail(e.target.value)   }}  />
        <input type="text" placeholder='enter your password' onChange={(e)=>{setPassword(e.target.value)}} />
        <input type="number" onChange={(e)=>{setNumber(e.target.value)}} /> <br/>
  <button onClick={()=>{ login(email,password)  }} > login</button>
  <button onClick={()=>{ logUp(email,password)  }} > logup</button>
  </div>
</div>
}


    <Footer />
  </div>;
}

export default AuthComponent;
