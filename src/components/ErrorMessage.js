import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const ErrorMessage = ({children}) => {
    return (
        <Container>
            <p>Error al obtener las tareas. Intente nuevamente por favor. 
                <br/>Si lo desea puede agregar tareas nuevas a pesar del error</p>
        </Container>
    )
} 

export default ErrorMessage