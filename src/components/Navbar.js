import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import AnchorLink from "react-anchor-link-smooth-scroll";

import Logo from '../imagenes/logo.png';

const Navigationbar = () => {

    const location = useLocation();

    return (
        <div>
            <Navbar collapseOnSelect expand='lg' bg="light" variant="light" sticky="top">
                <Navbar.Brand as={Link} to='/'>
                    <img src={Logo} alt="Logo" width="200" height="auto" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link eventKey={2} as={Link} to='/' className="border border-info text-info rounded text-center mr-1" >Inicio</Nav.Link>
                        {location.pathname === '/' && (
                            <>
                                <AnchorLink href="#nosotros" className="border border-info text-info rounded text-center mr-1 p-2">Nosotros</AnchorLink>
                            </>
                        )}
                        {location.pathname !== '/' && (
                            <>
                                <Nav.Link eventKey={2} as={Link} to='/nosotros' className="border border-info text-info rounded text-center mr-1">Nosotros</Nav.Link>
                            </>
                        )}
                        <Nav.Link eventKey={2} as={Link} to='/especialidades' className="border border-info text-info rounded text-center mr-1">Especialidades</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to='/especialistas' className="border border-info text-info rounded text-center mr-1">Especialistas</Nav.Link>
                        {location.pathname === '/' && (
                            <>
                                <AnchorLink href="#formulario" className="border border-info text-info rounded text-center mr-1 p-2">Contacto</AnchorLink>
                                <AnchorLink href="#ubicacion" className="border border-info text-info rounded text-center mr-1 p-2">Ubicación</AnchorLink>
                            </>
                        )}
                        {location.pathname !== '/' && (
                            <>
                                <Nav.Link eventKey={2} as={Link} to='/contacto' className="border border-info text-info rounded text-center mr-1">Contacto</Nav.Link>
                                <Nav.Link eventKey={2} as={Link} to='/ubicacion' className="border border-info text-info rounded text-center mr-1">Ubicación</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigationbar;
