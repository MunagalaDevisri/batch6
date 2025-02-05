// 
import React, { useState } from 'react';
import video2 from './bird.mp4';


const State1 = () => {
    let[state,setState]=useState(true)
    let demo=()=>{
        let demo1=document.getElementById("demo")
        console.log(demo)
        setState(!state)
        state === true ? demo1.play() : demo1.pause()
    }

  return (
    <div>
        < video src={video2} height="500px"  id='demo' onClick={demo}></video>
    </div>
  )
}

export default State1