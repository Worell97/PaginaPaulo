import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import Fundo1 from '../../assets/imagemFundo1.jpg';
import Fundo2 from '../../assets/imagemFundo2.jpg';
import Fundo3 from '../../assets/imagemFundo3.jpg';
import api from '../../services/api';
import Toolbar from './../../components/toolBar/toolBar';
import SideDrawer from './../../components/SideDrawer/SideDrawer';
import BackDrop from './../../components/BackDrop/BackDrop';

export default function Logon(){
    const [id, setId] = useState('');
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
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
            <Toolbar toggleClickHandler={toggleClickHandler}/>
            <SideDrawer show={sideDrawerOpen}/>
            {backDrop}
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