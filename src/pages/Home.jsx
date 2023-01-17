import { useState } from 'react';

import { useStateContext } from '../context';

import './home.css'

const Home = () => {
 

  return (
    <div className='home__wrapper'>
      <a href='/'>Home</a>
      <a href='/user'>User</a>
      <a href='/coach'>Coach</a>
    </div>
  )
}

export default Home