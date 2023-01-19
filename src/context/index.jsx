import { useContext, createContext } from "react";

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react'
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    // const { contract } = useContract('0x753292b8C6A1c94A30a3bf940528274B769a8A47')
    // const { contract } = useContract('0x4004104af546bbfE5E8CEb027370A667F175610D')
    // const { contract } = useContract('0xCb2b7aaE1571789762699A1Ca740135A9308Cc12')
    const { contract } = useContract('0xfE7ac1624b1580FB8BD36991B8b1E5991610e798')

    const { mutateAsync: createSleepDay } = useContractWrite(contract, 'createSleepDay')

    const address = useAddress();

    const publishSleepDay = async (sleepData) => {
        console.log(String(sleepData[6].duration));
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
        } catch (error) {
            console.log("contract call failure", error);
        }
    }

    const getSleepDays = async () => {
        const sleeps = await contract.call('getSleepDays')

        return sleeps
    }

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                createSleepDay: publishSleepDay,
                getSleepDays
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)