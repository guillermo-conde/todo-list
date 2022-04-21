import Button from "./Button"
import Td from "./Td"

const TodoItem = ({todo}) => {
    return (
        <tr>
            <Td>{todo.title}</Td>
            <Td>{todo.complete ? 'Completado' : 'Pendiente'}</Td>
            <Td><Button bg="#029BCE" >{todo.copmplete ? 'Pendiente' : 'Completado'}</Button></Td>
            <Td><Button bg="#81C848" >Actualizar</Button></Td>
            <Td><Button bg="#D63333" >Eliminar</Button></Td>
        </tr>
    )
}
export default TodoItem