import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import {useState} from 'react' ;
import Detail from './Components/Detail';
import Sell from './Components/Sell';
import AuthComponent from './Components/AuthComponent';
import Navigation from './Navigation';
import {store, persistor}  from './store/index' ;
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react' ; 


function App() {
  const [authView,setAuthView] = useState(false);
  const [sellState,setSellState] = useState(false);
const [currentView, setCurrentView] = useState(true);
const [ currentComponent , setCurrentComponent ]  = useState({});
// const userObj = [{'image':'https://cdn.pixabay.com/photo/2022/01/16/15/03/finch-6942278__340.jpg','heading':'car1'}   
//  ,{'image':'https://cdn.pixabay.com/photo/2021/12/23/03/58/indoor-6888603__480.jpg','heading':'car2'}   ]
//  function setData(data){
//    setCurrentComponent({'heading':data.heading , 'image':data.image });
//    setCurrentView(false)
//  }
 
 return (
   <Provider store={store}>
     <PersistGate loading={<div>Loading</div>} persistor={persistor}>

    <div className="App">
    <Navigation/>
    </div>
     </PersistGate>
   </Provider>
  );
}

export default App;
