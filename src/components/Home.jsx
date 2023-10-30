import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom'
import leaf from "../components/images/leaf.png"
import leaf3 from "../components/images/leaf3.png"
import kiwi from "../components/images/kiwi.png"
import panner from "../components/images/panner.png"
function Homepage() {
  return (
    <div className="HomePage">
        <img className="absolute leaf" src={leaf} alt="" />
        <img className="absolute leaf3" src={leaf3} alt="" />
        <img className="absolute kiwi" src={kiwi} alt="" />
        <img className="absolute panner" src={panner} alt="" /> 
        

        <div className="rectanglediv">
            <h1 className='title'>Fettle</h1>
            <p className='description'>
              Step into the world of plant-based living with Fettle, 
              your personalized hub for all things vegetarian. 
              Whether you're a seasoned enthusiast or just starting,
               Fettle accompanies you in this journey.
            </p>
            <div className="register">
              <button style={{padding: '.5rem', cursor: 'pointer', fontSize: '1.1rem', backgroundColor: 'lightgreen', border: 'none'}}><Link to="/login">Login</Link></button>
              <br/>
              <button style={{padding: '.5rem', cursor: 'pointer', fontSize: '1.1rem', backgroundColor: 'lightgreen', border: 'none'}}><Link to="/register">Sign up</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Homepage;
