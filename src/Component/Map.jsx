import React, { useState } from "react"
import Data from "./Data/Data"
import Rent from "./Rent"
import Input from './Input'
import '../app.css'

const Map = () => {

    const [location, setLocation] = useState('pune');
    const [date, setDate] = useState();
    const [propertytype, setPropertyType] = useState('houses');
    const [price, setPrice] = useState('');
    const [filterData, setFilterData] = useState(Data);
    // const [search, setSearch] = useState('furnished');
     console.log(filterData)
    const priceHandler = (e) => {
        setPrice(e.target.value)
    
    }
    const dateHandler = (e) => {
        const value = e.target.value;
        setDate(new Date(value));
    }
    const locationHandler = (e) => {
        setLocation(e.target.value);
    }

    const propertyHandler = (e) => {
        setPropertyType(e.target.value);
    }

    const searchbuttonHandler = () => {
        
        const priceFrom = price.split('-')[0];
        const priceTo = price.split('-')[1];
        const filterData = Data.filter((el) => {
            return (
                el.price >= priceFrom &&
                el.price <= priceTo &&
                el.location === location.toLowerCase() &&
                el.propertyType === propertytype &&
                el.availablefrom < date
               
            );
       
        });        
         setFilterData(filterData);
       
        console.log(filterData,'hi i am filter')
    }
    return (
        <>
            <div className="App">
                <div className="upper">
                    <div className="ddlPriceRange">
                        <label className="price">Price</label> <br />
                        <select name="price" id="pric" onChange={priceHandler} >
                        
                            <option value=''>Select Price</option>
                            <option value='5000-10000'>5000-10000</option>
                            <option value='10000-15000'>10000-15000</option>
                            <option value='15000-20000'>15000-20000</option>
                            <option value='20000-25000'>20000-25000</option>
                            <option value='25000-30000'>25000-30000</option>
                        </select>
                        
                    </div>
                    <div className="date">
                        <label>When</label><br />
                        <p className="para"><span id="select">select move - date</span><Input type='date' id="d" inputChangeHandler={dateHandler} defaultValue={date} />  </p>

                    </div>
                    <div className="location">
                        <label htmlFor="Location">Location</label><br />
                        <select onChange={locationHandler} defaultValue={'pune'} id='cars' name="cars">
                            <option value='pune'>Pune</option>
                            <option value='mumbai'>Mumbai</option>
                            <option value='delhi'>delhi</option>
                            <option value='lucknow'>lucknow</option>
                            <option value='maharastra'>maharastra</option>
                        </select>

                    </div>
                    <div>
                        <label>Property Type</label> <br />

                        <select onChange={propertyHandler} id='house'>
                            <option value='houses'>Houses</option>
                            <option value='Flat'>Flat</option>
                            <option value='Rental'>Rental</option>
                            <option value='resedential'>resedential</option>
                            <option value='hotals'>hotals</option>
                        </select>

                    </div>
                    <div>
                        <button className="btn1" onClick={searchbuttonHandler} >Search</button>
                    </div>
                </div>

                <div>{filterData && <Rent propsData={filterData} />}</div>
                <div>{filterData.length === 0 && <span>no data found</span>} </div>

            </div>
        </>
    )
}

export default Map;