// Navbar.jsx
import React from 'react';

const Navbar = () => {
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
        <div className='d-flex text-white gap-4'>
          <p className='text-[10px]'>AIMAD HASNAOUI</p>
          <p className='text-[10px]'>Bougamza yasser</p>
          <p className='text-[10px]'>khadija HAMDIOUI</p>
          <p className='text-[10px]'>youssef KHERDIOUI</p>c
          <p className='text-[10px]'>Benaissa Amari</p>
          <p className='text-[10px]'>Said EL GHAZAL </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
