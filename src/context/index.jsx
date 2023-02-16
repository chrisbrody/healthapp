import { useContext, createContext } from "react";

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react'
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    // const { contract } = useContract('0x753292b8C6A1c94A30a3bf940528274B769a8A47')
    // const { contract } = useContract('0x4004104af546bbfE5E8CEb027370A667F175610D')
    // const { contract } = useContract('0xCb2b7aaE1571789762699A1Ca740135A9308Cc12')
    // const { contract, isLoading, error } = useContract('0x578E6a74295C50F219E4e050A18f9F05670D4819')
    const { contract, isLoading, error } = useContract('0xbcB2A22710688E1eE837D788e7c0E9feFAb0Ff35')

    const { mutateAsync: createSleepDay } = useContractWrite(contract, 'createSleepDay')
    const { mutateAsync: createReadinessDay } = useContractWrite(contract, 'createReadinessDay')
    const { mutateAsync: createObservation } = useContractWrite(contract, 'createObservation')

    const address = useAddress();

    // create sleep data 
    const publishSleepDay = async (sleepData) => {
        console.log(sleepData);
        try {
            const data = await createSleepDay([
                address,
                [
                    sleepData[6].summary_date,
                    sleepData[6].bedtime_start,
                    sleepData[6].bedtime_end,
                    String(sleepData[6].duration)
                ],
                [
                    sleepData[5].summary_date,
                    sleepData[5].bedtime_start,
                    sleepData[5].bedtime_end,
                    String(sleepData[5].duration)
                ],
                [
                    sleepData[4].summary_date,
                    sleepData[4].bedtime_start,
                    sleepData[4].bedtime_end,
                    String(sleepData[4].duration)
                ],
                [
                    sleepData[3].summary_date,
                    sleepData[3].bedtime_start,
                    sleepData[3].bedtime_end,
                    String(sleepData[3].duration)
                ],
                [
                    sleepData[2].summary_date,
                    sleepData[2].bedtime_start,
                    sleepData[2].bedtime_end,
                    String(sleepData[2].duration)
                ],
                [
                    sleepData[1].summary_date,
                    sleepData[1].bedtime_start,
                    sleepData[1].bedtime_end,
                    String(sleepData[1].duration)
                ],
                [
                    sleepData[0].summary_date,
                    sleepData[0].bedtime_start,
                    sleepData[0].bedtime_end,
                    String(sleepData[0].duration)
                ]
            ])

            console.log("contract call success", data);
            return data;
        } catch (error) {
            console.log("contract call failure", error);
        }
    }

    // get Sleep data
    const getSleepDays = async () => {
        const sleeps = await contract.call('getSleepDays')

        return sleeps
    }

    // create Readiness data 
    const publishReadinessDay = async (readinessData) => {
        console.log(contract, readinessData);
        try {
            const data = await createReadinessDay([
                address,
                [
                    String(readinessData[6].summary_date),
                    String(readinessData[6].score),
                    String(readinessData[6].score_activity_balance),
                    String(readinessData[6].score_sleep_balance),
                    String(readinessData[6].score_temperature)
                ],
                [
                    String(readinessData[5].summary_date),
                    String(readinessData[5].score),
                    String(readinessData[5].score_activity_balance),
                    String(readinessData[5].score_sleep_balance),
                    String(readinessData[5].score_temperature)
                ],
                [
                    String(readinessData[4].summary_date),
                    String(readinessData[4].score),
                    String(readinessData[4].score_activity_balance),
                    String(readinessData[4].score_sleep_balance),
                    String(readinessData[4].score_temperature)
                ],
                [
                    String(readinessData[3].summary_date),
                    String(readinessData[3].score),
                    String(readinessData[3].score_activity_balance),
                    String(readinessData[3].score_sleep_balance),
                    String(readinessData[3].score_temperature)
                ],
                [
                    String(readinessData[2].summary_date),
                    String(readinessData[2].score),
                    String(readinessData[2].score_activity_balance),
                    String(readinessData[2].score_sleep_balance),
                    String(readinessData[2].score_temperature)
                ],
                [
                    String(readinessData[1].summary_date),
                    String(readinessData[1].score),
                    String(readinessData[1].score_activity_balance),
                    String(readinessData[1].score_sleep_balance),
                    String(readinessData[1].score_temperature)
                ],
                [
                    String(readinessData[0].summary_date),
                    String(readinessData[0].score),
                    String(readinessData[0].score_activity_balance),
                    String(readinessData[0].score_sleep_balance),
                    String(readinessData[0].score_temperature)
                ]
            ])
            console.log("contract call success", data);
            return data;
        } catch (error) {
            console.log("contract call failure", error)
        }
    }

    // get Readiness data 
    const getReadinessDays = async () => {
        const readinesss = await contract.call('getReadinessDays')

        return readinesss
    }

    // create Observation data 
    const publishObservation = async (observationData) => {
        console.log(contract, observationData);

        try {
            const data = await createObservation([
                address,
                [observationData.observationText],
                [observationData.dateTime],
                [observationData.dataOwner]
            ])

            console.log("contract call success", data);
            return data;
        } catch (error) {
            console.log("contract call failure", error)
        }
    }

    // get Observation data 
    const getObservations = async () => {
        const observations = await contract.call('getObservations')

        return observations
    }

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                createSleepDay: publishSleepDay,
                getSleepDays,
                createReadinessDay: publishReadinessDay,
                getReadinessDays,
                createObservation: publishObservation,
                getObservations,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)