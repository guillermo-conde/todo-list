import styled from "styled-components";
import Th from "./Th";

const Td = styled(Th)`
    border: none;
    color: #000;
    font-weight: 400;
    text-align: ${props => props.alignText || 'center'};
    text-decoration: ${props => props.completed ? 'line-through': 'none'};
`
export default Td