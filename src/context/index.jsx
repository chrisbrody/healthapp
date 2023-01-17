import { useContext, createContext } from "react";

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react'
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0x753292b8C6A1c94A30a3bf940528274B769a8A47')

    const { mutateAsync: createSleepDay } = useContractWrite(contract, 'createSleepDay')

    const address = useAddress();
    const connect = useMetamask();

    console.log(address);

    const publishSleepDay = async (sleepData) => {
        try {
            const data = await createSleepDay([
                address,
                sleepData.summary_date,
                sleepData.bedtime_start,
                sleepData.bedtime_end,
            ])

            console.log("contract call success", data);
        } catch (error) {
            console.log("contract call failure", error);
        }
    }

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                createSleepDay: publishSleepDay
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)