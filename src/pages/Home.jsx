import { useState, useEffect } from 'react';

import { useStateContext } from '../context';

import './home.css'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { address } = useStateContext();


  return (
    <>
      {address && <div className="page__wrapper user"> Wallet Address: {address}</div>}
      {!address && <div className='no_wallet'><p>no wallet connected</p></div>}
      <div className='page__wrapper'>
        <br />
        <a href='https://goerli.etherscan.io/address/0xbcB2A22710688E1eE837D788e7c0E9feFAb0Ff35' target="_blank" className='pl-0'>EtherScan for Transactions</a>
        <a href='https://thirdweb.com/goerli/0xbcB2A22710688E1eE837D788e7c0E9feFAb0Ff35' target="_blank">Goerli Data</a>
      </div>
    </>
    
 
    
  )
}

export default Home