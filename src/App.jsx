// App.jsx
import React from 'react';
import Navbar from './Navbar';
import ProfileCard from './ProfileCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const UserData = [
    {
        name: 'aimad hasnaoui',
        username: 'aimad_has123',
        email: 'aimad.has@example.com',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        photo: 'https://avatars.githubusercontent.com/u/96472794?v=4',
        age: 25,
        address: '123 Main St, Cityville, Country',
        mobility: 'Yes',
        disponibility: 'Full-time',
        hobbies: ['Reading', 'Traveling', 'Coding'],
    },
    {
        name: 'Bougamza_yasser',
        username: 'yasser_bougamza',
        email: 'bgmz.yasser@gmail.com',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        photo: 'https://avatars.githubusercontent.com/u/52634619?v=4',
        age: 30,
        address: '456 Oak St, Townsville, Country',
        mobility: 'Yes',
        disponibility: 'Full-time',
        hobbies: ['Football', ' Travling', 'Swimming'],
    },
    {
        name: 'Jane Smith',
        username: 'jane_smith456',
        email: 'jane.smith@example.com',
        about: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        photo: 'https://th.bing.com/th/id/R.05428153738491119045626b512e0fdd?rik=c2qDJdtJ1ICvgw&pid=ImgRaw&r=0',
        age: 30,
        address: '456 Oak St, Townsville, Country',
        mobility: 'No',
        disponibility: 'Part-time',
        hobbies: ['Painting', 'Hiking', 'Cooking'],
    },
    {
        name: 'Youssef Kherdioui',
        username: 'youssef_kherdioui',
        email: 'youssef@example.com',
        about: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        photo: 'https://avatars.githubusercontent.com/u/135620743?v=4',
        age: 22,
        address: '456 Oak St, Townsville, Country',
        mobility: 'Yes',
        disponibility: 'Part-time',
        hobbies: ['Soccer', 'Hiking', 'Travel'],
    },
    {
        name: 'Jane Smith',
        username: 'jane_smith456',
        email: 'jane.smith@example.com',
        about: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        photo: 'https://th.bing.com/th/id/R.05428153738491119045626b512e0fdd?rik=c2qDJdtJ1ICvgw&pid=ImgRaw&r=0',
        age: 30,
        address: '456 Oak St, Townsville, Country',
        mobility: 'No',
        disponibility: 'Part-time',
        hobbies: ['Painting', 'Hiking', 'Cooking'],
    },
    {
        name: 'Jane Smith',
        username: 'jane_smith456',
        email: 'jane.smith@example.com',
        about: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        photo: 'https://th.bing.com/th/id/R.05428153738491119045626b512e0fdd?rik=c2qDJdtJ1ICvgw&pid=ImgRaw&r=0',
        age: 30,
        address: '456 Oak St, Townsville, Country',
        mobility: 'No',
        disponibility: 'Part-time',
        hobbies: ['Painting', 'Hiking', 'Cooking'],
    },

];

const App = () => {
  const showMembersList = () => {
    // Handle the showMembersList logic here
    // For now, just log a message to the console
    console.log('Team Members List Hovered!');
  };

  return (
    <>
      <Navbar userData={UserData} showMembersList={showMembersList} />
      <div className='my-auto container w-full flex-wrap'>
        <Splide options={{ perPage: 3, pagination: false, rewind: true, gap: '1rem' }}>
          {UserData.map((userData, index) => (
            <SplideSlide key={index}>
              <ProfileCard key={index} {...userData} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default App;
