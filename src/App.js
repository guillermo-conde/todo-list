import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>

      <form>
        <input type="text"></input>
        <button type="submit" >Agregar</button>
      </form>

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
