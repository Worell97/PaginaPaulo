import React from 'react';
import LogoImg from '../../assets/Logo-Amarelo.png';
import './toolBar.css';
import { Link, useHistory } from 'react-router-dom';

const footer = props => (
    <header className="footer">
        <nav className="footer_navigation">
            <div className="footer_logo">
                <Link to="/">
                    <img src={LogoImg} alt="logo tipo"/>   
                </Link>
            </div>
            <div className="spacer"/>
            <div className="footer_navigation-items">
            </div>
        </nav>
    </header>
);

export default footer;