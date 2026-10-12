import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
export default function WeatherApp({newinfo}){
    const[weatherinfo,setWeatherInfo]=useState({
        city:"delhi",
        feels_like:36.06,
        temp:35.3,
        humidity:34,
        temp_max:35.3,
        temp_min:35.5,
        sunrise:1790901858,
        sunset:1790944604,
        weather:"clear",
        speed:4.6,
    });
    let updateinfo=(newinfo)=>{
        setWeatherInfo(newinfo)
    }
    return(
        <div>
            <h4>Waether App</h4>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info={weatherinfo}/>
            

        </div>
    )
}