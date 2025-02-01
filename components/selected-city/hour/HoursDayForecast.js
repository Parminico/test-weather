import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.lightPurple};
    /* background: ${props => props.theme[props.cardcolor]}; */
`

export default function HoursDayForecast({temperature, time, cardcolor, weathericon, description}) {

    return (
        <>
            {/* <Card cardcolor={cardcolor}> */}
            <Card>
                <h5>{time.day}</h5>
                <h5>{time.hour}</h5>
                <img src={weathericon} alt={description}/>
                <h5>{temperature}°</h5>
            </Card>
        </>
    )
}