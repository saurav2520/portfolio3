import React from 'react'
import { useState,useEffect } from 'react'

const TextChange = () => {
    const texts = ["Hello , I'm Saurav"]
    const [currentText, setCurrentText] =useState("")
    const [endValue,setEndValue] = useState(true)
    const[isforward,setIsForward] = useState(true)
     const[index,setIndex] = useState(0)

     useEffect(()=>{
const intervalId = setInterval(() =>{
    setCurrentText(texts[index].substring(0,endValue));
    if(isforward){
        setEndValue((prev)=>prev+1);
    }else{
        setEndValue((prev)=>prev-1);
    }
    if(endValue>texts[index].length+10){
        setIsForward(false);
    }
    if(endValue<2.1){
        setIsForward(true)
        setIndex((prev)=>prev&texts.length)
    }
},50);
return () => clearInterval(intervalId)

     },[endValue,isforward,index,texts])
  return (
    <div className='transition ease duration-300'>{currentText}
      
    </div>
  )
}

export default TextChange
