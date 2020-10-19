import React from 'react';

import WeatherPrincipal from '../component/WeatherPrincipal';
import WeatherDescription from '../component/WeatherDescription';
import NextDays from '../component/NextDays';
import DetailsNextDays from '../component/DetailsNextDays';
import Hightlights from '../component/Hightlights';
import Wind from '../component/Wind';
import Humidity from '../component/Humidity';
import AirPressure from '../component/AirPressure';
import Visibility from '../component/Visibility';
import Footer from '../component/Footer';
const Home = () => {
  return (
    <>
      <WeatherPrincipal />

      <WeatherDescription>
        <NextDays>
          <DetailsNextDays />
          <DetailsNextDays />
          <DetailsNextDays />
          <DetailsNextDays />
          <DetailsNextDays />
        </NextDays>

        <Hightlights>
          <Wind />
          <Humidity />
          <Visibility />
          <AirPressure />
        </Hightlights>

        <Footer />
      </WeatherDescription>
    </>
  );
};

export default Home;
