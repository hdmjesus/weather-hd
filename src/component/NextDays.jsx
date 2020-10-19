import React from 'react';

const NextDays = ({ children }) => {
  return (
    <article className='dias w-11/12 m-auto gap-4 grid grid-cols-2days justify-center'>
      {children}
    </article>
  );
};

export default NextDays;
