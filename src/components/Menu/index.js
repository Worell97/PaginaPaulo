import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/Logo-Amarelo.png';
import './styles.css';
import Button from '../Button';

function Menu() {
	return (
		<div className="Menu">
			<Link to="/">
				<img className="Logo" src={LogoImg} alt="Attack Lubrificantes" />
			</Link>
			<nav>
				<Button className="ButtonLink" to={`/Empresa`}>
					Sobre a Empresa
				</Button>
				<Button className="ButtonLink" to="/Produtos">
					Produtos
				</Button>
				<Button className="ButtonLink" to="/Contato/New">
					Contato
				</Button>
			</nav>
		</div>
	);
}

export default Menu;