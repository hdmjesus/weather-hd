import React from 'react';
import LightCloud from '../Assets/img/Shower.webp';

function Vista() {
  return (
    <>
      <section className=''>
        <article className='px-6 py-2'>
          <div className='flex justify-between items-center'>
            <button className='bg-gray-700 hover:bg-gray-600 text-white  text-sm py-1 px-4 rounded inline-flex items-center h-8'>
              <span>Seach for places</span>
            </button>
            <div className='bg-gray-700  w-10 rounded-full h-10'>
              <span className='material-icons block text-center p-2 text-white'>
                gps_fixed
              </span>
            </div>
          </div>
        </article>
        <div className='clouds min-w-full max-w-screen-lg h-64 absolute overflow-hidden'>
          <div className='cloud-left-top w-32 h-32'></div>
          <div className='cloud-left-botton w-32 h-32'></div>
          <div className='cloud-right-top w-32 h-32'></div>
          <div className='cloud-right-botton w-32 h-32'></div>
        </div>

        <article className=' z-10'>
          <figure className='w-32 py-12 m-auto'>
            <img className='m-auto' src={LightCloud} alt='tiempo actual' />
          </figure>

          <article className='text-fontC text-center flex flex-col justify-between h-auto'>
            <h1 className='font-medium text-9xl  py-0 -mt-10'>
              1<span className='inline-block'>5</span>
              <span className='text-4xl inline-block'>ºC</span>
            </h1>
            <h2 className='font-semibold text-4xl text-fontD font-medium'>
              Shower
            </h2>
            <p className='font-medium text-base mt-8 text-fontD font-medium'>
              Today - Viernes 10 October
            </p>
            <p className='text-base mt-8 mb-4 text-fontD  font-medium'>
              <span className='material-icons '>location_on</span> Bani
            </p>
          </article>
        </article>
      </section>
    </>
  );
}

export default Vista;
