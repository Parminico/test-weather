import styled from 'styled-components';
import forecast from '../../mock/forecast';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import SelectedCityDetails from './SelectedCityDetails';
import WeekContainer from './week/WeekContainer';
import HourContainer from './hour/HourContainer';
import { useGetForecastByCoordsQuery } from '../../features/weatherApi';


const Contenitor = styled.section`
`
const SelectedCityContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function SelectedCity({coords}) {
    let content = <h3>Forecast not found</h3>
    const { data, error, isLoading } = useGetForecastByCoordsQuery(coords);
    
    if(isLoading) {
        content = <p>Loading....</p>
    }
    if(error) {
        content = <p>Error!</p>
    }

    if(data) {
        content = (
            <>
                <SelectedCityDetails
                    city={data.city}
                    currentWeather={data.list[0]}
                />
                <WeekContainer forecast={data.list} timezone={data.city.timezone}/>
                <HourContainer forecast={data.list} timezone={data.city.timezone}/>
            </>
        )
    }
    return (
        <>
            <Contenitor>
                <Link to='/'>
                    <Button>
                        Back
                    </Button>
                </Link>
                <SelectedCityContainer>
                    {content}
                </SelectedCityContainer>
            </Contenitor>
        </>
    )
}