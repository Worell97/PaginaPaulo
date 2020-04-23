import React, { useState } from 'react';
import { FiArrowLeft, FiPower } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import LogoImg from '../../assets/Logo-Amarelo.png';
import api from '../../services/api';

export default function NewIncident(){
    const history = useHistory();
    const [title, setTitle] = useState();
    const [description, setDescriptio] = useState();
    const [value, setValue] = useState();
    const ongId = localStorage.getItem('ongId')

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title, 
            description, 
            value
        };
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }

    }
    return(
        <div className="new-incident-conteiner">
            <div className="content">
                <img src={LogoImg} alt="Be The Hero"/>
                <span>{}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleNewIncident} type="button">
                    <FiPower size={18} color="#E02041"/> 
                </button>
                <section>
                    <img src={LogoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para salvar o dia</p>
 
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar ao home
                    </Link>                   
                </section>    
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescriptio(e.target.value)}
                    
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}