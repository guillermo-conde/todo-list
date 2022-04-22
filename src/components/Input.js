import styled from "styled-components";
import { useField } from "formik";
import Button from "./Button";

const Container = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 50%;
    justify-self: center;
`
const Label = styled.label`
    color: #000;
`

const MyInput = styled.input`
    outline: none;
    border-radius: 5px;
    border: solid 2px #B0B6B8;
    padding: 5px 5px;
`
const Input = ( {label, buttonLabel,...props} ) => {
    const [field] = useField(props);
    return(
        <Container>
            <Label>{label}</Label>
            <MyInput {...field} { ...props }></MyInput>
            <Button bg="#029BCE"  type="submit">{buttonLabel}</Button>
        </Container>  
    )
}

export default Input