import React from 'react';

import WeatherPrincipal from '../component/WeatherPrincipal';
import WeatherDescription from '../component/WeatherDescription';
import NextDays from '../component/NextDays';
import Hightlights from '../component/Hightlights';
import DetailsHighligths from '../component/DetailsHighligths';
import DetailsNextDays from '../component/DetailsNextDays';

const Home = () => {
  return (
    <>
      <WeatherPrincipal />

      <WeatherDescription>
        <NextDays>
          <DetailsNextDays />
        </NextDays>
        <Hightlights>
          <DetailsHighligths />
        </Hightlights>
      </WeatherDescription>
    </>
  );
};

export default Home;
