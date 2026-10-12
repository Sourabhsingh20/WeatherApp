import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FlareTwoToneIcon from '@mui/icons-material/FlareTwoTone';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
export default function InfoBox({info}){
    
    let styles={
        textAlign:"center",
        display:"flex",
        justifyContent:"center",
    }
    const RAIN_URL="https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.jpg?s=2048x2048&w=is&k=20&c=ayW8lRlZMaeQloY80kSiRvCwsEjv0cyELwzDW5hqfaY=";
    const COLD_URL="https://media.istockphoto.com/id/1289449088/photo/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-everything-after-ice.jpg?s=2048x2048&w=is&k=20&c=x1Zrk6290YKvVN5Yt_IrRncXltrCTYlMgmJH-2HwXTc=";
    const HOT_URL="https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.jpg?s=2048x2048&w=is&k=20&c=tawo8Vwz_NWaMkKsEY2ICVdhU82EOZZQpggPeotYABQ=";
    
    return(
        <div style={styles} >
            <div  >
             <h4>Weather Information!</h4>
                 <Card  sx={{ maxWidth: 345 }}>
                 <CardMedia
                      sx={{ height: 140 }}
                      image={info.humidity>79 ?RAIN_URL:
                        info.temp>15 ? HOT_URL :
                        COLD_URL}
                       title="green iguana"
                  />
                 <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      {info.city }
                      {info.humidity>79 ?<AcUnitTwoToneIcon/>:
                        info.temp>15 ? <FlareTwoToneIcon/>:
                        <ThunderstormTwoToneIcon/>}
                 </Typography>
                  <Typography component={"span"} variant="body2" sx={{ color: 'text.secondary' }}>
                     <div>Temp={info.temp}&deg;C</div>
                     <div>Max-Temp={info.temp_max}&deg;C</div>
                     <div>MIn-Temp={info.temp_min}&deg;C</div>
                     <div>Sunrise={new Date(info.sunrise*1000).toLocaleDateString([],{hour:"2-digit",minuts:"2-digit"})}</div>
                      <div>Sunset={new Date(info.sunset*1000).toLocaleDateString([],{hour:"2-digit",minuts:"2-digit"})}</div>
                      <div>Weather is={info.weather}</div>
                        <div>Wind-Speed={info.speed}mph</div>
                      <div>Humidity={info.humidity} %</div>
                      <div>Feels-Like={info.feels_like}&deg;C</div>
                   </Typography>
                   </CardContent>
              </Card>
         </div>
        </div>
    )
}