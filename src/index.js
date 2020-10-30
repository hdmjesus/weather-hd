import React, { useEffect, useState, useMemo } from 'react';

import ReactDOM from 'react-dom';
import './Assets/styles/main.css';
import App from './routes/app';
import Home from './template/Home';
import { WeatherProvider } from './context/weatherContext';
//

ReactDOM.render(<Home></Home>, document.getElementById('root'));
