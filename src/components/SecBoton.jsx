import '../styleSheets/SecBoton.css'
// COMPONENTES----------------------
import BotonLink from './BotonLink';


function SecBoton({ contenSecBoton }){

    return(
        <section className="sec-boton">
            <h2>{contenSecBoton.tituloLinks}</h2>
            <div className="links-container">
                {
                    contenSecBoton.Botons.map((dataBoton) => 
                        <BotonLink 
                        contenBoton={dataBoton}
                        />
                    )
                }
            </div>
        </section>
    );
}

export default SecBoton;