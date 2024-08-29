import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'


import { NavigationContainer } from '@react-navigation/native'
import { AppwriteContext } from '../appWrite/AppwriteContext'
import LoadingComponents from '../components/LoadingComponents'
import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'



export const Router = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {appwrite, isLoggedIn,setIsLoggedIn} = useContext(AppwriteContext)

    useEffect(() => {
      appwrite
      .getCurrentUser()
      .then(response => {
        setIsLoading(false)
        if (response) {
            setIsLoggedIn(true)
        }
      })
      .catch(_ => {
        setIsLoading(false)
        setIsLoggedIn(false)
      })
    }, [appwrite, setIsLoggedIn])
    
    if (isLoading) {
        return <LoadingComponents />
    }

  return (
    <NavigationContainer>
        {isLoggedIn ? <AppStack /> : <AuthStack/> }
    </NavigationContainer>
  )
}

