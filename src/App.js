import Header from "./components/Header";
import {Formik, Form} from 'formik'
import Input from "./components/Input";

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

      <table>
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Actividad
            </th>
            <th>
              Completo/Incompleto
            </th>
            <th>
              
            </th>
            <th>
              
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>delectus aut autem</td>
            <td><button>Completo / Incompleto</button></td>
            <td><button>Actualizar</button></td>
            <td><button>Eliminar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
