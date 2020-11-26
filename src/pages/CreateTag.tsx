import React, { useState, useLayoutEffect, FormEvent } from 'react';
import { FiSearch, FiTag } from 'react-icons/fi';
import axios from 'axios';

import '../styles/global.css';
import '../styles/pages/create-tag.css';

function CreateTag() {
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  useLayoutEffect(() => {
    document.getElementById('name')?.focus();
  }, []);

  async function handleSearchCEP(event: FormEvent) {
    event.preventDefault();

    if (cep) {
      axios
        .get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        .then((response) => {
          setStreet(response.data.street);
          setNeighborhood(response.data.neighborhood);
          setCity(response.data.city);
          setState(response.data.state);
        })
        .catch((error) => {
          setStreet('');
          setNeighborhood('');
          setCity('');
          setState('');

          alert('Cep inexistente.');
          document.getElementById('cep')?.focus();
        });
    }
  }

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

            <div className="input-block-cep">
              <div className="input-block">
                <label htmlFor="cep">CEP</label>
                <input
                  id="cep"
                  value={cep}
                  onChange={(event) => setCep(event.target.value)}
                />
              </div>

              <button className="cep-button" onClick={handleSearchCEP}>
                Pesquisar &nbsp;
                <FiSearch size={18} color="#ffffff" />
              </button>
            </div>

            <div className="input-block">
              <label htmlFor="rua">Rua</label>
              <input
                id="rua"
                value={street}
                onChange={(event) => setStreet(event.target.value)}
              />
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
              <label htmlFor="bairro">Bairro</label>
              <input
                id="bairro"
                value={neighborhood}
                onChange={(event) => setNeighborhood(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="cidade">Cidade</label>
              <input
                id="cidade"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="estado">Estado</label>
              <input
                id="estado"
                value={state}
                onChange={(event) => setState(event.target.value)}
              />
            </div>

            <button className="confirm-button" type="submit">
              Confirmar &nbsp;
              <FiTag size={18} color="#ffffff" />
            </button>
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default CreateTag;
