// App.jsx
import React from 'react';
import Navbar from './Navbar';
import CardViewer from './CardViewer';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const App = () => {
  return (
    <>
      <Navbar/>
      <div className='my-auto container w-full flex-wrap'>
        <CardViewer></CardViewer>
      </div>
    </>
  );
};

export default App;
