import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import { Context } from "../store/appContext";
import "../../styles/signin.css";

export const Signin = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: formData.username,
                    password: formData.password
                })
            });
            if (response.ok) {
                const data = await response.json();
                const token = data.access_token;
                actions.login(token); // Llamar a la acción de login para almacenar el token
                const decoded = jwtDecode(token);
                console.log("Token decoded:", decoded);
                navigate("/home"); // Redirigir a la vista Home después de iniciar sesión
            } else {
                console.error("Login failed:", response.statusText);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div style={{ backgroundImage: 'url(https://res.cloudinary.com/djpifu0cl/image/upload/v1714177451/estrellas3_kfmar8.jpg)' }} className="signin-container">
            <form className="signin-form" onSubmit={handleSubmit}>
                <h2 className="fs-1 text-start title">Iniciá Sesión</h2>
                <h4 className="text-start text-white subtitle">Accedé a la mejor web de StarWars</h4>
                <div className="form-group">
                    <label htmlFor="username">Usuario</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
                <div className="mt-3">
                    <p className="text-white">No tienes una cuenta? <Link className="ms-1" to="/register">Crear una aquí</Link></p>
                </div>
            </form>
        </div>
    );
};
