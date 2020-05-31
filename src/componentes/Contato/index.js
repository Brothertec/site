import React from 'react';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

import './contato.css';


export default function Contato() {
    return (
        <section className="contato" id="contato">
            <div className="container">
                <div className="tamanho-contato">
                    <h2 className="contato-titulo">Contato</h2>
                    <form className="form-contato" action="https://getform.io/f/40603fc2-c339-43c1-bfcf-263957c3d2d6" method="POST">

                        <div className="form-group ">
                            <input type="text" className="form-control" id="NomeForm" name="name" placeholder="Nome" />
                        </div>
                        <div className="form-group ">
                            <input type="email" className="form-control" id="EmailForm" name="email" placeholder="E-mail" />
                        </div>
                        <div className="form-group ">
                            <input type="number" className="form-control" id="TelefoneForm" name="telefone" placeholder="Telefone" />
                        </div>
                        <div className="form-group ">
                            <textarea className="form-control" id="TextoForm" name="mensagem" placeholder="Mensagem" rows="5" />
                        </div>
                        <div className="text-right">
                            <button type="submit" class="btn btn-primary mb-2 btn-contato">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="contato-icone">

                <span className="whats-icon icone-contato"><FaWhatsappSquare /></span>
                <span className="face-icon icone-contato icone-meio "><FaFacebookSquare /></span>
                <span className="insta-icon icone-contato "><FaInstagramSquare /></span>
            </div>

        </section >

    );
}