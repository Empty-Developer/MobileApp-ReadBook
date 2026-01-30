import { createContext, FC, PropsWithChildren, useState, useEffect } from 'react'
import { IContext, TypeUserState } from './auth-provider.interface'
import * as SplashScreen from 'expo-splash-screen'
import { View, ActivityIndicator } from 'react-native'

export const AuthContext = createContext<IContext>({} as IContext) 

SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [user, setUser] = useState<TypeUserState>(null) 
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let mounted = true

        const checkAccessToken = async () => {
            try {
                // logic

                await new Promise(resolve => setTimeout(resolve, 1000))
            } catch (error) {
                
            } finally {
                if (mounted) {
                    setIsLoading(false)
                    await SplashScreen.hideAsync()
                }
            }
        }

        checkAccessToken() 

        return () => {
            mounted = false
        }
    }, [])

    if (isLoading) {
        return null
    }

    return (
        <AuthContext.Provider value={{ user, setUser }}> 
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider