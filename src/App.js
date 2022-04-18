import Header from "./components/Header";
import {Formik, Form} from 'formik'
import Input from "./components/Input";
import Table from "./components/Table";
import Thead from "./components/Thead";
import Th from "./components/Th";
import Td from "./components/Td";
import Button from "./components/Button";

function App() {
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
            <Td><Button>Completo / Incompleto</Button></Td>
            <Td><Button>Actualizar</Button></Td>
            <Td><Button>Eliminar</Button></Td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
