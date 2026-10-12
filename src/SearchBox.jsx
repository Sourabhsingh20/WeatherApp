import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { use, useState } from 'react';
export default function SearchBox({updateinfo}){
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="7beae2b012dcf5cc699aa83a0c5260ff";
    let[city,setCity]=useState("");
    let[error,setError]=useState(false)
    let styles={
        backgroundColor:"white",
        border:"black",
        borderRadius:"20px"
    }

    let weatherInfo= async ()=>{
        try{
       let responce= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let weatherData= await responce.json();
       console.log(weatherData);

       let result={
        city:city,
        feels_like:weatherData.main.feels_like,
        temp:weatherData.main.temp,
        humidity:weatherData.main.humidity,
        temp_max:weatherData.main.temp_max,
        temp_min:weatherData.main.temp_min,
        sunrise:weatherData.sys.sunrise,
        sunset:weatherData.sys.sunset,
        weather:weatherData.weather[0].main,
        speed:weatherData.wind.speed,
       }
       console.log(result);
       return result;
       }catch(err){
          throw err
       }
    };


    let handleOnInpBox=((event)=>{
        setCity(event.target.value);
    });

    let onSubmit= async (event)=>{
        try{
       event.preventDefault();
        console.log("form submited",city)
        setCity("");
        let newinfo=await weatherInfo();
        updateinfo(newinfo);
        }
        catch{
            setError (true);
        }
    };
    

    return(
        <div>
           <h3>Search for Weather</h3>
           <form onSubmit={onSubmit}>
              <TextField 
                 style={styles} 
                 id="city"
                 label="City Name"
                 variant="outlined"
                 required
                 value={city}
                 onChange={handleOnInpBox}
                  />
              <br></br>
              <br></br>
              &nbsp;
              <Button  type="submit" variant="contained" startIcon={<SearchIcon />}> Search</Button>
          {error && <p style={{color:"red"}}>Not Such location found in database!</p>}
           </form>
        </div>
    )
}