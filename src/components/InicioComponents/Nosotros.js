import React from 'react';
import image from '../../imagenes/nosotros.jpg';
import { useLocation } from 'react-router-dom';
import { FaHandshake } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Nosotros = () => {
    const location = useLocation();

    return (
        <div className="row">
            {
                location.pathname !== '/' && (
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Nosotros</title>
                        <meta name="description" content="Página de Nosotros" />
                    </Helmet>
                )
            }
            <div className="col-12">
                <h2 className="text-center p-2 mb-2 mb-0 bg-info text-white rounded">Nosotros <FaHandshake /></h2>
            </div>
            <div className="d-flex justify-content-center flex-wrap align-items-center  ml-md-5 ml-2 px-2 px-md-4 mb-4">
                <div className="col-md-6 col-12 text-center pl-2 pl-md-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et adipisci ipsum porro optio, ducimus culpa iste illum, nobis tempora non vitae aut repellat recusandae quae fugit. Quas, sapiente quia.
                </div>
                {/* Debido a un bug debo colocar este container aquí en la página de inicio */}
                {
                    location.pathname === '/' && (
                        <>
                            <div id="formulario"></div>
                        </>
                    )
                }
                <div className="col-md-6 col-12 text-center pt-3 pl-2">
                    <img className="d-none d-md-inline-block" src={image} style={{ height: '300px' }} alt="Nosotros" />
                    <img className="d-md-none d-inline-block" src={image} style={{ height: '200px' }} alt="Nosotros" />
                </div>
            </div>
        </div>
    )
}

export default Nosotros;
