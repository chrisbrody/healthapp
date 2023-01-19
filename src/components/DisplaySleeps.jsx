import { useState } from 'react';
import { useStateContext } from '../context';

import './displaysleeps.css'

const DisplaySleeps = (sleep) => {
  const [compare, setCompare] = useState(false)
  const { address } = useStateContext();


  console.log(sleep[0] === address);
  // if(!(sleep[0] === address)) {
  //   console.log('true');
  //   setCompare('true')
    
  // }

  return (
    <div className='sleepDate__wrapper'>
      <div className="owner">Sleep Data Owner: {sleep.owner}</div>
      <div className="sleepDate sleepDateSeven" key={sleep.sleepDataSeven[0]}>
        <div className="date">Date: {sleep.sleepDataSeven[0]}</div>
        <div className="start">Start: {sleep.sleepDataSeven[1]}</div>
        <div className="end">End: {sleep.sleepDataSeven[2]}</div>
        <div className="duration">Sleep Duration: {sleep.sleepDataSeven[3]/60}m</div>
      </div>
      <div className="sleepDate sleepDateSix" key={sleep.sleepDataSix[0]}>
        <div className="date">Date: {sleep.sleepDataSix[0]}</div>
        <div className="start">Start: {sleep.sleepDataSix[1]}</div>
        <div className="end">End: {sleep.sleepDataSix[2]}</div>
        <div className="duration">Sleep Duration: {sleep.sleepDataSix[3]/60}m</div>
      </div>
      <div className="sleepDate sleepDateFive">
        <div className="date">Date: {sleep.sleepDataFive[0]}</div>
        <div className="start">Start: {sleep.sleepDataFive[1]}</div>
        <div className="end">End: {sleep.sleepDataFive[2]}</div>
        <div className="duration">Sleep Duration: {sleep.sleepDataFive[3]/60}m</div>
      </div>
      <div className="sleepDate sleepDateFour">
        <div className="date">Date: {sleep.sleepDataFour[0]}</div>
        <div className="start">Start: {sleep.sleepDataFour[1]}</div>
        <div className="end">End: {sleep.sleepDataFour[2]}</div>
        <div className="duration">Sleep Duration: {sleep.sleepDataFour[3]/60}m</div>
      </div>
      <div className="sleepDate sleepDateThree">
        <div className="date">Date: {sleep.sleepDataThree[0]}</div>
        <div className="start">Start: {sleep.sleepDataThree[1]}</div>
        <div className="end">End: {sleep.sleepDataThree[2]}</div>
        <div className="duration">Sleep Duration: {sleep.sleepDataThree[3]/60}m</div>
      </div>
      <div className="sleepDate sleepDateTwo">
        <div className="date">Date: {sleep.sleepDataTwo[0]}</div>
        <div className="start">Start: {sleep.sleepDataTwo[1]}</div>
        <div className="end">End: {sleep.sleepDataTwo[2]}</div>
        <div className="duration">Sleep Duration: {sleep.sleepDataTwo[3]/60}m</div>
      </div>
      <div className="sleepDate sleepDateOne">
        <div className="date">Date: {sleep.sleepDataOne[0]}</div>
        <div className="start">Start: {sleep.sleepDataOne[1]}</div>
        <div className="end">End: {sleep.sleepDataOne[2]}</div>
        <div className="duration">Sleep Duration: {sleep.sleepDataOne[3]/60}m</div>
      </div>
    </div>
  )
}

export default DisplaySleeps