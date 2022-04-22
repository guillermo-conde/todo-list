import styled, { keyframes }from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const girar = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`
const MyLoader = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-left-color: orange;
    animation: ${girar} 1s linear infinite;
`

const Loader = ({children}) => {
    return (
        <Container>
            <MyLoader/>
        </Container>
    )
}

export default Loader