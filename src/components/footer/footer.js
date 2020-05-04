import React from 'react';
import LogoImg from '../../assets/Logo-Amarelo.png';
import './footer.css';
import { IconContext } from 'react-icons'
import { FiFacebook} from 'react-icons/fi';
import { FaWhatsappSquare, FaInstagram, } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';

const footer = props => (
    <footer className="footer">
        <nav className="footer_navigation">
            <div className="footer_logo">
                <Link to="/">
                    <img src={LogoImg} alt="logo tipo"/>   
                </Link>
            </div>
            <h4>Acompanhe-nos</h4>
            <div className="footer_navigation-items">
                <IconContext.Provider value={{size: "2rem"}}>
                    <ul>
                        <li><FiFacebook/></li>
                        <li><FaWhatsappSquare/></li>
                        <li><FaInstagram/></li> 
                    </ul>     
                </IconContext.Provider>              
            </div>
        </nav>
    </footer>
);

export default footer;