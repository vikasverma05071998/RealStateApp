import React from "react";
import '../app.css'   

const Rent = ({propsData}) => {
 
 const bookbutton = () =>{
     
 } 
  return(
    <>
         <div className="box-container">
           {propsData && propsData.map((d, i) => {
            return( 
            <div key={i} className='map'>
              <img src={d.image}  className="image"/>
              
             <p id="location">{d.location}<br/></p>
              <p id="price">₹{d.price}/month</p><br/>
              {/* <p>{d.description}<br/></p> */}
             <p id="propertytype">{d.propertyType}<br/></p>
              <p id="address">{d.address}</p>
              <button onClick={bookbutton} id="bookbtn">Add To Favorite</button>
            </div>
           )
          })}
        
        </div> 
    </>
  );
}

export default Rent;
