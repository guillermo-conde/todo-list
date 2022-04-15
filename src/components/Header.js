import style from 'styled-components'

const Container = style.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Header = () => {
    return(
        <Container>
            <h1>Lista de tareas</h1>
            <p>Esta lista obtiene un listado de tareas de la API de Jasonplaceholder</p>
        </Container>
    )
}

export default Header