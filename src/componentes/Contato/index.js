import React from 'react';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

import './contato.css';


export default function Contato() {
    return (
        <section className="contato" id="">

            <div className="container">
                <div className="tamanho-contato">
                    <h2 className="contato-titulo">Contato</h2>
                    <form className="form-contato">

                        <div className="form-group ">
                            <input type="text" className="form-control" id="NomeForm" placeholder="Nome" />
                        </div>
                        <div className="form-group ">
                            <input type="email" className="form-control" id="EmailForm" placeholder="E-mail" />
                        </div>
                        <div className="form-group ">
                            <input type="number" className="form-control" id="TelefoneForm" placeholder="Telefone" />
                        </div>
                        <div className="form-group ">
                            <textarea className="form-control" id="TextoForm" placeholder="Mensagem" rows="5" />
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