import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Favorites } from "./../component/favorites";
import { LogoutButton } from "./../component/logoutButton";
import { Context } from "../store/appContext";
import { motion } from "framer-motion";

export const Navbar = () => {
    const { store } = useContext(Context);

    return (
        <motion.nav
            className="navbar navbar-light bg-light p-0 contenedor-logo"
            style={{
                zIndex: 1000,
                backgroundImage:
                    "url(https://res.cloudinary.com/djpifu0cl/image/upload/v1714177451/estrellas3_kfmar8.jpg)",
            }}
        >
            <motion.div
                className="container d-flex align-items-center justify-content-between"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                style={{ x: 0, y: 0 }}
            >
                <Link to="/" className="position-fixed start-0 top-0 m-0 p-0">
                    <img
                        src="https://res.cloudinary.com/djpifu0cl/image/upload/v1714241663/starwars_lykdof.png"
                        alt="logo-starwars"
                        className="logo"
                    />
                </Link>
                {store.isAuthenticated && (
                    <div className="d-flex align-items-center position-fixed end-0 top-0 m-4" style={{ zIndex: 1000 }}>
                        <LogoutButton />

                        <div style={{ width: '15px' }}></div> {/* Espacio entre los botones */}
                        <Favorites />

                    </div>
                )}
            </motion.div>
        </motion.nav>
    );
};
