import React, { useEffect, useState, useContext } from 'react';
import Wind from './Wind';
import Humidity from './Humidity';
import AirPressure from './AirPressure';
import Visibility from './Visibility';

const Hightlights = (props) => {
  return (
    <>
      <h2 className='font-bold text-2xl ml-5 mb-5 mt-12 text-white'>
        Today's Hightlights
      </h2>
      <article className='detalles w-11/12 m-auto gap-4 grid grid-rows-2 auto-rows-min text-white'>
        <Wind parametros={props} />
        <Humidity parametros={props} />
        <Visibility parametros={props} />
        <AirPressure parametros={props} />
      </article>
    </>
  );
};

export default Hightlights;
