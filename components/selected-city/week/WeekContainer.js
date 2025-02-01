import styled from "styled-components";
import DayForecast from './DayForecast';
import { format } from "date-fns";
import {weatherBackgroundColor} from '../../../shared/weatherBackgroundIcon';
import { weatherIconUrl } from "../../../shared/baseUrls";
// import { Splide, SplideSlide } from '@splidejs/react-splide';

const Section = styled.section`
    display: flex;
    gap: ${props => props.theme.s1};
`
export default function WeekContainer({forecast, timezone}) {

    let day = format(new Date(), 'EEEE');
    let count;

    let weekForecast = forecast
        .filter(el => {
            let forecastDay = format(new Date((el.dt + timezone)*1000), 'EEEE');
            let newDay = (forecastDay !== day) ? forecastDay : '';
            if(newDay) {
                count = 0;
                day = newDay
            } else {
                count++;
            }
            if(count === 4) {
                return true
            }
            return false
        })
        .map(element => {
            let temp = Math.round(element.main.temp);
            let day = format(new Date(element.dt*1000), 'EEEE') ;
            let cardcolor = weatherBackgroundColor(element.weather[0].icon);
            let weatherIcon = `${weatherIconUrl}${element.weather[0].icon}@2x.png`;

            return (
                <DayForecast 
                    temperature={temp}
                    day={day}
                    cardcolor={cardcolor}
                    weathericon={weatherIcon}
                    description={element.weather[0].description}
                    key={day}
                />
            )
        })

    return (
        <>
            <Section>
                {weekForecast}
            </Section>
            {/* <Splide aria-label='The weather of next day'>
                <SplideSlide>
                    {weekForecast}
                </SplideSlide>
            </Splide> */}
        </>
    )
}