import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { getAds } from '../config';
// copied
import { addAds } from '../store/action'
// copied
import { useSelector, useDispatch } from 'react-redux';
import { setAd } from '../config';

function Dashboard(props) {
  // const [ads, setAds] = useState([])
  const navigate = useNavigate();
  // const user = useSelector(state => state.user);  // no need
  // copied
  // const ads = useSelector(state => state.ads);
  const [search, setSearch] = useState(props.ads);
  // copied
  // const dispatch = useDispatch();
  const [query1, searchQuery1] = useState('');

  // this compo work
  const [ tempAds , setTempAds] = useState('')

  // useEffect(async () => {
  //   dispatch(addAds())
  // }, [])

  useEffect(() => {
    setSearch(props.ads)
  }, [props.ads]);

// copied
  // function searchData(ads1) {
  //   console.log('ads=>', ads1) ;
  //   console.log(query1.query) ;
  //   return ads1.filter(function (el) {
  //     return el.title.toLowerCase().indexOf(query1.query.toLowerCase()) !== -1
  //   })
  // }

  // function searchAd(search) {
  //   var now = searchData(search);
  //   console.log('searched data=>', now)
  //   setSearch(now);
  // }
  return (
    <div  style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
      {/* <input type="text" onChange={(e) => searchQuery1(e.target.value)} /> */}
      {/* <button onClick={() => searchAd(search)}>search now</button> */}
      {search.map(item => {
        const { images, title, price, id } = item

        //template literals
        return <div
          // onClick={() => {navigate('/detail/' + id)}}
          onClick={() => { navigate(`/detail/${id}`) }}
          style={{ marginLeft: '10px', marginBottom: '10px', border: '1px solid gray' }}>
          <img src={images} width='222px' height='160px' />
          <h3>{title}</h3>
          <p style={{ fontWeight: 'bold', fontSize: '20px', color: 'black' }}>Rs {price}</p>
          <button onClick={() => { navigate(`/detail/${id}`) }}> details </button>
        </div>
      })}
    </div>
  )
}

export default Dashboard