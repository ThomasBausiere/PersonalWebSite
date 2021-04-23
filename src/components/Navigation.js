import React from 'react';
import {NavLink} from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/about" activeClassName="nav-active">
                À propos
            </NavLink>
            <NavLink exact to="/Projets" activeClassName="nav-active">
                Projets
            </NavLink>
            <NavLink exact to ="/" activeClassName="nav-active">
                Accueil
            </NavLink>
        </div>
    );
};

export default Navigation;