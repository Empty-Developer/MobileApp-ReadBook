import { Image, useColorScheme } from 'react-native'
import React from 'react'

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? // logo theme
    require('@/assets/images/logo-dark.png') : 
    require('@/assets/images/logo-light.png') 
  return (
    <Image source={logo} {...props}/>
  )
}

export default ThemedLogo