import styled from "styled-components";
import { Link } from "react-router-dom";
import weather from "../../mock/weather";
import {weatherBackgroundColor} from '../../shared/weatherBackgroundIcon';
import { format } from "date-fns";
import {useGetWeatherByCoordsQuery} from '../../features/weatherApi'

const Container = styled.section`
    display: flex;
    justify-content: center;
    margin: ${props => props.theme.s1};
    padding: ${props => props.theme.s2};
    position: relative;
    width: 40%;
`
const Button = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: ${props => props.theme.red};
    &:hover {
        background-color: ${props => props.theme.darkRed};
    }
    color: white;
    border: none;
`
const Article = styled.article`
    background: ${(props) => props.theme[props.cardcolor]};
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: ${props => props.theme.s4};
    width: 100%;
`
const Details = styled.div`
    
`
const Weather = styled.div`
    
`
const Temperature = styled.div`

`
export default function CityListItem({city, deleteCity}) {
    let {data, error, isLoading} = useGetWeatherByCoordsQuery(city.coords);

    let content = <h3>Weather not found!</h3>
    if(error) {
        content = <h3>ERROR!</h3>
    }
    if(isLoading) {
        content = <h3>Loading....</h3>
    }
    if(data) {
        let cardcolor = weatherBackgroundColor(data.weather[0].icon);
        content = (
            <Container>
                <Button onClick={()=>deleteCity(city.id)}>X</Button>
                <Link to={`/city?lat=${city.coords.lat}&lon=${city.coords.lon}`}>
                    <Article cardcolor={cardcolor}>
                        <Details>
                            <h2>{data.name}</h2>
                            <p>{format(new Date((data.dt + data.timezone) * 1000), 'EEEE')}</p>
                            <p>{format(new Date((data.dt + data.timezone) * 1000), 'd MMMM')}</p>
                            <p>{format(new Date((data.dt + data.timezone) * 1000), 'p')}</p>
                        </Details>
                        <Weather>
                            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='icon'/>
                        </Weather>
                        <Temperature className="big-text">
                            <h1>{Math.round(data.main.temp)}°C</h1>
                        </Temperature>
                    </Article>
                </Link>
            </Container>

        )
    }

    return (
        <>
            {content}
        </>
    )
}