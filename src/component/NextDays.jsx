import React from 'react';
import DetailNextDay from '../component/DetailsNextDays';

const NextDays = (props) => {
  return (
    <article className='dias w-11/12 m-auto gap-4 grid grid-cols-2days sm:grid-cols-3days justify-center'>
      {props.tomorrow.map((item) => (
        <DetailNextDay day={item} key={item.date_epoch}></DetailNextDay>
      ))}
    </article>
  );
};

export default NextDays;
