import React from 'react';
import './styles.scss';
import CarouselCustom from '../../components/Carousel';
import SecondSection from '../../components/CardBox';
import PageDefault from '../../components/PageDefault';

export default function Logon(){
    return(
        <PageDefault>
            <CarouselCustom/>
            <SecondSection/>
            <section className="conclusao">
                <div className='texto'>
                    O melhor atendimento
                </div>
                <div className="items">
                    <div className="item-1" data-aos="fade-right">
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
                    <div className="item-2" data-aos="fade-left">
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
            </section>  
        </PageDefault>
    );
}