import React from 'react';
import { FaInstagram } from "react-icons/fa";
import imagen from '../imagenes/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {

    const location = useLocation();

    return (
        <div className="row mt-4">
            <footer className="d-flex flex-wrap bg-info text-white col-12 p-5">
                <div className=" d-flex flex-wrap justify-content-around col-12 col-md-6 pt-2">
                    <div className="col-12 col-md-8 col-lg-6">
                        <Link className="navbar-brand" to='/'>
                            <img src={imagen} width="200" height="auto" className="d-inline-block align-top"
                                alt="logo" />
                        </Link>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 pl-md-5 pl-0">

                        <Nav.Link as={Link} to='/' className="d-block text-white font-weight-bold pb-3" >Inicio</Nav.Link>
                        {location.pathname === '/' && (
                            <>
                                <AnchorLink href="#nosotros" className="d-block text-white font-weight-bold px-3 pb-3">Nosotros</AnchorLink>
                            </>
                        )}
                        {location.pathname !== '/' && (
                            <>
                                <Nav.Link eventKey={2} as={Link} to='/nosotros' className="d-block text-white font-weight-bold pb-3">Nosotros</Nav.Link>
                            </>
                        )}
                        <Nav.Link as={Link} to='/especialidades' className="d-block text-white font-weight-bold pb-3"
                        >Especialidades</Nav.Link>
                        <Nav.Link as={Link} to='/especialistas' className="d-block text-white font-weight-bold pb-3"
                        >Especialistas</Nav.Link>
                        {location.pathname === '/' && (
                            <>
                                <AnchorLink href="#formulario" className="d-block text-white font-weight-bold px-3">Contacto</AnchorLink>
                                <AnchorLink href="#ubicacion" className="d-block text-white font-weight-bold p-3">Ubicación</AnchorLink>
                            </>
                        )}
                        {location.pathname !== '/' && (
                            <>
                                <Nav.Link eventKey={2} as={Link} to='/contacto' className="text-white font-weight-bold p-3">Contacto</Nav.Link>
                                <Nav.Link eventKey={2} as={Link} to='/ubicacion' className="text-white font-weight-bold p-3">Ubicación</Nav.Link>
                            </>
                        )}
                    </div>
                </div>
                <div className="col-12 col-md-6 pl-4 pt-3">
                    <h3>Centro Clínico Dios da el maná</h3>
                    <p><span className="font-weight-bold">Dirección:</span> Av. Paradissi Nº 44 a una casa del Centro
                        Hispano de
                        Villa de Cura - Edo. Aragua</p>
                    <p><span className="font-weight-bold">Horarios:</span> Lunes a Sabado 8am - 2pm </p>
                    <p><span className="font-weight-bold">Teléfono:</span> (0412) - 0433807 </p>

                    <p><span className="font-weight-bold">Siguenos en Instagram:</span> <a
                        href="https://www.instagram.com/diosdaelmana/" className="text-white" target="_blank" rel="noreferrer"><FaInstagram /></a></p>
                </div>

            </footer>
        </div>
    )
}

export default Footer
