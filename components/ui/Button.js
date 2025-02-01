import styled from "styled-components";

const StyledButton = styled.button`
    border: none;
    &:hover {
        background-color: ${props => props.theme.lightPurple};
        color: white;
    }
`

export default function Button({handleclick, children}) {
    return (
        <StyledButton onClick={handleclick}>{children}</StyledButton>
    )
}