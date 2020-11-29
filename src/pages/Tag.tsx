import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BiCut } from 'react-icons/bi';

import '../styles/global.css';
import '../styles/pages/tag.css';
interface Label {
  name: string;
  street: string;
  number: string;
  neighborhood: string;
  cep: string;
  city: string;
  state: string;
  complement: string;
}

function Tag() {
  let params = useParams<Label>();

  useEffect(() => {
    document.title = params.name + ' - ' + params.city + '-' + params.state;
  });

  return (
    <div id="page-tag">
      <main>
        <div className="tag">
          <fieldset>
            <legend>Destinatário</legend>
            <h3>{params.name}</h3>
            <h3>
              Rua: {params.street} Nº {params.number}
            </h3>
            {params.complement.length > 1 && (
              <h3>Complemento: {params.complement}</h3>
            )}

            <h3>Bairro: {params.neighborhood}</h3>
            <h3>Cep: {params.cep}</h3>
            <h3>
              Cidade: {params.city} - {params.state}
            </h3>
          </fieldset>

          <div className="cut">
            <BiCut /> <hr />
          </div>

          <fieldset>
            <legend>Remetente</legend>
            <h3>Aparecida de Fátima de Campos</h3>
            <h3>Rua: Rouxinol Nº 1850</h3>
            <h3>Bairro: Vila Aparecida</h3>
            <h3>Cep: 86706-190</h3>
            <h3>Cidade: Arapongas - PR</h3>
          </fieldset>
        </div>
      </main>
    </div>
  );
}

export default Tag;
