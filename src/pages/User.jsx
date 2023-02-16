import { useState, useEffect } from 'react';

import { useStateContext } from '../context';

import './user.css'

const User = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState(false) 
  const [data, setData] = useState(false) 
  const [sleepData, setSleepData] = useState(false)   
  const [readinessData, setReadinessData] = useState(false)   
  const [observationData, setObservationData] = useState([])

  const { address, contract, createSleepDay, createReadinessDay, getObservations } = useStateContext()

  // get User data from Oura ring
  const apiGetUserData = async () => {
    setIsLoading(true)

    fetch("https://api.ouraring.com/v1/userinfo?access_token=OJ2ON35XKCSTVUZEW3AMI5ERLD3Q4LKA")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUserData(json);
    });

    setIsLoading(false)
  }

  const fetchObservationData = async () => {
    setIsLoading(true)

    const data = await getObservations()
    console.log(data[0]);
    setObservationData(data[0])
    console.log(data[0].clientAddress[0] == address, data.length);

    observationData.forEach((item) => {
      console.log(item);
    })

    setIsLoading(false)
  }

  // get and store current users data from Oura 
  useEffect(() => {
    apiGetUserData()
  }, [])

  useEffect(() => {
    if(contract) fetchObservationData();
  }, [address, contract])

  // get sleep data from Oura Ring
  const apiGetSleepData = () => {
    setIsLoading(true)

    fetch(`https://api.ouraring.com/v1/sleep?start=2023-02-07&end=2023-02-14&access_token=OJ2ON35XKCSTVUZEW3AMI5ERLD3Q4LKA`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.sleep);
        setSleepData(json.sleep);
        setData(json.sleep)
    });

    setIsLoading(false)
  }

  // get readiness data from Oura Ring
  const apiGetReadinessData = () => {
    setIsLoading(true)

    fetch(`https://api.ouraring.com/v1/readiness?start=2023-02-07&end=2023-02-14&access_token=OJ2ON35XKCSTVUZEW3AMI5ERLD3Q4LKA`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.readiness);
        setReadinessData(json.readiness);
        setData(json.readiness);
      });

    setIsLoading(false)
  }

  // handle readiness data submit
  const handleReadinessSubmit = async (e) => {
    setIsLoading(true)
    // console.log(userData, readinessData, e);

    for (let i = 0; i <= 6; i++) {
      // if no sleep data exists - add null values
      if(!readinessData[i]) {
        // console.log(i, !readinessData[i]);
        readinessData[i] = {
            "summary_date": "none",
            "score": "none",
            "score_activity_balance": "none",
            "score_sleep_balance": "none",
            "score_temperature": "none"
        }
      }
    }

    // console.log(readinessData);

    let res = await createReadinessDay(readinessData)
    console.log(res);

    setIsLoading(false)
  }

  // handle data submit 
  const handleSubmit = async (e) => {
    setIsLoading(true)

    // console.log(userData, sleepData, e);
    for (let i = 0; i <= 6; i++) {
      // console.log(i, !sleepData[i]);
      // if no sleep data exists - add null values
      if(!sleepData[i]) {
          console.log(i);
          sleepData[i] = {
              "summary_date": "null",
              "bedtime_start": "null",
              "bedtime_end": "null",
              "duration": "null"
          }
      }
    }

    // check sleep data is all good
    // console.log(sleepData);

    let res = await createSleepDay(sleepData)
    console.log(res);

    setIsLoading(false)
  }

  // handle reset data
  const handleReset = () => {
    setSleepData(false);
    setReadinessData(false);
    setData(false)
  }

  return (
    <div className='user__wrapper'>
      {!address ? <div className='no_wallet'><p>no wallet connected</p></div> : <div className="home__wrapper user"> Wallet Address: {address}</div>}

      {!userData ? 
        <div className='pl-1'>No user data found.</div> : 
        <div className='user__info'>
          <div className="email">Email: {userData.email}</div>
          <div className="age">Age: {userData.age}</div>
          <div className="gender">Gender: {userData.gender}</div>
          <div className="height">Height: {userData.height}</div>
          <div className="weight">Weight: {userData.weight}</div>
        </div>
      }

      {/* Initial Loading State */}
      {isLoading && !data &&
        <div>Loading...</div>
      } 

      {/* Show Get Data Buttons if there is an address */}
      {address && !data && !isLoading &&
        <div>
          <button className='btn btn-get' onClick={apiGetSleepData}>Get Sleep Data</button> 
          <button className='btn btn-get' onClick={apiGetReadinessData}>Get Readiness Data</button>
        </div>    
      }
      
      {/* No data has been selected yet */}
      {!sleepData && !readinessData && !data && address ? <div>Select Data to Submit</div> : ""}
      
      {/* reveal sleep data when requested */}
      {sleepData && address && 
        <>
          <h2>Sleep Data</h2>
          <div className='sleepDate__wrapper'>
            {sleepData.map((item) => (
              <div key={item.summary_date} id={item.summary_date} className='sleepDate'>
                  <div className='date'>Date: {item.summary_date}</div>
                  <div className='start'>Start: {item.bedtime_start}</div>
                  <div className='end'>End: {item.bedtime_end}</div>
                  <div className='duration'>Sleep Duration: {item.duration/60}m</div>
                </div>
            ))}
          </div>
          {/* submit sleep data button */}
          <button className='btn' onClick={handleSubmit}>{!isLoading ? 'Submit Sleep Data' : 'Submitting Data...'}</button>
          {/* sleep data reset button */}
          {!isLoading ? <button className='btn' onClick={handleReset}>Reset Data</button> : ''}
        </>
        
      }

    {/* reveal readiness data when requested */}
    {readinessData && address && 
      <div>
        <h2>Readiness Data</h2>
        <div className='sleepDate__wrapper'>
          {readinessData.map((item) => (
            <div key={item.summary_date} id={item.summary_date} className='sleepDate'>
                <div>Date: {item.summary_date} </div>
                <div>Score: {item.score} </div>
                <div>Score Activity Balance: {item.score_activity_balance} </div>
                <div>Score Sleep Balance: {item.score_sleep_balance} </div>
                <div>Score Temperature: {item.score_temperature} </div>
            </div>
          ))}
        </div>
        {/* submit readiness data button */}
        <button className='btn' onClick={handleReadinessSubmit}>{!isLoading ? 'Submit Readiness Data' : 'Submitting Data...'}</button> 
        {/* readiness data reset button */}
        {!isLoading ? <button className='btn' onClick={handleReset}>Reset Data</button> : ''}
      </div> 
    }

    {observationData && address && 
      <div>
        <br />
        <hr />
        <br />
        <h2>Recent Observation Data made by {observationData.owner}</h2>
        <div className=''>
            <div key={observationData.clientAddress} id={observationData.clientAddress} className='observationDate'>
              <div className="dateTime">Observation Period {observationData.dateTime}</div>
              <div className="text">Observation: {observationData.observation}</div>
            </div>
        </div>
      </div> 
    } 

    {/* {observationData ? 
    <>
      {observationData.map((item, index) => {
        {item.clientAddress}
      })}
      <div>you have stuff</div>
    </>

      : <div>No Observations</div>
    } */}

    </div>
  )
}

export default User