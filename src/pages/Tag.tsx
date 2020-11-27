import React from 'react';
import { useParams } from 'react-router-dom';

interface Label {
  name: string;
  cep: string;
}

function Tag() {
  let params = useParams<Label>();

  console.log(params);

  return (
    <div id="page-tag">
      <fieldset>
        <legend>Remetente</legend>
        <h3>Nome: Aparecida Campos</h3>
      </fieldset>

      <fieldset>
        <legend>Destinatário</legend>
        <h3>Nome: {params.name}</h3>
        <h3>Cep: {params.cep}</h3>
      </fieldset>
    </div>
  );
}

export default Tag;
