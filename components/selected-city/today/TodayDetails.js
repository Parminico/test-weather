import styled from "styled-components";

const Section = styled.section`
    background-color: ${props => props.theme.purple};
    border-radius: ${props => props.theme.s1};
    padding: ${props => props.theme.s1};
`

export default function TodayDetails({temperatureMin, temperatureMax, wind, umidity}) {

    return (
        <>
            <Section>
                <p>The minim temperature is {temperatureMin}°C</p>
                <p>and max temperature is {temperatureMax}°C</p>
                <p>Wind: {wind} m/s</p>
                <p>Umidity: {umidity}%</p>
            </Section>
        </>
    )
}