// Navbar.jsx
import React from 'react';

const Navbar = ({ userData }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img
            src='https://assets-global.website-files.com/647655b65a1f0cd2ace41753/6575a21c261928b6c16b7dde_cropped-Logo-Jobintech-PNG.png'
            alt='Logo'
            className='h-8'
          />
        </a>
        <div className='d-flex'>
          {userData.map((member, index) => (
            <div key={index} className='mx-2 text-white'>
              {member.name}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
