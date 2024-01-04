// App.jsx
import React from 'react';
import Navbar from './Navbar';
import ProfileCard from './CardViewer';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const App = () => {
    return (
        <>
            <Navbar userData={UserData} showMembersList={showMembersList} />
            <div className='flex justify-center items-center h-screen'>
                <CardViewer></CardViewer>
            </div>
        </>
    );
};

export default App;
