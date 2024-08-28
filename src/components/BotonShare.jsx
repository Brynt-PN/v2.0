import '../styleSheets/BotonShare.css';
// ICONS ------------------------------
import { CgMenuRound } from "react-icons/cg";

function BotonShare (){

    const shareUrl = () => {
        // OBTENEMOS LA URL DE LA PAGINA
        var urlShare = window.location.href;

        if (navigator.share) {
            navigator.share({
                title: 'Brayant Palomino',
                text: 'Contactame, espero tu mensaje',
                url: urlShare
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
        <div className='share-box'>
            <CgMenuRound 
            className='share-icon'
            onClick={shareUrl}
            />
        </div>
    );
}

export default BotonShare;