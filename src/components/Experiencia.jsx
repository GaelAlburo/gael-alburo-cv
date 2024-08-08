import '../styles/Experiencia.css';

function Experiencia() {
    return (
        <div className='div-exp text-center'>
            <h2 className='titulo'>Experiencia </h2>
                <div className="fila row-txt">
                    <div className="columna columna-1">
                        <h3 className='border-h3'> Gestión de Proyectos </h3>
                        <div className="text">
                            <p> Participación en proyectos de gestión de proyectos grandes, centrándome en 
                                la elaboración de una documentación detallada de todo el proceso. </p>
                            <p> Colaboración en equipos para llevar a cabo diversos proyectos, 
                                obteniendo resultados altamente favorables. </p>
                        </div>
                    </div>
                    <div className="columna columna-2">
                        <h3 className='border-h3'> Desarrollo Backend </h3>
                        <div className="text">
                            <p> Desarrollo de una base de datos para un zoológico ficticio, incluyendo su diagrama ER, 
                                diagrama relacional, normalizaciones y codificación en SQLPlus.</p>
                            <p> Desarrollo de un sistema básico de reservas de habitaciones para un hotel utilizando Java. </p>
                        </div>
                    </div>
                </div>
                <div className="fila row-txt">
                    <div className="columna columna-1">
                        <h3 className='border-h3'> Desarrollo Frontend </h3>
                        <div className="text">
                            <p> Creación básica de sitio web similar a "Yelp" para sitios de acampar utilizando JavaScript, HTML, CSS y Bootstrap. </p>
                            <p> Creación de páginas web usando React, Bootstrap, JS, HTML y CSS </p>
                        </div>
                    </div>
                    <div className="columna columna-2">
                        <h3 className='border-h3'> Desarrollo de Software </h3>
                        <div className="text">
                            <p> Elaboración básica de un juego Tetris usando lenguaje ensamblador. </p>
                            <p> Desarrollo de programas que ilustran conceptos de programación en Java y C. </p>
                        </div>
                    </div>
                </div>
                <div className="fila row-txt f-3">
                    <div className="columna columna-1">
                        <h3 className='border-h3'> Sistemas y Redes </h3>
                        <div className="text">
                            <p> Instalación de máquinas virtuales para utilizar distribuciones de Linux como Debian, Fedora y Ubuntu.</p>
                            <p> Desarrollo de una red en un escenario teórico, implementando el modelo OSI. </p>
                        </div>
                    </div>
                    <div className="columna columna-2 columna-hw">
                        <h3 className='border-h3'> Desarrollo de Hardware </h3>
                        <div className="text">
                            <p> Ejecución de un circuito de estados que representa la lógica de una máquina expendedora de dulces en una protoboard. </p>
                            <p> Creación de distintos proyectos usando el microcontrolador PIC16F877A </p>
                        </div>
                    </div>
                </div>
                <div className="fila row-txt f-4">
                    <div className="columna columna-otros">
                        <h3 className='border-h3'> Otros </h3>
                        <div className="text">
                            <p> Experiencia en el uso de herramientas de control de versiones como Git y GitHub. </p>
                            <p> Experiencia en el uso de herramientas de oficina como Microsoft Office y Google Docs. </p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Experiencia;