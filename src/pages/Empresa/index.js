import React, {useState} from 'react';
import './styles.css';
import LogoImg from '../../assets/Logo-Amarelo.';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data);
    
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');            
        } catch (error) {
            alert('Erro no cadastro, tente novamente.');              
        }
    }

    return(
        <div className="register-conteiner">
            <div className="content">
               <h1>
                   Dados da empresa
                </h1>
            </div>
        </div>
        
    );
}