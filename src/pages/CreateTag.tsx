import React from 'react';

import '../styles/global.css';
import '../styles/pages/create-tag.css';

function CreateTag() {
  return (
    <div className="page-create-tag">
      <main>
        <form className="create-tag-form">
          <fieldset>
            <legend>Dados</legend>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="cep">CEP</label>
              <input id="cep" />
            </div>

            <div className="input-block">
              <label htmlFor="rua">Rua</label>
              <input id="rua" />
            </div>

            <div className="input-block">
              <label htmlFor="numero">Numero</label>
              <input id="numero" />
            </div>

            <div className="input-block">
              <label htmlFor="complemento">Complemento</label>
              <input id="complemento" />
            </div>            

            <div className="input-block">
              <label htmlFor="cidade">Cidade</label>
              <input id="cidade" />
            </div>

            <div className="input-block">
              <label htmlFor="estado">Estado</label>
              <input id="estado" />
            </div>

            <button className="confirm-button" type="submit">
              Confirmar
            </button>
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default CreateTag;