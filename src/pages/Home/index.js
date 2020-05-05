import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';
import Toolbar from './../../components/toolBar/toolBar';
import Footer from './../../components/footer/footer';
import SideDrawer from './../../components/SideDrawer/SideDrawer';
import BackDrop from './../../components/BackDrop/BackDrop';
import { Link, useHistory } from 'react-router-dom';

export default function Logon(){
    const [passWord, setpassWord] = useState('');
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const history = useHistory('');

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await api.post('sessions', {passWord});            
            localStorage.setItem('userPassword', passWord);
            localStorage.setItem('userName', response.data.name);
            history.push('/admin');
        } catch (error) {
            alert('Falha no login, tente novamente.')            
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
        <div className="home">
            <Toolbar toggleClickHandler={toggleClickHandler} ShowMainPage={true}/>
            <SideDrawer show={sideDrawerOpen}/>
            {backDrop}
            <div className="conteudo">
                <div className='apresentacao'>
                    <div className='texto'>
                        Mais performace e segurança para o seu veículo
                    </div>
                </div>
                <div className='produtos'>
                    <div className='texto'>
                        Produtos de qualidade e excelência
                    </div>
                </div> 
                <div className="conclusao">
                    <div className='texto'>
                        O melhor atendimento
                    </div>
                    <div className="items">
                        <div className="item-1">
                            <h2>Contato</h2>
                            <h3>+55 (44) 9996-3639</h3>
                            <div className="localizacao-horario">
                                <div className="localizacao">
                                    <h4>Localização</h4>
                                    <div className="endereco">Rua Manoel Ramires, 1394, Marginal Rodoviaria PR-323 Parque industrial 1, Umuarama-PR</div>
                                    
                                    <h4>Email</h4>
                                    <div className="email">contato@attacklub.com.br</div>
                                </div>    
                                <div className="horario">
                                    <h4>Horários</h4>
                                    <div className="dia">Segunda a sexta</div>
                                    <div className="hora">8:00 as 18:00</div>
                                </div>
                            </div>
                        </div>
                        <div className="item-2">
                            <header>
                                <h4>Cadastre-se aqui</h4>    
                                <p> Fique por dentro das ultimas promoções e novidades</p>
                            </header>
                            <fieldset>
                                <form method="post" action="#" className="cadEmail">
                                    <input className="cadEmail-input" type="text" placeholder="Digite seu e-mail"/>
                                    <button className="cadEmail-button">Enviar</button>
                                </form>
                            </fieldset>
                            <footer>
                                <small>"Ao cadastrar seu e-mail você aceita receber e-mails e promoções da Attack Lubrificantes. Você poderá cancelar o recebimento a qualquer momento"</small>

                            </footer>
                        </div>
                    </div>                    
                </div>   
            </div>
            <Footer/>             
        </div>
    );
}