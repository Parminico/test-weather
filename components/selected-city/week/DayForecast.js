import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme[props.cardcolor]};
`
export default function DayForecast({temperature, cardcolor, day, weathericon, description}) {

    return(
        <>
            
            <Card cardcolor={cardcolor}>
                <h4>{day}</h4>
                <h3>{temperature}°</h3>
                <img src={weathericon} alt={description} />
            </Card>
        </>
    )

}