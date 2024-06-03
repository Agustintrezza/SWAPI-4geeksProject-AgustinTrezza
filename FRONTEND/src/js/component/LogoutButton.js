import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const LogoutButton = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = () => {
        actions.logout();
        navigate("/");
    };

    return (
        <button
            className="btn btn-favorite fs-6 bg-black-transparent"
            onClick={handleLogout}
        >
            Logout
        </button>
    );
};
