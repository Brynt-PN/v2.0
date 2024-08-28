import '../styleSheets/BotonLink.css';
// ICONS -----------------------------
import { FaShare } from "react-icons/fa";

function BotonLink({ contenBoton }){


    const shareUrl = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Brayant Palomino',
                text: 'Contactame, espero tu mensaje',
                url: contenBoton.linkShare
            }).then(() => {
                console.log('Enlace compartido con éxito');
            }).catch((error) => {
                console.error('Error al compartir', error);
            });
        } else {
            alert('La API de Web Share no es compatible con este navegador.');
        }
    }


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
            className='ico-boton'
            onClick={shareUrl} />
        </div>
    );
}

export default BotonLink;