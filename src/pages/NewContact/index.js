import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import Fundo1 from '../../assets/imagemFundo1-1080.jpg';
import api from '../../services/api';
import PageDefault from '../../components/PageDefault';

export default function NewContact(){
    const history = useHistory();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [number, setNumber] = useState();
    const [email, setEmail] = useState();

    async function handleNewContact(e){
        e.preventDefault();
        const data = {
            name, 
            description, 
            number,
            email
        };
        try {
            await api.post('contacts', data, {
            })
            history.push('/');
        } catch (error) {
            alert('Erro ao cadastrar contato, tente novamente.')
        }

    }
    return(
        <PageDefault>
            <div className="new-incident-conteiner" style={{backgroundImage: `URL(${Fundo1})`}}>
                <div className="content">   
                    <form className="Cadastro">
                        <section>
                            <p>Deixe-nos aqui sua mensagem</p>

                            <Link className="back-link" to="/">
                                <FiArrowLeft size={16} color="#ffc20a"/>
                                <text>Inicio</text>
                            </Link>                   
                        </section>    
                        <form onSubmit={handleNewContact}>
                            <input 
                                placeholder="Nome"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            
                            />
                            <textarea 
                                placeholder="Mensagem"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            
                            />
                            <input 
                                placeholder="Telefone"
                                value={number}
                                onChange={e => setNumber(e.target.value)}
                            
                            />
                            <input 
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            
                            />
                            <button className="buttonContact" type="submit">Confirmar</button>
                        </form>
                    </form>
                </div>    
            </div>
        </PageDefault>
    )
}