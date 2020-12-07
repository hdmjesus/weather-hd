import React from 'react';

const WeatherDescription = ({ children }) => {
  return (
    <>
      <section className='Second lg:w-3/5  bg-second text-fontC mx-auto my-0'>
        <div className='icons hidden'>
          <div className='icon'>
            <span className='material-icons'>mood</span>
          </div>
          <div className='icon'>
            <span className='material-icons'>sentiment_dissatisfied</span>
          </div>
        </div>
        <article className='mt-8'>{children}</article>
      </section>
    </>
  );
};

export default WeatherDescription;
