import styled from "styled-components";
import Button from "./Button"

export const StyledButton = styled(Button)`
    width: 200px;
    height: 250px;
    background-color: ${(props) => props.backgroundColor};

    &:hover{
        & label {
            color: green;
        }
    }
`;

export const ButtonLabel = styled.label`
    font-size: 25px;
    color: white;
`;