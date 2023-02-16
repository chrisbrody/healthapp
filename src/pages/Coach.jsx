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
      {!address && <div className='no_wallet'><p>no wallet connected</p></div>}
      {address && <div className="page__wrapper user"> Wallet Address: {address}</div>}

      {!isLoading && sleeps.length === 0 && (
        <div>Loading client data</div>
      )}

      {!isLoading && address && sleeps && sleeps.map((sleep) => <DisplaySleeps {...sleep} />) }
      
    </>
    

    
  )
}

export default Coach