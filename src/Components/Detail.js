import React,{useEffect,useState} from 'react';
import { useParams , } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import {getAdDetails} from '../config'


function Detail() {
  const [ad, setAd] = useState([])
  const navigate = useNavigate()
 
  const params = useParams()
  console.log('params --->', params.adId);

  useEffect(async () => {
    const tempAds = await getAdDetails(params.adId)
    setAd(tempAds)
  }, []);

      console.log('ads --->', ad)

  return (
    <div   >
      <h1>the detail component</h1>
        <h1>{ad.title}</h1>
        <img style={{width:"500px"}} src={ad.images} alt="" />
        <h3>Price  : {ad.price}</h3>
        <button onClick={() => { navigate(`/detail/${ad.id}`) }}> details</button>
    </div>
  )
}

export default Detail