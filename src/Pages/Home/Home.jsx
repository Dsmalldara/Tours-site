import React,{useState} from "react";
import "./Home.css"
import Services from '../Services/Services'
import Footer from '../../Footer/Footer'
import Destination from '../../Destination/Destination'
import Typewriter, { TypewriterClass } from 'typewriter-effect'
function Home(props){
  
  return (
    <div className={props.top}>
    <div className={props.heading}>
      <div className={props.nimation}>
    {props.head}
       </div>
       <div className={props.animation}>
       <Typewriter 
        onInit={(typewriter)=>{
          typewriter.typeString("Where your dreams come true").pauseFor(2000)
          .deleteAll().typeString("Visit your dream destination today..").start()
         }}/>
       </div>
        <Destination/>
        <Footer/>
      </div>
      </div>
  )
}

export default Home