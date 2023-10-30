import React from 'react';
import './ContactUs.css';
import mumbaii from '../components/images/mumbaii.jpg';

function ContactUs() {
  return (
    <div style={{ width: '1440px', height: '1024px', position: 'relative', background: 'white' }}>
      <div style={{ width: '440px', height: '81px', left: '950px', top: '126px', position: 'absolute', textAlign: 'center', color: '#186803', fontSize: '64px', fontFamily: 'Tenor Sans', fontWeight: 400, wordWrap: 'break-word' }}>Contact Us</div>

      <img style={{ width: '850px', height: '458px', left: '582px', top: '293px', position: 'absolute' }} src={mumbaii} />


      <div style={{ width: '602px', height: '640px', left: '60px', top: '237px', position: 'absolute' }}>
        <span style={{ color: '#6DC300', fontSize: '32px', fontFamily: 'Noto Sans', fontWeight: 600, wordWrap: 'break-word' }}>Address:<br /></span>
        <span style={{ color: '#6DC300', fontSize: '32px', fontFamily: 'Noto Sans', fontWeight: 300, wordWrap: 'break-word' }}>Mira Road East, Mumbai, Maharashtra<br /><br /></span>
        <span style={{ color: '#6DC300', fontSize: '32px', fontFamily: 'Noto Sans', fontWeight: 600, wordWrap: 'break-word' }}>Work schedules:<br /></span>
        <span style={{ color: '#6DC300', fontSize: '32px', fontFamily: 'Noto Sans', fontWeight: 300, wordWrap: 'break-word' }}>Mon-Fri: 9:00 a.m. to 4:00 p.m.<br />Sat-Sun: Closed<br /><br /></span>
        <span style={{ color: '#6DC300', fontSize: '32px', fontFamily: 'Noto Sans', fontWeight: 600, wordWrap: 'break-word' }}>Contacts: <br /></span>
        <span style={{ color: '#6DC300', fontSize: '32px', fontFamily: 'Noto Sans', fontWeight: 300, wordWrap: 'break-word' }}>+91 98675 2415<br />+91 93211 29788<br />+91 90044 78090</span>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p>____________________________________________________________________________________________________________________________________________________________________________________</p></div>
    </div>
  );
}

export default ContactUs;
