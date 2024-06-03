// src/js/layout.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { MovieDetails } from "./views/MoviesDetails";
import { PlanetsDetails } from "./views/PlanetsDetails";
import { Footer } from "./component/footer";
import { ToastContainer } from './store/flux';
import { Signin } from "./views/Signin";
import { Register } from "./views/Register";
import PrivateRoute from "./views/PrivateRoute"; // Importa el componente PrivateRoute

import { Navbar } from "./component/navbar";
import Botonera from "./component/botonera";
import Music from "./component/music";

const Layout = () => {
  const basename = process.env.BASENAME || "";
  
  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <ToastContainer position="bottom-right" autoClose={3000}/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} /> {/* Protege la ruta Home */}
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route exact path="/movie/:id" element={<MovieDetails />} />
            <Route exact path="/planet/:id" element={<PlanetsDetails />} />
            <Route path="*" element={<h1>Not found!</h1>} /> {/* Ruta para 404 Not Found */}
          </Routes>
          <Botonera/>
          <Music/>
          <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
