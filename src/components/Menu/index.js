import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/Logo-Amarelo.png';
import './styles.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={LogoImg} alt="Attack Lubrificantes" /> 
      </Link>
			<Button className="ButtonLink" to={`/Empresa`}>
					Empresa
			</Button>                      
			<Button className="ButtonLink" to="/Produtos">
					Produtos
			</Button>                 
			<Button className="ButtonLink" to="/Contato/New">
					Contato
			</Button>  
    </nav>
  );
}

export default Menu;