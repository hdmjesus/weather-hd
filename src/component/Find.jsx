import React, { useEffect, useState, useContext } from 'react';

function Find(props) {
  function handleChangeCity(e) {
    e.preventDefault();

    props.click();
    props.hidden();
  }

  function hiddenModal() {
    props.hidden();
  }
  useEffect(() => {}, []);

  return (
    <>
      <div className='flex justify-end p-5 '>
        <button onClick={hiddenModal}>
          <span className='material-icons text-3xl text-fontC'>
            highlight_off
          </span>
        </button>
      </div>
      <form className='flex p-5 w-11/12 m-auto justify-between'>
        <div className=' inputCity w-10/12 border-gray-100 p-2 flex items-center'>
          {' '}
          <span className='material-icons text-fontC'>search</span>
          <label htmlFor='city'></label>
          <input
            className='bg-transparent w-11/12 pl-5 text-fontC outline-none'
            name='city'
            id='city'
            list='citys'
            placeholder='City'
            required
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
    </>
  );
}

export default Find;
