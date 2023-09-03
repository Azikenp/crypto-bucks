import { createContext, useState } from "react"


//create context object
export const CryptoContext = createContext({});



//create the provide object
export const CryptoProvider = ({children}) => {
    const [cryptoData, setCryptoData] = useState();

    const getCryptoData = async () => {
        try{
            
        } catch(error){
            console.log(error)
        }
    }


    return(
        <CryptoContext.Provider value={{}}>
            {children}
        </CryptoContext.Provider>
    )
}