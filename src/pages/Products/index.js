import React, { useState, useEffect } from 'react';
import {Link , useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
export default function Profile(){
    const history = useHistory()
    const [incidents, setIncidents] = useState([])
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    useEffect(() => {
        api.get('profile', {
            headers:{
                authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        });
    }, [ongId]);

    async function handleDeleteIncident(id){

        try {
            await api.delete(`incidents/${id}`, {
                headers:{
                    authorization: ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (error) {
            alert('Erro ao deletar o caso, tenten novamente.')
        }

    }

    async function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return(
        <div className="profile-conteiner">
            <header>
            </header>
            <h1>Produtos</h1>
            <ul>
                {incidents
                    .map(
                        incident => (                
                            <li key={incident.id}>
                                <strong>Caso:</strong>
                                <p>{incident.title}</p>

                                <strong>Descrição:</strong>
                                <p>{incident.description}</p>
                                <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                                    <FiTrash2 size={20} color="a8a8b3"/>
                                </button>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}