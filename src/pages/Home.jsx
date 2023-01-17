import { useState } from 'react';

import { useStateContext } from '../context';

import './home.css'

const Home = () => {
 

  return (
    <div className='home__wrapper'>
      <a href='/'>Home</a>
      <a href='/user'>User</a>
      <a href='/coach'>Coach</a>

      <a href='https://goerli.etherscan.io/address/0x753292b8C6A1c94A30a3bf940528274B769a8A47' target="_blank">EtherScan for Transactions</a>
    </div>

    
  )
}

export default Home