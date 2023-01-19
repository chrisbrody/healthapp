import { useState } from 'react';

import { useStateContext } from '../context';

import './user.css'

const User = () => {
  const [userData, setUserData] = useState(false) 
  const [sleepData, setSleepData] = useState(false) 
  const { address, createSleepDay } = useStateContext()

  const apiGetUserData = () => {
    fetch("https://api.ouraring.com/v1/userinfo?access_token=OJ2ON35XKCSTVUZEW3AMI5ERLD3Q4LKA")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUserData(json);
      });

      apiGetSleepData()
  }

  const apiGetSleepData = () => {
    fetch(`https://api.ouraring.com/v1/sleep?start=2023-01-08&end=2023-01-14&access_token=OJ2ON35XKCSTVUZEW3AMI5ERLD3Q4LKA`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.sleep);
        setSleepData(json.sleep);
      });
  }

  const handleSubmit = async (e) => {
    console.log(userData, sleepData, e);

    await createSleepDay(sleepData)
  }

  return (
    <div className='user__wrapper'>
      <div className=''>
        <a href='/' className='pl-0'>Home</a>
        {address && <a href='/user'>Submit Sleep Data</a>}
        <br />
        <a href='https://goerli.etherscan.io/address/0xfE7ac1624b1580FB8BD36991B8b1E5991610e798' target="_blank" className='pl-0'>EtherScan for Transactions</a>
        <a href='https://thirdweb.com/goerli/0xfE7ac1624b1580FB8BD36991B8b1E5991610e798' target="_blank">Goerli Data</a>
      </div>
      
      {address && <button className='btn btn-get' onClick={apiGetUserData}>Fetch API Data</button> }
      {!userData && address && <div>No user data yet, click Fetch Data to get some data</div>}
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

      { sleepData && userData && <button className='btn' onClick={handleSubmit}>Submit Data To Chain</button> }
    </div>
  )
}

export default User