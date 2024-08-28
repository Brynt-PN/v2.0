import '../styleSheets/SecInfo.css';


function SecInfo({ contenInfo }){
    return(
        <section className="sec-info">
            <div className="perfil-container">
                <img
                src={require(`../img/${contenInfo.perfil}`)}
                alt="foto perfil" />
            </div>
            <div className="text-container">
                <h1>{contenInfo.usuario}</h1>
                <p>{contenInfo.descripcion}</p>
            </div>
        </section>
    );
}

export default SecInfo;