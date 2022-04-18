import Header from "./components/Header";
import {Formik, Form} from 'formik'
import Input from "./components/Input";
import Table from "./components/Table";
import Thead from "./components/Thead";
import Th from "./components/Th";
import Td from "./components/Td";
import Button from "./components/Button";
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <Header/>

      <Formik initialValues = {{
          activity: ''
        }}
        onsubmit = {() => {}}> 
        <Form>
          <Input label="Nueva actividad" name="activity" type="text" buttonLabel="Registrar"/>
        </Form>
      </Formik>

      <Table>
        <Thead>
          <tr>
            <Th>
              ID
            </Th>
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
          <tr>
            <Td>1</Td>
            <Td>delectus aut autem</Td>
            <Td><Button bg="#029BCE" >Completo / Incompleto</Button></Td>
            <Td><Button bg="#81C848" onClick={() => dispatch({type:'addActivity'})}>Actualizar</Button></Td>
            <Td><Button bg="#D63333" >Eliminar</Button></Td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
