import React,{useState} from 'react';
import Detail from './Detail';

function Card(props) {
  const [detail , activeDetail ] = useState(false);
  const props1 = props
    return (
    <div style={{display:'inline-block'}}>
    { !detail &&
        <div>
        <img width='500px' src={props.image} alt="" />
        <h1>{props.heading}</h1>
        <button onClick={()=> {props.onTick(props1) }} >click for now</button>
        </div>
    }    
        { detail && <Detail heading={props.heading} />}
    </div>
  )
}

export default Card ;