import React from 'react';
import james from './images/james.jpg';
import medium from './images/medium.png';
import facebook from './images/facebook.png';
import linkedin from './images/linkedin.png';
import christiano from './images/christiano.jpg';
import zidane from './images/zidane.jpg';
import ikercasillas from './images/ikercasillas.jpg';
import  tonikroos from './images/tonikroos.jpg';
import nba from './images/nba.png';
import './css/styles2.css';
import { Navbar } from './Navbar';
export const Team = () =>{
  return (
    <div className='maincontainer'>
    <h1 className='team'> Without bonding and coordination, every project is a failure. Look at who makes KICKSUP great. ;)</h1>
    <div className='teamcontainer'>
     <div className='members'>
       <img className='teamim' src={zidane}/>
       <h2 className='team'>Zidane</h2>
       <p className='team'>leadership and management</p>
       <div className='iconcontainer'>
       <a className='ic1' href={'https://www.linkedin.com/signup'}> <img className='ic' src={linkedin}/></a>
       <a className='ic1' href={'https://medium.com/'}> <img className='ic' src={medium}/></a>
       <a className='ic1' href={'https://www.facebook.com/'}> <img className='ic' src={facebook}/></a>
       </div>
       </div>
       <div className='members'>
       <img className='teamim' src={tonikroos}/>
       <h2 className='team'>Toni Kroos</h2>
       <p className='team'>product developer</p>
       <div className='iconcontainer'>
       <a className='ic1' href={'https://www.linkedin.com/signup'}> <img className='ic' src={linkedin}/></a>
       <a className='ic1' href={'https://medium.com/'}> <img className='ic' src={medium}/></a>

       </div>
       </div>
       <div className='members'>
       <img className='teamim' src={ikercasillas}/>
       <h2 className='team'>Iker Casillas</h2>
       <p className='team'>marketing strategy</p>
       <div className='iconcontainer'>

       <a className='ic1' href={'https://medium.com/'}>  <img className='ic' src={medium}/></a>

       </div>
       </div>
       <div className='members'>
       <img className='teamim' src={james}/>
       <h2 className='team'>James</h2>
       <p className='team'>product design manager</p>
       <div className='iconcontainer'>
       <a className='ic1' href={'https://www.linkedin.com/signup'}> <img className='ic' src={linkedin}/></a>
       <a className='ic1' href={'https://global.nba.com/nba-apps/index.html?showNav=false&showFooter=false&adobe_mc=TS%3D1602716228447%7CMCMID%3D02995697633469209167976945683217902546%7CMCORGID%3D248F210755B762187F000101%40AdobeOrg'}> <img className='ic' src={nba}/></a>
       <a className='ic1' href={'https://medium.com/'}><img className='ic' src={medium}/></a>
    
       </div>
       </div>
       <div className='members'>
       <img className='teamim' src={christiano}/>
       <h2 className='team'>Christiano</h2>
       <p className='team'>financial operations</p>
       <div className='iconcontainer1'>
      <a className='ic1' href={'https://www.linkedin.com/signup'}><img className='ic' src={linkedin} /></a>
      <a className='ic1' href={'https://www.facebook.com/'}><img className='ic' src={facebook}/></a>
      <a className='ic1' href={'https://medium.com/'}><img className='ic' src={medium}/></a>
      </div>
      
       </div>
       
    </div>
    <h1 className='team'> and You ;)</h1>
    </div>
 
  );
}
