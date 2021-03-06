import React from 'react';

import { Link } from 'react-router-dom';
import { Navegation, Navlist, Droplink } from './style';

export default function Navbar(props) {
    return (
        <Navegation className="nav-bar">
            <h2>Elbert Ribeiro</h2>
            <Navlist className="nav-list">
                <li><a className="nav-link" href="pages/curriculo/">{props.text1}</a></li>
                <li><Link to="/resume" className="nav-link">{props.text2}</Link></li>
                <li><Link to={props.page} className="nav-link" href="pages/curriculo/">{props.text3}</Link></li>
            </Navlist>
            <Droplink className="dropdown-link"><a id="dropdownLink" href="./">&#9776;</a></Droplink>
        </Navegation>
    );
}


