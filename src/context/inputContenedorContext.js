import React from 'react';
import inputContext from './inputContext';

let { Provider, Consumer } = inputContext;
const valoresPorDefecto = {
  name: '',
  setName: (name) => (valoresPorDefecto.name = name),
};

const ContenedorContexto = ({ children }) => (
  <Provider value={valoresPorDefecto}>{children}</Provider>
);

export default ContenedorContexto;
