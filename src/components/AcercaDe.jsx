import '../styles/AcercaDe.css';

function AcercaDe() {
    return (
        <div className="container text-center acerca-de">
            <div className="row titulo-acerca row-acerca">
                <h2 className='div-h2'>Acerca De</h2>
            </div>
            <div className="row text-row txt-acerca row-acerca">
                <div className="col-lg">
                <div className="row">
                    <div className='acerca'>
                    Estudiante de ingeniería en computación en la Facultad de Ingeniería en la Universidad Nacional Autónoma
                    de México. Autodidacta con fuertes habilidades de comunicación y fluidez en español e inglés.
                    Enfocado en una carrera de diseño web, abierto a las diversas posibilidades que ofrece el campo de la programación.
                    </div>
                    <div className="mt-5">
                        <p className='subtitulo'>Formación Académica:</p>
                        <ul>
                            <li>Ingeniería en Computación</li>
                            <li>Universidad Nacional Autónoma
                            de México (UNAM)</li>
                            <li>Facultad de Ingeniería</li>
                            <li>2020-Actualmente</li>
                            <li>Promedio total: 9.3</li>
                            <li>Módulos cursados relacionados:</li>
                            <p>Base de Datos, Sistemas Operativos,
                                Estructura de Datos y Algoritmos,
                                Ingeniería de Software, Administración
                                de Proyectos de Software, Estructura
                                y Programación de Computadoras
                            </p>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <img src="logo6.png" className="rounded img-logo" alt="..."></img>
                </div>
            </div>
        </div>
    );
}

export default AcercaDe;