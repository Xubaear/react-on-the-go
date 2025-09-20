import React, { useState } from 'react';
import './Country.css' 

const Country = ({country, handleVisitedCountries}) => {
    const [visited, setVisited]= useState(false)
console.log(handleVisitedCountries)
// console.log(country)
const handelVisited= ()=>{
setVisited(!visited)
handleVisitedCountries(country)
}
    return (
        <div className='country'>
            <img className='hight' src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? '(Big country)' : '(Small country)'}</p>
            <button onClick={handelVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;