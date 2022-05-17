import React from 'react';
import shoe from '../images/shoe.png';
import shoe2 from '../images/shoe2.png';
import shoe3 from '../images/shoe3.jpg';
import shoe4 from '../images/shoe4.png';
import shoe5 from '../images/shoe5.png';
import shoe6 from '../images/shoe6.png';
import shoe7  from '../images/shoe7.jpg';
import shoe8 from '../images/shoe8.png';
import { useState } from "react";
import button1 from '../images/button1.png';
import button2 from '../images/button2.png';

const Product =  (props) => {
   const shoes={shoe,shoe2,shoe3,shoe4,shoe5,shoe6,shoe7,shoe8};
    const[selected,setSelected]=useState(shoes.shoe);
   
 
    const { product, onAdd } = props;

    const [checkedOne, setCheckedOne] = React.useState(true);
  
    const [checkedThree, setCheckedThree] = React.useState(false);
    const [checkedfour, setCheckedfour] = React.useState(true);
    
    const [checkedsix, setCheckedsix] = React.useState(false);
    const [checkedseven, setCheckedseven] = React.useState(true);
    
    const [checkednine, setCheckednine] = React.useState(false);
    const [checkedten, setCheckedten] = React.useState(false);
    const [checkedeleven, setCheckedeleven] = React.useState(false);
    const [checkedtwelve, setCheckedtwelve] = React.useState(false);
    const setImage=()=>{
      if(checkedOne===true && checkedfour===true && checkedseven===true){
        setSelected(shoes.shoe);
      }
      else if(checkedOne===true && checkedsix===true && checkedseven===true){
        setSelected(shoes.shoe2);
      }
      
      else if(checkedOne===true && checkedsix===true && checkednine===true){
        setSelected(shoes.shoe3);
      }
      else if(checkedOne===true && checkedfour===true && checkednine===true){
        setSelected(shoes.shoe4);
      }
      else if(checkedThree===true && checkedfour===true && checkedseven===true){
        setSelected(shoes.shoe5);
      }
      else if(checkedThree===true && checkedsix===true && checkedseven===true){
        setSelected(shoes.shoe6);
      }
      else if(checkedThree===true && checkedsix===true && checkednine===true){
        setSelected(shoes.shoe7);
      }
      else if(checkedThree===true && checkedfour===true && checkednine===true){
        setSelected(shoes.shoe8);
      }
    

    }
    const handleChangeOne = () => {
      setImage();
      setCheckedOne(true);
      setCheckedThree(false);
      
   
    };

    const handleChangeThree = () => {
      setImage();
        setCheckedOne(false);

      setCheckedThree(true);
     
    };
    const handleChangefour = () => {
      setImage();
      setCheckedfour(true);
   
      setCheckedsix(false);
   
    };
  
  
    const handleChangesix = () => {
      setImage();
      setCheckedfour(false);
      setCheckedsix(true);
      
     
     
    };
    const handleChangeseven = () => {
      setImage();
      setCheckedseven(true);
  
      setCheckednine(false);
    
    };
  
    const handleChangenine = () => {
      setImage();
      setCheckedseven(false);
      setCheckednine(true);
      
     
    };
    const handleChangeten = () => {
     
      setCheckedten(true);
      setCheckedeleven(false);
      setCheckedtwelve(false);
      
     
    };
    const handleChangeeleven = () => {
      setCheckedeleven(true);
      setCheckedten(false);
      setCheckedtwelve(false);
      
     
    };
    const handleChangetwelve = () => {
      setCheckedeleven(false);
      setCheckedten(false);
      setCheckedtwelve(true);
   
     
    };
    
  
    return (
      <div  className='contained'>
       <div className='customize'>
       <img  className='small' src={selected} alt='shoes'   />
       <div className='options1'>
       <img  className='vsmall' src={selected} alt='shoes' /> 
       <img  className='vsmall' src={selected} alt='shoes' />
       <img  className='vsmall' src={selected} alt='shoes' />
       </div>
       <div className='options'>
       <h2>{product.name}</h2>
       <h4 className='store'>by kickup</h4>
       <h4 className='store'> 80 reviews</h4>
       <h3 className='store'>Rs 2000</h3>
       <h5 className='store'> get an exclusive offer of 20%</h5>
      <div className='options'>
      <div className="customize">
        <div className='bcont'>
        <div> HEAD</div>
      <input type="checkbox"
          
            id="myCheckbox1"
          checked={checkedOne}
          
          onChange={handleChangeOne}
        />
         <label for="myCheckbox1"><img src className='final1' src={button1} /></label>
        <input type="checkbox"
        
          id="myCheckbox3"
          checked={checkedThree}
          
          onChange={handleChangeThree}
        />
        <label for="myCheckbox3"><img src className='final1' src={button2} /></label>
      </div>
      </div>
      <div className="customize">
      <div className='bcont'>
      <div>MIDD</div>

        <input type="checkbox"
             id="myCheckbox4"
          checked={checkedfour}
          onChange={handleChangefour}
        />
         <label for="myCheckbox4"><img src className='final1' src={button1} /></label>
        <input type="checkbox"
           id="myCheckbox6"
          checked={checkedsix}
          onChange={handleChangesix}
        />
         <label for="myCheckbox6"><img src className='final1' src={button2} /></label>
      </div>
      </div>
      <div className="customize">
      <div className='bcont'>
      <div>BACK</div>
        <input type="checkbox"
             id="myCheckbox7"
          checked={checkedseven}
          onChange={handleChangeseven}
        />
         <label for="myCheckbox7"><img src className='final1' src={button1} /></label>
        <input type="checkbox"
           id="myCheckbox9"
          checked={checkednine}
          onChange={handleChangenine}
        />
         <label for="myCheckbox9"><img src className='final1' src={button2} /></label>
      </div>
      </div>
      <div className="customize">
  
    
      <div >SIZE</div>
      <input type="checkbox"
           id="myCheckbox10"
          checked={checkedten}
          onChange={handleChangeten}
        />
         <label for="myCheckbox10">10</label>
        <input type="checkbox"
           id="myCheckbox11"
          checked={checkedeleven}
          onChange={handleChangeeleven}
        />
         <label for="myCheckbox11">11</label>
         <input type="checkbox"
           id="myCheckbox12"
          checked={checkedtwelve}
          onChange={handleChangetwelve}
        />
         <label for="myCheckbox12">12</label>
         
         </div>
      </div>
      </div>
      
   
    
   </div>
   <div className='cart'>
     <button onClick={() => onAdd(product)}>Add To Cart</button>
     <button onClick={() => alert('design is added to your shared folder!')}>Share</button>
   </div>
   

 </div>

    );
  };
  

  export default Product;