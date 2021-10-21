import React from 'react';

import Galeria from './InicioComponents/Carousel';
import Formulario from './InicioComponents/ContactForm';
import Ubicacion from './InicioComponents/Ubicacion';
import Nosotros from './InicioComponents/Nosotros';
import { Helmet } from "react-helmet";

const Inicio = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Inicio</title>
                <meta name="description" content="Página de Inicio" />
            </Helmet>
            <Galeria />
            <Nosotros />
            <Formulario />
            <Ubicacion />
        </div>
    )
}

export default Inicio
