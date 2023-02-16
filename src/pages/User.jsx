import { useState, useEffect } from 'react';

import { useStateContext } from '../context';

import './user.css'

const User = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState(false) 
  const [sleepData, setSleepData] = useState(false)   
  const [readinessData, setReadinessData] = useState(false)   
  const { address, createSleepDay } = useStateContext()

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

  // get and store current users data from Oura 
  useEffect(() => {
    apiGetUserData()
  }, userData)

  // get sleep data from Oura Ring
  const apiGetSleepData = () => {
    fetch(`https://api.ouraring.com/v1/sleep?start=YYYY-MM-DD&end=YYYY-MM-DD&access_token=OJ2ON35XKCSTVUZEW3AMI5ERLD3Q4LKA`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.sleep);
        setSleepData(json.sleep);
      });
  }


  // get readiness data from Oura Ring
  const apiGetReadinessData = () => {
    fetch(`https://api.ouraring.com/v1/readiness?start=YYYY-MM-DD&end=YYYY-MM-DD&access_token=OJ2ON35XKCSTVUZEW3AMI5ERLD3Q4LKA`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // setReadinessData(json);
      });
  }

  // handle data submit 
  const handleSubmit = async (e) => {
    // console.log(userData, sleepData, e);

    await createSleepDay(sleepData)
  }

  return (
    <div className='user__wrapper'>
      {!address && <div className='no_wallet'><p>no wallet connected</p></div>}
      {address && <div className="home__wrapper user"> Wallet Address: {address}</div>}
      {!userData && address && <div className='pl-1'>No user data yet, click Fetch Data to get some data</div>}
      {
        userData && 
        <div className='user__info'>
          <div className="email">Email: {userData.email}</div>
          <div className="age">Age: {userData.age}</div>
          <div className="gender">Gender: {userData.gender}</div>
          <div className="height">Height: {userData.height}</div>
          <div className="weight">Weight: {userData.weight}</div>
        </div>
      }
      <br />

      {/* Loading */}
      {isLoading && 
        <div>Loading...</div>
      } 

      {/* Get Sleep Data */}
      {address && 
        <div>
          <button className='btn btn-get' onClick={apiGetSleepData}>Get Sleep Data</button> 
          <button className='btn btn-get' onClick={apiGetReadinessData}>Get Readiness Data</button>
        </div>    
      }
      
      {!sleepData && address && <div>No Sleep Data</div>}
      { 
        address && sleepData && 
        <ul className='user__summary'>
          {sleepData.map((item) => (
            <div id={item.summary_date}>
              <li key={item.summary_date}>
                {item.summary_date}
                {item.bedtime_start}
                {item.bedtime_end}
              </li>
            </div>
          ))}
        </ul>
      }

    {!readinessData && address && <div>No Readiness Data</div>}

      { sleepData && userData && <button className='btn' onClick={handleSubmit}>Submit Data To Chain</button> }
    </div>
  )
}

export default User