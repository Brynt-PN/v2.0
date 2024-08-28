import './App.css';
// COMPONENTES ------------
import SecInfo from './components/SecInfo';
import SecBoton from './components/SecBoton';
import data from './data.json';

function App() {

  const contenPage = data;

  return (
    <div className="App">
      <SecInfo 
      contenInfo={contenPage.secInfo}
      />
      {
        contenPage.SecBotonList.map((contenSecBoton) =>
          <SecBoton 
          contenSecBoton={contenSecBoton}
          />
        )
      }
    </div>
  );
}

export default App;
