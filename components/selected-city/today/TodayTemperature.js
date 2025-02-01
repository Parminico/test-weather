import styled from "styled-components";

export default function TodayTemperature({icon, description, temperature}) {

    const Section = styled.section`
        background-color: ${props => props.theme.purple};
        padding: ${props => props.theme.s2};
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (max-width: 996px) {
            flex-direction: row;
            background-color: ${props => props.theme.darkPurple};

        }
    `
    return (
        <Section>
            <img src={icon} alt={description} />
            <h2>{temperature}°C</h2>
        </Section>
    )
}