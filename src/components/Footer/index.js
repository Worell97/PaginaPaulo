import React from 'react';
import LogoImg from '../../assets/Logo-Amarelo.png';
import { FooterBase, SocialMedia, FooterNavListaItem } from './styles';
import { IconContext } from 'react-icons'
import { FiFacebook} from 'react-icons/fi';
import { FaWhatsappSquare, FaInstagram, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const footer = props => (
    <FooterBase>
        <nav className="footer_navigation">
            <div className="footer_logo">
                <Link to="/">
                    <img src={LogoImg} alt="logo tipo"/>   
                </Link>
            </div>
            <h4>Acompanhe-nos</h4>
            <IconContext.Provider value={{size: "2rem"}}>
                <SocialMedia>
                    <FooterNavListaItem>
                        <FiFacebook/>
                    </FooterNavListaItem>
                    <FooterNavListaItem>
                        <FaWhatsappSquare/>
                    </FooterNavListaItem>
                    <FooterNavListaItem>
                        <FaInstagram/>
                    </FooterNavListaItem> 
                </SocialMedia>     
            </IconContext.Provider> 
        </nav>
    </FooterBase>
);

export default footer;