import styled from "styled-components";
import Button from '../ui/Button';
import InputForm from '../ui/InputForm';
import CityListItem from './CityListItem';
import { useState, useEffect } from "react";
import {weatherApi} from '../../features/weatherApi';
import {removedCity} from '../../features/citiesSlice';
import {setTextFilter} from '../../features/filtersSlice';
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: ${props => props.theme.s3};
    gap: ${props => props.theme.s1};
`
const EmptyState = styled.div`
    text-align: center;
`

export default function CityList () {
    let dispatch = useDispatch();
    const [isInputActive, setIsInputActive] = useState(false);
    let filters = useSelector(state => state.filters);
    let cityList = useSelector(state => state.cities);
    let filteredCityList = cityList.filter(city => {
        const textMatch = city.name.toLowerCase().includes(filters.toLowerCase())
        return textMatch
    })

    useEffect(() => {
        localStorage.setItem('cityList', JSON.stringify(cityList))
    }, [cityList])

    function handleAddCity(city) {
        let cityId = nanoid();
        dispatch(weatherApi.endpoints.getCoordinatesByCityName.initiate({
            name: city,
            id: cityId
        }))
    }
    function handleAddPosition() {
        if('geolocation' in navigator) {
            let cityId = nanoid();
            navigator.geolocation.getCurrentPosition(position => {
                dispatch(weatherApi.endpoints.getCityNameByCoordinates.initiate({
                    id: cityId,
                    coords: {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    },
                }))
            })

        } else {
            alert('your browser doesn`t accept localization')
        }
    }
    function handleFilterCity(text) {
        dispatch(setTextFilter(text))
    }
    function handleDeleteCity(id) {
        dispatch(removedCity(id))
    }
    function handleClearInput() {
        dispatch(setTextFilter(''))
    }

    return (
        <>
            <ButtonContainer>
                <Button handleclick={()=> setIsInputActive(!isInputActive)}>
                    Add city
                </Button>
                <Button handleclick={handleAddPosition}>
                    Add position
                </Button>
            </ButtonContainer>
            
            {isInputActive && (
                <InputForm
                    placeholderText={'Insert city name'}
                    buttonText={'Add city'}
                    buttonAction={handleAddCity}
                />
            )}
            
            <InputForm
                placeholderText={'Filter city'}
                buttonText={'Clear Filter'}
                buttonAction={handleClearInput}
                inputValue={filters}
                inputAction={handleFilterCity}
            />
            
                {filteredCityList && filteredCityList.length > 0 ? filteredCityList.map(city => {
                    return <CityListItem
                                city={city}
                                key={city.id}
                                deleteCity={handleDeleteCity}
                            />
                }) : <EmptyState>There isn't city, add a new</EmptyState>} 
        </>
    )
}