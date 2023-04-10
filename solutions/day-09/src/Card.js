import { useState } from "react";

import Country from "./Country";



import "./Card.css";
const Card = () => {
  const [country, setCountry] = useState(Country.Nepal);
  const handleClick = () => {
    const countryNames = Object.keys(Country);
    const randomCountry =
      countryNames[Math.floor(Math.random() * countryNames.length)];
    setCountry(Country[randomCountry]);
    console.log(country);
  };
  // console.log(country);
  return (
    <div className="main">
      <div>
        <div className="image-div">
          <div className="image">
            <img src={country.Flag} alt="Flag" />
            <h2>{country.Name}</h2>
          </div>
          <div className="details">
            <p>
              <span>Capital : </span> {country.Capital}
            </p>
            <p>
              <span>Population : </span> {country.Population}
            </p>
            <p>
              <span>Currency : </span> {country.Currency}
            </p>
          </div>
        </div>
      </div>
      <button onClick={handleClick}>Change Country</button>
    </div>
  );
};
export default Card;
