import { createContext, useRef } from "react";




export const SectionsContext = createContext(null)

const SectionsContextProvider = ({children})=>{
  const hero = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)

  return (
    <SectionsContext.Provider value={{hero,about, projects}}>
      {children}
    </SectionsContext.Provider>
  )
}

export default SectionsContextProvider