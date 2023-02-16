import { useState, useEffect } from 'react';

import { DisplaySleeps, DisplayReadiness } from '../components';
import { useStateContext } from '../context';

import './coach.css'

const Coach = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sleeps, setSleeps] = useState([])
  const [readiness, setReadiness] = useState([])
  const [observationText, setObservationText] = useState("")
  const [observations, setObservations] = useState([])

  const { address, contract, getSleepDays, getReadinessDays, createObservation, getObservations } = useStateContext();
  
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

  const fetchObservationData = async () => {
    setIsLoading(true)

    const data = await getObservations()
    setObservations(data)
    console.log(data);

    setIsLoading(false)
  }

  useEffect(() => {
    if(contract) fetchSleeps();
    if(contract) fetchData();
    if(contract) fetchObservationData();
  }, [address, contract, createObservation])

  const handleObservationSubmit = async (e) => {
    setIsSubmitting(true)
    // console.log(e, address, sleeps[0].owner, readiness[0].readinessDataSeven[0], readiness[0].readinessDataOne[0], observationText);
    let dataOwner = sleeps[0].owner
    let dateTime = `${sleeps[0].sleepDataSeven[0]} ${sleeps[0].sleepDataOne[0]}`

    if(!observationText) {
      alert('Observation text required');
      setIsSubmitting(false)
      return
    }

    let observationData = {
      address,
      observationText,
      dateTime,
      dataOwner
    } 

    // console.log(observationData);

    // submit observation
    let res = await createObservation(observationData)
    console.log(res);

    // alert client through twillio

    setIsSubmitting(false)
  }

  const handleTextAreaChange = (e) => {
    setObservationText(e.target.value);
  }

  return (
    <>
    {isSubmitting}
      {!address && <div className='no_wallet'><p>no wallet connected</p></div>}
      {address && <div className="page__wrapper user"> Wallet Address: {address}</div>}

      {!isLoading && sleeps.length === 0 && readiness.length === 0 && (
        <div>Loading client data</div>
      )}

      {!isLoading && address && sleeps && sleeps.map((sleep) => <DisplaySleeps {...sleep} />) }
      
      {!isLoading && address && readiness && readiness.map((readiness) => <DisplayReadiness {...readiness} />) }
      
      {!!sleeps && !!readiness && !isLoading && address &&
        <div id="observation">
          <h2>Observation Based On Client Data</h2>
          <textarea className='textarea' rows="3" width="100%" onChange={handleTextAreaChange} />
          <button className='btn' onClick={handleObservationSubmit}>{!isSubmitting ? 'Make Observation' : 'Submitting Observation...'}</button>
        </div>        
      }
    </>
    

    
  )
}

export default Coach