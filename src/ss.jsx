import React,{useState} from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect'
import Services from '../Services/Services'
import Footer from '../../Footer/Footer'
import Destination from '../../Destination/Destination'
const Home = () => {
   const [state] = useState({
    title:"Visit",
    title1:"Your ",
    title2 : "Dream Destination...."
   })
  return (<div className='home'>
            <div className='body' style={{height:"100%"}}>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
        <Typewriter
        options={{autoStart:true,
        loop:true,
       delay:40,
       strings:[
          "Gotravel Tours",
          "and",
          " Travel Agency"
       ]
      }}
        
        />
         <br></br>
         <div className='p-body'>
      <div>{state.title}</div> 
       <div>{state.title1}</div>
       <div>{state.title2}</div>
         </div>
         <div>
          <button  className='btn' onClick={()=>Services()}> Book A Trip</button>
         </div>
         <Destination/>
         
    </div>
    <Footer/>
    </div>
  )
}

export default Home