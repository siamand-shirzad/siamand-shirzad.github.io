import { createContext, useRef } from "react";




export const SectionsContext = createContext(null)

const SectionsContextProvider = ({children})=>{
  const refs ={

     hero : useRef(null),
     about : useRef(null),
     projects : useRef(null),
  }
    
  return (
    <SectionsContext.Provider value={refs}>
      {children}
    </SectionsContext.Provider>
  )
}

export default SectionsContextProvider