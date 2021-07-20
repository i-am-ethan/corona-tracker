import {useState} from "react";
import countriesJson from "../countries.json"


const Selector = () => {
    const [country, setCountry] = useState("");
    const getCountryData = () => {
        fetch(`http://api.covid19api.com/country/${country}`)
        .then(res => res.json())
        .then(data =>console.log(data))
    }
    return(
        <>
        <p>セレクター</p>
        <select onChange={(e)=> setCountry(e.target.value)} name="" id="">
            <option value="">Select A Country</option>
            {countriesJson.map((country, index) =>
            <option key={index} value={country.Slug}>{country.Country}</option>
            )}
        </select>
        <button onClick={getCountryData}>Get Data</button>
        </>
    )
}
export default Selector;