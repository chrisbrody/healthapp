import { useStateContext } from '../context';

import './displayreadiness.css'

const DisplayReadiness = (readiness) => {
  const { address } = useStateContext();


  console.log(readiness.readinessDataOne[4]);

  if(readiness[0] == address) {
    return 
  }

  return (
    <>
      <div className="owner">Readiness Data Owner: {readiness.owner}</div>
      <div className='page__wrapper'>
        <div className='date__wrapper'>
            <div className="date__box dateSeven" key={readiness.readinessDataSeven[0]}>
                <div className="date">Date: {readiness.readinessDataSeven[0]}</div>
                <div className="score">Score: {readiness.readinessDataSeven[1]}</div>
                <div className="score_activity_balance">Score Activity Balance: {readiness.readinessDataSeven[2]}</div>
                <div className="balance">Score Sleep Balance: {readiness.readinessDataSeven[3]}</div>
                <div className="temperature">Score Temperature: {readiness.readinessDataSeven[4]}</div>
            </div>
            <div className="date__box dateSix" key={readiness.readinessDataSix[0]}>
                <div className="date">Date: {readiness.readinessDataSix[0]}</div>
                <div className="score">Score: {readiness.readinessDataSix[1]}</div>
                <div className="score_activity_balance">Score Activity Balance: {readiness.readinessDataSix[2]}</div>
                <div className="balance">Score Sleep Balance: {readiness.readinessDataSix[3]}</div>
                <div className="temperature">Score Temperature: {readiness.readinessDataSix[4]}</div>
            </div>
            <div className="date__box dateFive" key={readiness.readinessDataFive[0]}>
                <div className="date">Date: {readiness.readinessDataFive[0]}</div>
                <div className="score">Score: {readiness.readinessDataFive[1]}</div>
                <div className="score_activity_balance">Score Activity Balance: {readiness.readinessDataFive[2]}</div>
                <div className="balance">Score Sleep Balance: {readiness.readinessDataFive[3]}</div>
                <div className="temperature">Score Temperature: {readiness.readinessDataFive[4]}</div>
            </div>
            <div className="date__box dateFour" key={readiness.readinessDataFour[0]}>
                <div className="date">Date: {readiness.readinessDataFour[0]}</div>
                <div className="score">Score: {readiness.readinessDataFour[1]}</div>
                <div className="score_activity_balance">Score Activity Balance: {readiness.readinessDataFour[2]}</div>
                <div className="balance">Score Sleep Balance: {readiness.readinessDataFour[3]}</div>
                <div className="temperature">Score Temperature: {readiness.readinessDataFour[4]}</div>
            </div>
            <div className="date__box dateThree" key={readiness.readinessDataThree[0]}>
                <div className="date">Date: {readiness.readinessDataThree[0]}</div>
                <div className="score">Score: {readiness.readinessDataThree[1]}</div>
                <div className="score_activity_balance">Score Activity Balance: {readiness.readinessDataThree[2]}</div>
                <div className="balance">Score Sleep Balance: {readiness.readinessDataThree[3]}</div>
                <div className="temperature">Score Temperature: {readiness.readinessDataThree[4]}</div>
            </div>
            <div className="date__box dateTwo" key={readiness.readinessDataTwo[0]}>
                <div className="date">Date: {readiness.readinessDataTwo[0]}</div>
                <div className="score">Score: {readiness.readinessDataTwo[1]}</div>
                <div className="score_activity_balance">Score Activity Balance: {readiness.readinessDataTwo[2]}</div>
                <div className="balance">Score Sleep Balance: {readiness.readinessDataTwo[3]}</div>
                <div className="temperature">Score Temperature: {readiness.readinessDataTwo[4]}</div>
            </div>
            <div className="date__box dateOne" key={readiness.readinessDataOne[0]}>
                <div className="date">Date: {readiness.readinessDataOne[0]}</div>
                <div className="score">Score: {readiness.readinessDataOne[1]}</div>
                <div className="score_activity_balance">Score Activity Balance: {readiness.readinessDataOne[2]}</div>
                <div className="balance">Score Sleep Balance: {readiness.readinessDataOne[3]}</div>
                <div className="temperature">Score Temperature: {readiness.readinessDataOne[4]}</div>
            </div>
        </div>
      </div>
    </>
    
  )
}

export default DisplayReadiness