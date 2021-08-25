import React from 'react';
import image from '../../imagenes/nosotros.jpg';

const Nosotros = () => {
    return (
        <div id="nosotros" className="d-flex justify-content-center flex-wrap align-items-center m-1 m-md-2 ml-md-5 ml-2 p-2 p-md-4">
            <div className="col-12">
                <h2 className="text-center">Nosotros</h2>
            </div>
            <div className="col-md-6 col-12 text-center pl-2 pl-md-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et adipisci ipsum porro optio, ducimus culpa iste illum, nobis tempora non vitae aut repellat recusandae quae fugit. Quas, sapiente quia.
            </div>
            <div className="col-md-6 col-12 text-center pt-3 pl-2">
                <img className="d-none d-md-inline-block" src={image} style={{ height: '300px' }} alt="Nosotros" />
                <img className="d-md-none d-inline-block" src={image} style={{ height: '200px' }} alt="Nosotros" />
            </div>
        </div>
    )
}

export default Nosotros;
