import '../styles/Tecnologias.css';

function Tecnologias() {
    return (
        <div className="container text-center mb-5">
            <div className="row titulo-tec">
                <h2 className='div-h2'>Tecnologías</h2>
            </div>
            <div className="row row-txt-list">
                <div className="col d-flex flex-column align-items-center">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Python</li>
                        <li className="list-group-item">JavaScript</li>
                        <li className="list-group-item">HTML y CSS</li>
                        <li className="list-group-item">C</li>
                        <li className="list-group-item">Java</li>
                        <li className="list-group-item last-item">MySQL</li>
                    </ul>
                </div>
                <div className="col d-flex flex-column align-items-center">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">React</li>
                        <li className="list-group-item">Bootstrap</li>
                        <li className="list-group-item">ThreeJS</li>
                        <li className="list-group-item">FastAPI</li>
                        <li className="list-group-item">Paquetería Office/Google</li>
                        <li className="list-group-item">Git/GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Tecnologias;