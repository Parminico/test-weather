import { format } from "date-fns";
import styled from "styled-components";
import TodayTemperature from './today/TodayTemperature';
import {weatherIconUrl} from '../../shared/baseUrls';
import TodayDetails from './today/TodayDetails';

const Section = styled.section`
    display: flex;
    flex-direction: row-reverse;
    margin: ${props => props.theme.s2};
    @media (max-width: 996px) {
        flex-direction: column;
        }
`
const Article = styled.article`
    background-color: ${props => props.theme.lightPurple};
    padding: ${props => props.theme.s2};

`

export default function SelectedCityDetails({currentWeather, city}) {
    let weatherIcon = `${weatherIconUrl}${currentWeather.weather[0].icon}@4x.png`


    return (
        <>
            <Section>
                <Article>
                    <h1 className="big-text">{city.name}</h1>
                    <h2>{format(new Date().getTime()+(city.timezone * 1000), 'EEEE d, MMMM | hh:mm a')}</h2>
                    <h3>{currentWeather.weather[0].main}</h3>
                    <TodayDetails 
                        temperatureMax={currentWeather.main.temp_max}
                        temperatureMin={currentWeather.main.temp_min}
                        wind={currentWeather.main.pressure}
                        umidity={currentWeather.main.humidity}
                    />
                </Article>
                <TodayTemperature 
                    icon={weatherIcon}
                    description={currentWeather.weather[0].description}
                    temperature={currentWeather.main.temp}
                />

            </Section>
        </>
    )
}