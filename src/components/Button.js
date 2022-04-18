import styled from "styled-components";

const Button = styled.button`
    color: #fff;
    border: none;
    border-radius: 5px; 
    padding: 5px 10px;
    background: ${props => props.bg || "#029BCE"}
`

export default Button