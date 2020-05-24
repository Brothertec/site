import React from 'react';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

import './contato.css';


export default function Contato() {
    return (
        <section className="contato" id="">

            <div className="container">
                <h2 className="contato-titulo">Contato</h2>
                <form className="form-contato">

                    <div className="form-group ">
                        <input type="text" class="form-control" id="NomeForm" placeholder="Nome" />
                    </div>
                    <div className="form-group ">
                        <input type="email" class="form-control" id="EmailForm" placeholder="E-mail" />
                    </div>
                    <div className="form-group ">
                        <input type="number" class="form-control" id="TelefoneForm" placeholder="Telefone" />
                    </div>
                    <div className="form-group ">
                        <textarea className="form-control" id="TextoForm" placeholder="Mensagem" rows="5" />
                    </div>
                    <div className="text-right">
                        <button type="submit" class="btn btn-primary mb-2 btn-contato">Enviar</button>
                    </div>
                </form>
                <div className="row ">
                    <div className="col">
                        <span className="whats-icon icone-contato"><FaWhatsappSquare /></span>
                    </div>
                    <div className="col">
                        <div className="icon-center">
                            <span className="face-icon icone-contato "><FaFacebookSquare /></span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon-end">
                            <span className="insta-icon icone-contato "><FaInstagramSquare /></span>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    );
}