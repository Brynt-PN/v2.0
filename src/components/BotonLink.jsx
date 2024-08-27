import '../styleSheets/BotonLink.css';
// ICONS -----------------------------
import { FaShare } from "react-icons/fa";

function BotonLink({ contenBoton }){
    return(
        <div className='box-boton'>
            <a
            className='img-boton'
            target='_blanck'
            href={contenBoton.linkContac}>
                <img 
                src={require(`../img/${contenBoton.logo}`)}
                alt="Logo"/>
            </a>
            <a
            className='text-boton'
            target='_blanck'
            href={contenBoton.linkContac}>
                {contenBoton.tituloLink}
            </a>
            <FaShare
            className='ico-boton' />
        </div>
    );
}

export default BotonLink;