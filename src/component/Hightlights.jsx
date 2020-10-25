import React from 'react';

const Hightlights = ({ children }) => {
  return (
    <>
      <h2 className='font-bold text-2xl ml-5 mb-5 mt-12 text-white'>
        Today's Hightlights
      </h2>
      <article className='detalles w-11/12 m-auto gap-4 grid grid-rows-2 auto-rows-min text-white'>
        {children}
      </article>
    </>
  );
};

export default Hightlights;
