import React, { useState,useEffect } from 'react';
import olxlogo from '../../src/images/olxlogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../store/action';
import searchIcon from '../images/searchIcon.png';
import './Navbar.css';

function Navbar(props) {
    const dispatch = useDispatch();
    const [modalState, setModalState] = useState(false)
    const [inputVal, setInputVal] = useState('');
    const User = useSelector(state => state.user);  // no need
    const [user,setUser]  = useState(User);

    useEffect(()=>{
        console.log("user found status from navbar=>", user)
        setUser(User)
    },[User])

    function propUpdater() {
        console.log("i am sending value=>",inputVal)
        props.onClick(inputVal);
    }
    function logOut() {
        dispatch(removeUser())
    }
    function toggleModal(){
        props.onTick();
    }
    return (
        <div className = 'mainHead' >
            <div className='imgHead'>
                <img id='logo-icon' src={olxlogo} alt="" />
            </div>
            <div className='inputHeader'>
                <input type="text" name="" placeholder='Search area,city or locality' id="input-flex-1" />
                <input  onChange={(e)=>{setInputVal(e.target.value)}}  id="input-flex-2" placeholder='Find Cars, Mobile phones and more...' type="text" name="" />
                <span onClick={()=>{propUpdater()}} style={{backgroundColor:'black', padding:'7px', borderRadius:'5px' }}     >          <img width={20} height={20}   src={searchIcon} alt="" />   </span>    
                {/* <button onClick={()=>logOut()}>logout</button> */}
            </div>
            <div className='buttonHeader'>
                <img id='message-icon' src="https://www.olx.com.pk/assets/iconChat_noinline.31f5df4a6a21fc770ed6863958662677.svg" alt="" />
                <img id='notify-icon' src="https://www.olx.com.pk/assets/iconNotifications_noinline.4444f6b42acbe30d772d80ef1225f574.svg" alt="" />
                {user  ?
                <div  className='dropdown   ' style={{ display: 'inline-block' }}>
                        <img className='character-icon' src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="" />
                        <img className='dropdown-icon' src="https://www.olx.com.pk/assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg" alt="" />
                    <button onClick={()=>logOut()} className="dropdown-content">
                            logout
                        </button>
                    </div> :
                <div style={{ display: 'inline-block',marginTop:'auto',marginBottom:'auto' }}>
                    <button  id='liBtn' onClick={()=>{toggleModal()}}> <a href="">Login</a>  </button>
                    </div>
                }
                <div className="stl1">
                    <div>
                        <a href="">sell + </a>
                    </div>
                </div>
            </div>
            {/* {modalState===true ?
            <div id="myModal" className="modal">
    <div className="modal-content">
    <span onClick={()=>{ setModalState(false)   }} className="close">&times;</span>
    <h1>please login or sign up to continue</h1>
    <label for="email">email</label>
    <input type="email"/> <br />
    <label for="password">password</label>
    <input type="password"/>
  </div>
</div>
:
<button onClick={()=>{ setModalState(true)   }}>  hello duniya</button>
} */}

        </div >
    )
}

export default Navbar