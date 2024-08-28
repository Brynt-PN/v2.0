import './App.css';
// COMPONENTES ------------
import SecInfo from './components/SecInfo';
import SecBoton from './components/SecBoton';
import BotonShare from './components/BotonShare';
// DATOS ------------------
import data from './data.json';

function App() {

  const contenPage = data;

  return (
    <div className="App">
      <BotonShare />
      <div className='box-general'>
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
    </div>
  );
}

export default App;
