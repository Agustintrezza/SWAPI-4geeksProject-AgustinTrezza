// src/js/component/PrivateRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

const PrivateRoute = ({ children }) => {
    const { store } = useContext(Context);

    if (!store.isAuthenticated) {
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;
