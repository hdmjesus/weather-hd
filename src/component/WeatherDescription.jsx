import React from 'react';

const WeatherDescription = ({ children }) => {
  return (
    <>
      <section className='Second'>
        <div>
          <span className='material-icons'>mood</span>
        </div>
        <div>
          <span className='material-icons'>sentiment_dissatisfied</span>
        </div>
        <article>{children}</article>
      </section>
    </>
  );
};

export default WeatherDescription;
