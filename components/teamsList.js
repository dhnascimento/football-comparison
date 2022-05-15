import { useEffect } from "react";
import { useState } from "react";


export default function TeamsList() {

    const [data, setData] = useState();
    const [country, setCountry] = useState('')
    const [flag, setFlag] = useState();

    useEffect(() => {
        fetch('/api/countries-test')
        .then(response => response.json())
        .then(data => setData(arr => setData(data.response)))
        .catch(error => console.log(error));
    },[])

    const addFlagSrc = (countryCode) => {
        var countryObj = data.find(({code}) => code === countryCode)
        setFlag(countryObj?.flag ?? 'https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png')
    }

    if (!data) return <div>Loading...</div>

    const list = data.map((country, index) => {

        return (
        <option key={index} value={country.code}>{country.name}</option>
        )
    })

    return (
        <>
        <select id='countries-list' name='countries' value={country} onChange={event =>{setCountry(event.target.value);addFlagSrc(event.target.value)}}>
            <option>Please select a country</option>
            {list}
        </select>
        <img id='flag' src={flag ?? 'https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png'}></img>
        </>
    )
}