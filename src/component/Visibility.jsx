import React, { useEffect, useState } from 'react';

const Visibility = (props) => {
  const [visibility, setVisibility] = useState(null);
  useEffect(() => {
    setVisibility(props.parametros.contenido.vis_miles);
  });
  return (
    <article className='parametros bg-primary text-center flex flex-col justify-center'>
      <div>
        <h3 className=''>Visibility</h3>
        <p className='font-bold text-4xl'>
          {visibility} <span className='text-4xl font-medium'>miles</span>{' '}
        </p>
      </div>
    </article>
  );
};

export default Visibility;
