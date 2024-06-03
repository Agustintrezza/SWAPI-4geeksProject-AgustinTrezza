// Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/signin.css";

export const Register = () => {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

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
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                navigate("/"); // Redirigir a la vista de inicio de sesión después de registrar
            } else {
                console.error("Registration failed:", response.statusText);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div style={{ backgroundImage: 'url(https://res.cloudinary.com/djpifu0cl/image/upload/v1714177451/estrellas3_kfmar8.jpg)' }} className="signin-container">
            <form className="signin-form" onSubmit={handleSubmit}>
                <h2 className="fs-1 text-start title">Registrarse</h2>
                <h4 className="text-start text-white subtitle">Únete a la mejor web de StarWars</h4>
                <div className="form-group">
                    <label htmlFor="full_name">Nombre Completo</label>
                    <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
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
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    );
};
