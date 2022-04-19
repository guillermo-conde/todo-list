import Header from "./components/Header";
import {Formik, Form} from 'formik'
import Input from "./components/Input";
import Table from "./components/Table";
import Thead from "./components/Thead";
import Th from "./components/Th";
import Td from "./components/Td";
import Button from "./components/Button";
import { useDispatch, useSelector } from 'react-redux';



function App() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state)

  const handleSubmit = ({activity}, onSubmitProps) => {
    if (activity.trim() === "") {
      return
    }
    let Id = Math.random()
    dispatch({type:'addActivity', payload:{id:Id, title: activity.trim(), completed:false}})
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()         
  }


  return (
    <div>
      <Header/>

      <Formik initialValues = {{
          activity: ''
        }}
        onSubmit = {handleSubmit}> 
        <Form>
          <Input label="Nueva actividad" name="activity" type="text" buttonLabel="Registrar"/>
        </Form>
      </Formik>

      <Table>
        <Thead>
          <tr>
            <Th>
              Actividad
            </Th>
            <Th>
              Completo/Incompleto
            </Th>
            <Th/>
            <Th/>
          </tr>
        </Thead>
        <tbody>

          {todos.activities.map(todo => {
            return (
              <tr key={todo.id}>
                <Td>{todo.title}</Td>
                <Td><Button bg="#029BCE" >{todo.completed.toString()}</Button></Td>
                <Td><Button bg="#81C848" onClick={() => dispatch({type:'addActivity'})}>Actualizar</Button></Td>
                <Td><Button bg="#D63333" >Eliminar</Button></Td>
              </tr>
            )
          })}

        </tbody>
      </Table>
    </div>
  );
}

export default App;
