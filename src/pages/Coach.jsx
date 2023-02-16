import { useState, useEffect } from 'react';

import { DisplaySleeps, DisplayReadiness } from '../components';
import { useStateContext } from '../context';

import './coach.css'

const Coach = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [sleeps, setSleeps] = useState([])
  const [readiness, setReadiness] = useState([])
  const { address, contract, getSleepDays, getReadinessDays } = useStateContext();

  const fetchSleeps = async () => {
    setIsLoading(true)

    const data = await getSleepDays()
    setSleeps(data);
    console.log(data);

    setIsLoading(false)
  }

  const fetchData = async () => {
    setIsLoading(true)

    const data = await getReadinessDays()
    setReadiness(data)
    console.log(data);

    setIsLoading(false)

  }

  useEffect(() => {
    if(contract) fetchSleeps();
    if(contract) fetchData();
  }, [address, contract])
  return (
    <>
      {!address && <div className='no_wallet'><p>no wallet connected</p></div>}
      {address && <div className="page__wrapper user"> Wallet Address: {address}</div>}

      {!isLoading && sleeps.length === 0 && readiness.length === 0 && (
        <div>Loading client data</div>
      )}

      {!isLoading && address && sleeps && sleeps.map((sleep) => <DisplaySleeps {...sleep} />) }
      
      {!isLoading && address && readiness && readiness.map((readiness) => <DisplayReadiness {...readiness} />) }
      
      {!!sleeps && !!readiness &&
        <div id="observation">
          <h2>Observation Based On Client Data</h2>
          <textarea className='textarea' rows="3" width="100%" />
          <button className='btn'>Make Observation</button>
        </div>
      }
    </>
    

    
  )
}

export default Coach