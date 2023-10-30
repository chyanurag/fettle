import React from "react"
import { Link } from "react-router-dom"
import "./Services.css";
import servicesdiet from '../components/images/servicesdiet.png'
import servicescalories from '../components/images/servicescalories.png'
import servicesallergy from '../components/images/servicesallergy.png'
function Services()
{
    return(
      <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
      <div style={{width: 440, height: 81, left: 1000, top: 154, position: 'absolute', textAlign: 'center', color: '#186803', 
    fontSize: 64, fontFamily: 'Tenor Sans', fontWeight: '400', wordWrap: 'break-word'}}>Services</div>
      </ul>
      <div className="desktop-1">
      <div className="rect" />
      <div className="line-parent">
        <div className="frame-child" />
        <img
          className="mealplan"
          src={servicesdiet}
        />
        <div className="vegetarian-diet-plans">Vegetarian Diet Plans <br/></div>
        <div className="dietplancontent"><p fontSize='2px'>Our 
        diet plans cater to all, from new plant-based explorers to seasoned vegetarians. Customized for
        <br/>various dietary preferences and health goals, these plans provide diverse meal options. From weight 
        management to dietary restrictions,they simplify plant-based living, making it both nutritious and 
        delectable. Join us in savoring the nourishing simplicity and flavor, one delicious 
        nourishing simplicity and flavor, one delicious meal at time.</p></div>
        <img
          className="allergy"
          src={servicesallergy}
        />
        <div className="allergy-alternates">Allergy Alternates</div>
        <div className="at-fettle-weve">
          At Fettle, we've streamlined the process of finding food alternatives
          that match the nutritional content of your preferences or address
          allergies. Simply input the item you'd like to replace, and we'll
          present you with suitable options that maintain similar nutrients and
          protein content. It's the key to savoring your meals while
          accommodating individual dietary needs.
        </div>
        <img
          className="cal"
          alt=""
          src={servicescalories}
        />
        <div className="calories-calculator">Calories Calculator</div>
        <div className="our-calorie-calculator">
          Our Calorie Calculator empowers you to make those choices by providing
          a user-friendly tool for estimating your daily caloric needs. Whether
          you're focusing on weight management, fitness, or simply understanding
          your dietary requirements, our calculator offers valuable insights.
          Just input your personal details, activity level, and goals, and get a
          personalized daily calorie estimate tailored to your unique needs.
          It's your gateway to achieving a healthier, more balanced lifestyle.
        </div>
      </div>

      <div className="desktop-1-item" />
    </div>
      
    </div>
    )
}
export default Services