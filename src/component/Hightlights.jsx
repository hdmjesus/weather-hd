import React, { useEffect, useState, useContext } from 'react';
import Wind from './Wind';
import Humidity from './Humidity';
import AirPressure from './AirPressure';
import Visibility from './Visibility';

const Hightlights = (props) => {
  return (
    <>
      <h2 className='font-bold text-xl ml-5 mb-1 mt-3 text-white'>
        Today's Hightlights
      </h2>
      <article className='detalles w-11/12 m-auto gap-4 grid grid-rows-2 lg:grid-cols-2 auto-rows-min text-white'>
        <Wind parametros={props} />
        <Humidity parametros={props} />
        <Visibility parametros={props} />
        <AirPressure parametros={props} />
      </article>
    </>
  );
};

export default Hightlights;
