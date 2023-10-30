import "./About.css";
import React from 'react'
import about1 from '../components/images/about1.jpg'
import about2 from '../components/images/about2.jpg'
import leaff from '../components/images/leaff.png'
import about3 from '../components/images/about3.jpg'
function About() {
  return (
    <div style={{width: 1440, height: 1024, position: 'relative', background: 'white'}}>
    <div style={{width: 440, height: 81, left: 910, top: 220, position: 'absolute', textAlign: 'center', color: '#186803',
     fontSize: 64, 
    fontFamily: 'Tenor Sans', fontWeight: '400', wordWrap: 'break-word'}}>About Us</div>
    <div style={{width: 602, height: 640, left: 686, top: 399, position: 'absolute', color: '#6DC300', fontSize: 25, 
       fontFamily: 'Noto Sans', fontWeight: '400', wordWrap: 'break-word'}}>
       Welcome to Fettle: Your Path to a Nourishing Vegetarian Lifestyle<br/><br/>_______________________________________________<br/><br/>
       Are you curious about embracing a vegetarian diet that not only benefits your health but also contributes to a 
       sustainable planet? Look no further - Fettle is here to guide you on your journey towards a balanced, 
       plant-powered lifestyle. Whether you're a seasoned vegetarian, a flexitarian exploring new horizons, or someone 
       simply looking to incorporate more plant-based goodness into your meals, we're thrilled to be your partner in this 
       exciting transition.

       <br/>_______________________________________________<br/><br/>
       Why Go Vegetarian?
       <br/>
       At Fettle, we believe that a vegetarian diet can be both delicious and nourishing. Our mission is to empower you
       with the knowledge and tools needed to make informed choices about your diet. From exploring the wide array of plant-based 
       protein sources to discovering vibrant and flavorful vegetable-centric recipes, we're here to show you that adopting a 
       vegetarian lifestyle doesn't mean sacrificing taste or essential nutrients.

       <br/>_______________________________________________<br/><br/>
       Your Allergy-Friendly Alternatives
       <br/>
       We understand that dietary restrictions can be a challenge. That's why VegEnergize offers comprehensive resources 
       for those with allergies, helping you navigate your vegetarian journey with ease. Whether you're gluten-sensitive, 
       lactose-intolerant, or have other food allergies, we'll provide you with creative alternatives and mouthwatering
       recipes that cater to your unique needs. <br/>_______________________________________________<br/><br/>
       Embrace Nature's Goodness, Skip the Artificial
       <br/> 
       While protein powders have their place, we're passionate about guiding you toward a more natural approach. Our 
       website is your go-to source for understanding the power of whole foods and natural ingredients as the building blocks 
       of a healthy diet. Learn how to harness the nutritional benefits of legumes, nuts, seeds, and whole grains to fuel your
       body, enhance your workouts, and promote overall well-being.
       <br/><br/><br/><br/>
       <br/>
    </div>
    <img style={{width: 350, height: 350, left: 260, top: 300, position: 'absolute', borderRadius:350}} src={about1} />
    <img style={{width: 370, height: 370, left: 79, top: 1200, position: 'absolute', borderRadius:400}} src={about2} />
    <img style={{width: 234, height: 234, left: 49, top: 57, position: 'absolute', borderRadius:234}} src={about3} />
    <img style={{width: 150, height: 117, left: 685, top: 122, position: 'absolute'}} src={leaff} />
    <img style={{width: 274.17, height: 190.27, left: 300, top: 600, position: 'absolute', transform: 'rotate(60deg)', 
    transformOrigin: '0 0'}} src={leaff} />
    <img style={{width: 274.17, height: 190.27, left: 389, top: 1290, position: 'absolute', transform: 'rotate(-100deg)', 
    transformOrigin: '0 0'}} src={leaff} />
  </div>
  )
}

export default About;