import React,{useState} from 'react';
import { setAd} from '../config';
import { uploadImageToStorage ,uploadImagesToStorage } from '../config';



export default function Sell() {
const [price, setPrice] =useState();
const [title, setTitle] =useState();
const [images, setImages ] = useState('');
// const [images, setImages] = useState([])

  const uploadImage = async () => {
    try {
      const urls = await uploadImageToStorage(images)
      console.log('url from component', urls)
      alert('Successful Hogya')
      setImages(urls)
    } catch (e) {
      alert(e.message)
    }
  }
const uploadAd = async ()=>{
  try {
      await setAd(title,price,images);
  }
  catch(e){
  alert("loche hogye")
  }
}

function showDetail(){
  console.log(`Price = ${price} , title = ${title}   `)
}
  return (
    <div >
      <label htmlFor=""> item name </label>
      <input type="text"  onChange={(e)=>{setTitle  (e.target.value)   }} /> <br />
      {/* <label htmlFor=""> image url </label>
      <input type="text" onChange={(e)=>{setImages(e.target.value)   }} /> <br /> */}
      <label htmlFor=""> price  </label>
      <input type="text" onChange={(e)=>{setPrice(e.target.value)   }} /> <br />
      <label htmlFor=""> Id :  </label>
      <input type="file" onChange={(e) => setImages(e.target.files)}  />
      <button onClick={uploadImage}>Submit</button>
            <input type="submit"  onClick={()=>{ uploadAd()  }} /> 
    </div>
  )
}

 