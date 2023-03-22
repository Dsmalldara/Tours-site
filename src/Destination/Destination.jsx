import React from "react";
import "./Destination.css";
import tahama from '../Destination/images/1.jpg'
import tahama2 from '../Destination/images/2.jpg'
const Destination = () => {
  return (
    <div className="Destination">
        <button className="travel-btn">Travel Plans</button>
        <h1>Available Tours</h1>
        <div className="destination-malaysia">
        <div className="malaysia-word">
          <p>Malaysia</p>
          <h3>Day Tour to Taman Negara</h3>
          <p>
            Depart Kuala Lumpur and journey to Taman Negara National Park.
            following early morning pickup from your hotel.
             Enjoy the amazing  views on the scenic drive past 
             typical kampung (village) houses and
            stop for a local breakfast at Jerantut Town. 
            Enjoy a sumptuous lunch at a floating restaurant,
             and get some time to relax before riding
            the river rapids on a longtail boat ride to Trenggan.
          </p>
          </div> 
          <div className="t-img">
          <img  className="image" alt="image" src={tahama}/>
          <img className="imag" alt="image" src={tahama2}/>
        </div>
        </div>
        <div className="destination-link-content">
            <h2>France</h2>
            <p></p>
        </div>
        <div className="destination-link-content">
            <h2> </h2>
            <p>ddd</p>
        </div>
        <div className="destination-link-content">
          <article>
            <h2>aaaaa</h2>
            <p></p>
          </article>
        </div>
        <div className="destination-link-content">
          <article>
            <h2></h2>
            <p></p>
          </article>
        </div>
        <div></div>
        <article>
          <h2></h2>
          <p></p>
        </article>
    </div>
  );
};

export default Destination;
