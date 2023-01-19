import './displaysleeps.css'

const DisplaySleeps = (sleep) => {
  console.log(sleep);

  return (
    <div className='sleepDate__wrapper'>
      <div className="owner">Sleep Data Owner: {sleep.owner}</div>
      <div className="sleepDate sleepDateSeven">
        <div className="date">Date: {sleep.sleepDataSeven[0]}</div>
        <div className="start">Start: {sleep.sleepDataSeven[1]}</div>
        <div className="end">End: {sleep.sleepDataSeven[2]}</div>
        <div className="duration">Sleep Duration: {sleep.sleepDataSeven[3]/60}m</div>
      </div>
      <div className="sleepDate sleepDateSix">
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