import "./Review.css";
import React from 'react'
import reviewers from '../components/images/reviewers.jpg';
import reviews from '../components/images/reviews.jpg';

function Review() {
  return (
    <div style={{width: 1549, height: 1149, position: 'relative', background: 'white'}}>
  <div style={{width: 1440, height: 1024, left: 76, top: 29, position: 'absolute', background: 'white'}}>
    <div style={{width: 440, height: 81, left: 1000, top: 154, position: 'absolute', textAlign: 'center', color: '#186803', 
    fontSize: 64, fontFamily: 'Tenor Sans', fontWeight: '400', wordWrap: 'break-word'}}>Reviews</div>
    <div style={{width: 554, height: 483, left: 118, top: 284, position: 'absolute', background: '#DBFF00', borderRadius: 40}} />
    <div style={{width: 540, height: 469, left: 125, top: 291, position: 'absolute', background: '#FFFBFB', borderRadius: 40}} />
    <img style={{width: 493, height: 483, left: 753, top: 284, position: 'absolute', borderRadius: 9999}} src={reviews} />
    <img style={{width: 86, height: 90, left: 158, top: 348, position: 'absolute', borderRadius:90}} src={reviewers} />
    <div style={{width: 262, height: 43, left: 220, top: 366, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Rounded Mplus 1c Bold', fontWeight: '700', wordWrap: 'break-word'}}>Sadhana Dube</div>
    <div style={{width: 206, height: 28, left: 225, top: 393, position: 'absolute', textAlign: 'center', color: '#898888', fontSize: 20, fontFamily: 'Rounded Mplus 1c', fontWeight: '400', wordWrap: 'break-word'}}>@sadhana03</div>
    <div style={{width: 468, height: 206, left: 158, top: 477, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Rosario', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>“Fettle has played a major role in my life as being a mother, its a hassle for finding new receipes everyday. Fettle helped mewith so many vegetarian receipes and my children love it!”</div>
  </div>
</div>
  )
}

export default Review