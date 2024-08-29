import { View, Text } from 'react-native'
import React, { createContext, FC, PropsWithChildren, useState } from 'react'

import Appwrite from './service'

type AppContextType = {
    appwrite: Appwrite;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppwriteContext = createContext<AppContextType>({
    appwrite: new Appwrite(),
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})

export const AppwriteProvider: FC<PropsWithChildren> = ({children}) => {

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const defaultvalue = {
        appwrite: new Appwrite(),
        isLoggedIn,
        setIsLoggedIn,
    }

  return (
    <AppwriteContext.Provider value={defaultvalue}>
      {children}
    </AppwriteContext.Provider>
  )
}

export default AppwriteContext