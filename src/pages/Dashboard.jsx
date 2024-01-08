import React, { useEffect } from 'react';
import Aside from '../commponent/curser/Asid/Aside';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the local storage is empty (no token)
    const token = localStorage.getItem('token');
    
    if (!token) {
      // Local storage is empty, redirect to the registration page
      navigate('/login');
    }
  }, [navigate]);

  return (
    <section className='flex '>
      <Aside />
    </section>
  );
}

export default Home;
