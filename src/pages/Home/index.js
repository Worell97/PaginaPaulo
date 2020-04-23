import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import LogoImg from '../../assets/Logo-Amarelo.png';
import Fundo1 from '../../assets/imagemFundo1.jpg';
import Fundo2 from '../../assets/imagemFundo2.jpg';
import Fundo3 from '../../assets/imagemFundo3.jpg';
import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory('');

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await api.post('sessions', {id});            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch (error) {
            alert('Falha no login, tente novamente.')            
        }

    }

    return(
        <div className="home">
            <div className="header-conteiner">
                <Link to="/" className="logoTipo">
                    <img src={LogoImg} alt="logo tipo"/>       
                </Link>
                <ul className="menu">
                    <li>                    
                        <Link className="menuItems" to="/Empresa">
                            Empresa
                        </Link>      
                    </li>
                    <li>                    
                        <Link className="menuItems" to="/Produtos">
                            Produtos
                        </Link>      
                    </li>
                    <li>                    
                        <Link className="menuItems" to="/Contato/New">
                            Contato
                        </Link>      
                    </li>
                </ul>
            </div>
            <div className="conteudo">
                <div className='apresentacao' style={{backgroundImage: `URL(${Fundo1})`}}>
                    <div className='texto'>
                        Mais performace e segurança para o seu veículo
                    </div>
                </div>
                <div className='produtos' style={{backgroundImage: `URL(${Fundo2})`}}>
                    <div className='texto'>
                        Produtos de qualidade e excelência
                    </div>
                </div>
                <div className="conclusao" style={{backgroundImage: `URL(${Fundo3})`}}>
                    <div className='texto'>
                        O melhor atendimento
                    </div>
                </div>        
            </div>
            <div className="footer">                
            </div>
        </div>
    );
}