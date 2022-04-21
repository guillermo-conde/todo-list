import Header from "./components/Header";
import {Formik, Form} from 'formik'
import Input from "./components/Input";
import Table from "./components/Table";
import Thead from "./components/Thead";
import Th from "./components/Th";
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from "./components/TodoItem";
import { useEffect } from "react";
import { fetchThunk } from "./features/fetchThunk";



function App() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchThunk())
  }, [dispatch])

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
              Estatus
            </Th>
            <Th>
              Actualizar a:
            </Th>
            <Th/>
            <Th/>
          </tr>
        </Thead>
        <tbody>

          {todos.activities.map(todo => <TodoItem key={todo.id} todo={todo}></TodoItem>)}

        </tbody>
      </Table>
    </div>
  );
}

export default App;
