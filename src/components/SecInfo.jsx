import '../styleSheets/SecInfo.css';


function SecInfo({ perfil, usuario, descripcion }){
    return(
        <section className="sec-info">
            <div className="perfil-container">
                <img
                src={require(`../img/${perfil}`)}
                alt="foto perfil" />
            </div>
            <div className="text-container">
                <h1>{usuario}</h1>
                <p>{descripcion}</p>
            </div>
        </section>
    );
}

export default SecInfo;