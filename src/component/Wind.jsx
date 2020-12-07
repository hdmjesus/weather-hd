import React, { useEffect, useState } from 'react';

const Wind = (props) => {
  const [wind, setWind] = useState(null);
  useEffect(() => {
    setWind(props.parametros.contenido.wind_mph);
  });

  useEffect(() => {});
  return (
    <article className='parametros bg-primary text-center flex flex-col justify-center'>
      <div>
        <h3 className=''>Wind Status</h3>
        <p className='font-bold text-4xl'>
          {wind} <span className='text-4xl font-medium'>mph</span>{' '}
        </p>
      </div>
      <p className=' flex justify-center'>
        <span className='material-icons'>transit_enterexit</span>{' '}
        <span>WSW</span>
      </p>
    </article>
  );
};

export default Wind;
