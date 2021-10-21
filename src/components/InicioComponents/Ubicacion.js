import React from 'react';
import { FaInstagram, FaMapMarkedAlt } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

const Ubicacion = () => {

    const location = useLocation();

    return (
        <div className="row mt-1">
            {
                location.pathname !== '/' && (
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Ubicación</title>
                        <meta name="description" content="Página de Ubicación" />
                    </Helmet>
                )
            }
            <div className="col-12 mt-2">
                <h2 className="text-center p-2 m-0 bg-info text-white rounded">Ubicación <FaMapMarkedAlt /></h2>
            </div>
            <div className="col-12 col-md-6 ml-sm-3 ml-md-0 px-3 pl-md-5">
                <h2 className="pt-5">Centro Clínico Dios da el maná</h2>
                <p><span className="font-weight-bold">Dirección:</span> Av. Paradissi Nº 44 a una casa del Centro Hispano de
                    Villa de Cura - Edo. Aragua</p>
                <p><span className="font-weight-bold">Horarios:</span> Lunes a Sábado 8am - 2pm </p>
                <p><span className="font-weight-bold">Teléfono:</span> (0412) - 0433807 </p>

                <p><span className="font-weight-bold">Siguenos en:</span> <a href="https://www.instagram.com/diosdaelmana/"
                    target="_blank" rel="noreferrer"><FaInstagram /></a></p>
            </div>
            <div className="col-12 col-md-6 pt-3 text-center mx-auto">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.691119470387!2d-67.49068472721154!3d10.042327186531823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e801b9c8f67558b%3A0x427cc277de404970!2s44%20Av%20Paradis%C3%AD%2C%20Villa%20de%20Cura%202126%2C%20Aragua%2C%20Venezuela!5e0!3m2!1sen!2sca!4v1623174447196!5m2!1sen!2sca"
                    width="300" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="map">
                </iframe>
            </div>
        </div>
    )
}

export default Ubicacion;
