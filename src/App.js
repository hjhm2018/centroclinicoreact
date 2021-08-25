import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Especialistas from './components/Especialistas';
import Especialidades from './components/Especialidades';
import Inicio from './components/Inicio';
import ContactForm from './components/InicioComponents/ContactForm';
import Ubicacion from './components/InicioComponents/Ubicacion';
import Nosotros from './components/InicioComponents/Nosotros';
import ScrollToTop from './utilities/ScrollToTop';
function App() {

  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/especialistas">
            <Especialistas />
          </Route>
          <Route path="/especialidades">
            <Especialidades />
          </Route>
          <Route path="/ubicacion">
            <Ubicacion />
          </Route>
          <Route path="/contacto">
            <ContactForm />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route exact path="/">
            <Inicio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
