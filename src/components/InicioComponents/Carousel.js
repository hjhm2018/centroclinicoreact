import React from 'react';
import especialidades from '../../data/especialidades';
import Carousel from 'react-bootstrap/Carousel';

const Galeria = () => {
    return (
        <div className="col-lg-10 mx-auto">
            <Carousel>
                {especialidades && especialidades.map((especialidad, index) => (

                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            height={500}
                            src={especialidad.imagen}
                            alt={`foto-${especialidad.especialidad}`}
                        />
                        <Carousel.Caption className="rounded text-dark p-2" style={{ background: `rgba(255, 255, 255, 0.5)` }}>
                            <h3>{especialidad.especialidad}</h3>
                            <p>{especialidad.servicios}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))}
            </Carousel>
        </div>
    )
}

export default Galeria;
