import React from 'react';
import LightCloud from '../img/LightCloud.webp';

const WeatherPrincipal = () => {
  return (
    <section className='principal'>
      <article>
        <div>
          <button>Seach for places</button>
          <div>
            <span className='material-icons'>gps_fixed</span>
          </div>
        </div>
      </article>

      <article>
        <figure>
          <img src={LightCloud} alt='tiempo actual' />
        </figure>

        <div>
          <h1>15º C</h1>
          <h2>Shower</h2>
          <p>Today - Viernes 10 October</p>
        </div>
      </article>
    </section>
  );
};

export default WeatherPrincipal;
