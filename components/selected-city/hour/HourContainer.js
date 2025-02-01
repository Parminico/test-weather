import { format } from "date-fns";
import {weatherBackgroundColor} from '../../../shared/weatherBackgroundIcon';
import { weatherIconUrl } from "../../../shared/baseUrls";
import HoursDayForecast from './HoursDayForecast';
import styled from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';



export default function HourContainer({forecast, timezone}) {
    
        let hoursForecast = forecast.map(element => {
                let temp = Math.round(element.main.temp);
                let day = format(new Date((element.dt + timezone)*1000), 'EE') ;
                let hour = format(new Date((element.dt + timezone)*1000), 'kk:mm') ;
                let weatherIcon = `${weatherIconUrl}${element.weather[0].icon}.png`;
                let cardcolor = weatherBackgroundColor(element.weather[0].icon);

                return (
                    <SwiperSlide>
                        <HoursDayForecast 
                            temperature={temp}
                            time={{day, hour}}
                            cardcolor={cardcolor}
                            weathericon={weatherIcon}
                            description={element.weather[0].description}
                            key={element.dt}
                        />
                    </SwiperSlide>
                )
            })

    return(
        <>
            <Swiper spaceBetween={50} slidesPerView={3}>
                {hoursForecast}
            </Swiper>
        </>
    )
}



// const Section = styled.section`
//     display: flex;
//     flex-wrap: wrap;
//     gap: ${props => props.theme.s1};
//     margin: ${props => props.theme.s1};
//     width: 80%;
// `