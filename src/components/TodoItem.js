import Button from "./Button"
import Td from "./Td"
import { useDispatch } from "react-redux"
import styled from "styled-components"

const Tr = styled.tr`
    background: ${props => props.completed ? '#78FD89': '#fff'};
`
const TodoItem = ({todo}) => {
    const dispatch = useDispatch();
    return (
        <Tr completed={todo.completed} >
            <Td alignText="left" completed={todo.completed}>{todo.title}</Td>
            <Td>{todo.completed ? 'Completado' : 'Pendiente'}</Td>
            <Td>
                <Button bg="#029BCE" 
                    onClick={() => dispatch({type:'updateStatusActivity', payload: todo })}
                    >{todo.completed ? 'Pendiente' : 'Completado'}
                </Button>
            </Td>
            <Td><Button bg="#D63333" 
             onClick={() => dispatch({type:'deleteActivity', payload: todo })}>
                Eliminar
            </Button></Td>
        </Tr>
    )
}
export default TodoItem