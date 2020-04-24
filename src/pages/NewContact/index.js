import React, { useState } from 'react';
import { FiArrowLeft, FiPower } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import LogoImg from '../../assets/Logo-Amarelo.png';
import api from '../../services/api';
import Toolbar from './../../components/toolBar/toolBar';
import SideDrawer from './../../components/SideDrawer/SideDrawer';
import BackDrop from './../../components/BackDrop/BackDrop';

export default function NewContact(){
    const history = useHistory();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [number, setNumber] = useState();
    const [email, setEmail] = useState();
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

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
    function toggleClickHandler(prevState){
      setSideDrawerOpen(!prevState.sideDrawerOpen);
    };

    function backDropClickHandler(){
      setSideDrawerOpen(false);
    };
      let backDrop;
      if (sideDrawerOpen){
        backDrop = <BackDrop click={backDropClickHandler}/>
      };
    return(
        <div className="new-incident-conteiner">
            <div className="content">                    
                <Toolbar toggleClickHandler={toggleClickHandler}/>
                <SideDrawer show={sideDrawerOpen}/>
                {backDrop}
                <section>
                    <p>Deixe-nos aqui sua mensagem</p>
 
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#ffc20a"/>
                        Inicio
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
                    <button className="button" type="submit">Confirmar</button>
                </form>
            </div>
        </div>
    )
}