import { useState, useEffect } from 'react';

import { DisplaySleeps } from '../components';
import { useStateContext } from '../context';

import './coach.css'

const Coach = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [sleeps, setSleeps] = useState([])
  const { address, contract, getSleepDays } = useStateContext();

  const fetchSleeps = async () => {
    setIsLoading(true)

    const data = await getSleepDays()
    setSleeps(data);
    console.log(data);

    setIsLoading(false)
  }

  useEffect(() => {
    if(contract) fetchSleeps();
  }, [address, contract])
  return (
    <>
      {address && <div className="home__wrapper user"> Wallet Address: {address}</div>}
      <div className='home__wrapper'>
        <a href='/' className='pl-0'>Home</a>
        {address && <a href='/coach'>Coach</a>}
        <br />
        <a href='https://goerli.etherscan.io/address/0xfE7ac1624b1580FB8BD36991B8b1E5991610e798' target="_blank" className='pl-0'>EtherScan for Transactions</a>
        <a href='https://goerli.etherscan.io/address/0xfE7ac1624b1580FB8BD36991B8b1E5991610e798' target="_blank">Goerli Data</a>
      </div>

      {!isLoading && sleeps.length === 0 && (
        <div>No Client Data To Review</div>
      )}


      {!isLoading && address && sleeps && sleeps.map((sleep) => <DisplaySleeps {...sleep} />) }
      
    </>
    

    
  )
}

export default Coach