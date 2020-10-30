import React, { useEffect, useState, useContext } from 'react';

function Principal({ children }) {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleChangeCity(e) {
    e.preventDefault();
    const ciudad = document.getElementById('city');
    setCity(ciudad.value);
  }
  console.log(city);
  let inputContext = React.createContext(city);

  function displayHiden() {
    // find.classList.add('hiddenB');
  }

  return (
    <section className='absolute top-0 left-0 right-0 bg-primary w-full h-screen z-40'>
      <div className='flex justify-end p-5 '>
        <button onClick={displayHiden}>
          <span className='material-icons text-3xl text-fontC'>
            highlight_off
          </span>
        </button>
      </div>
      <form className='flex p-5 w-11/12 m-auto justify-between'>
        <div className=' inputCity w-10/12 border-gray-100 p-2 flex items-center'>
          {' '}
          <span className='material-icons text-fontC'>search</span>
          <input
            className='bg-transparent w-11/12 pl-5 text-fontC outline-none'
            name='city'
            id='city'
            list='citys'
            placeholder='City'
          />
        </div>
        <input
          className='  px-5 py-4 ml-2 bg-blue-600 text-fontC text-center text-lg'
          type='submit'
          value='Buscar'
          id='send'
          onClick={handleChangeCity}
        />
        <datalist id='citys'>
          <option>Caracas</option>
          <option>Santiago de Chile</option>
          <option>La Paz</option>
          <option>Tokyo</option>
          <option>Madrid</option>
          <option>New York</option>
          <option>Belling</option>
          <option>Buenos aires</option>
        </datalist>
      </form>
      <article className='principal absolute top-0 left-0 right-0 min-h-screen bg-primary z-0'>
        {children}
      </article>
    </section>
  );
}

export default Principal;
