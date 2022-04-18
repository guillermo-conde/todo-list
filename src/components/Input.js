import styled from "styled-components";
import { useField } from "formik";

const Container = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
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
const Button = styled.button`
    color: #fff;
    background: #029BCE;
    border: none;
    border-radius: 5px; 
    padding: 5px 10px;
`
const Input = ( {label, buttonLabel,...props} ) => {
    const [field] = useField(props);
    return(
        <Container>
            <Label>{label}</Label>
            <MyInput {...field} { ...props } ></MyInput>
            <Button>{buttonLabel}</Button>
        </Container>  
    )
}

export default Input