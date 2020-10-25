import React, { useEffect, useState, useContext } from 'react';
import weatherImg from '../Assets/img/Clear.webp';

const DetailsNextDays = () => {
  return (
    <article className='dia flex flex-col justify-around max-w-10 text-center p-3 bg-primary m-1 h-40'>
      <h2 className=''></h2>
      <figure className='w-12 m-auto'>
        <img className='m-auto' src={weatherImg} alt='soleado' />
      </figure>
      <div className=''>
        <p className='text-sm'>
          <span className='inline-block'>16°C</span> {'      '}
          <span className='inline-block text-fontD ml-1'>12°C</span>
        </p>
      </div>
    </article>
  );
};

export default DetailsNextDays;
