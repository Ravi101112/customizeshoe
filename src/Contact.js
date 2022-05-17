import React from 'react';
import './css/styles3.css';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import insta from './images/insta1.svg';
export const Contact = () =>{
  return (
    <>
 
  
      <div className='head'>
      <h2 className='contact'>REACH US AT</h2>
        <h1 className='contact'>support@kicksup.com</h1>
        <p className='contact'>for any technical support</p>
        <h1 className='contact'>info@kicksup.com</h1>
        <p className='contact'>for more information</p>
        <h1 className='contact'>feedback@kicksup.com</h1>
        <p className='contact'>to send your feedback</p>
        <h1 className='contact'>jobs@kicksup.com</h1>
        <p className='contact'>to work with us</p>
       </div>

       <p className='contact1'>stay in touch</p>
   
       <div className='iconcontainer2'>
     
       <a className='ic1' href={'https://www.instagram.com/?hl=en'}><img className='ic' src={insta}/></a>
       <a className='ic1' href={'https://twitter.com/i/flow/login'}><img className='ic' src={twitter}/></a>
       <a className='ic1' href={'https://www.facebook.com/'}><img className='ic' src={facebook}/></a>
       </div>
      
   
    </>
  );
  }