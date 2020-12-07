import React, { useEffect, useState } from 'react';

const AirPressure = (props) => {
  const [presure, setPresure] = useState(null);
  useEffect(() => {
    setPresure(props.parametros.contenido.pressure_mb);
  });

  return (
    <article className='parametros bg-primary text-center flex flex-col justify-center'>
      <div>
        <h3 className=''>Air Pressure</h3>
        <p className='font-bold text-4xl'>
          {presure} <span className='text-4xl font-medium'>mb</span>{' '}
        </p>
      </div>
    </article>
  );
};

export default AirPressure;
