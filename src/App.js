import './App.css';
// COMPONENTES ------------
import SecInfo from './components/SecInfo';
import SecBoton from './components/SecBoton';

function App() {

  const contenSecBoton = {
    tituloLinks : 'Brayant Lo logro',
    Botons : [
        {logo : 'WhatsApp.jpg',linkContac : 'https://wa.me/qr/TZW2LGG75QZ3J1',tituloLink : 'Escribeme ;)'},
        {logo : 'WhatsApp.jpg',linkContac : 'https://wa.me/qr/TZW2LGG75QZ3J1',tituloLink : 'Escribeme ;)'},
        {logo : 'WhatsApp.jpg',linkContac : 'https://wa.me/qr/TZW2LGG75QZ3J1',tituloLink : 'Escribeme ;)'},
        {logo : 'WhatsApp.jpg',linkContac : 'https://wa.me/qr/TZW2LGG75QZ3J1',tituloLink : 'Escribeme ;)'},
    ]
  }

  return (
    <div className="App">
      <SecInfo 
      perfil='perfil.jpg'
      usuario='@brayantpalomino'
      descripcion='Desarrollando soluciones'
      />
      <SecBoton 
      contenSecBoton={contenSecBoton}
      />
    </div>
  );
}

export default App;
