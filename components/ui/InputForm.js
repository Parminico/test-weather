import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: ${props => props.theme.s1};
    gap: ${props => props.theme.s1};
`
const Input = styled.input`
    padding: ${props => props.theme.s1};
`



export default function InputForm ({
    placeholderText,
    buttonText,
    buttonAction,
    inputAction,
    inputValue,
}) {

    const [localInputValue, setLocalInputValue] = useState('')

    function handleInputChange(e) {
        if(inputAction) {
            inputAction(e.target.value)
        } else {
            setLocalInputValue(e.target.value)
        }
    }
    function handleButtonClick() {
        buttonAction((inputAction) ? inputValue : localInputValue)
    }

    return (
        <InputContainer>
            <Input
                placeholder={placeholderText}
                type="text"
                onChange={handleInputChange}
                value={(inputAction) ? inputValue : localInputValue}
            />
            <Button handleclick={handleButtonClick}>
                {buttonText}
            </Button>
        </InputContainer>
    )
}