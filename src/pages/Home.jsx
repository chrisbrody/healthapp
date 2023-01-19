import { useState, useEffect } from 'react';

import { useStateContext } from '../context';

import './home.css'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { address } = useStateContext();


  return (
    <>
      {address && <div className="home__wrapper user"> Wallet Address: {address}</div>}
      <div className='home__wrapper'>
        <a href='/' className='pl-0'>Home</a>
        {address && <a href='/user'>Submit Sleep Data</a>}
        {address && <a href='/coach'>Coach</a>}
        <br />
        <a href='https://goerli.etherscan.io/address/0xfE7ac1624b1580FB8BD36991B8b1E5991610e798' target="_blank" className='pl-0'>EtherScan for Transactions</a>
        <a href='https://thirdweb.com/goerli/0xfE7ac1624b1580FB8BD36991B8b1E5991610e798' target="_blank">Goerli Data</a>
      </div>
      {!address && <div className='no_wallet'><p>no wallet connected</p></div>}
    </>
    

    
  )
}

export default Home