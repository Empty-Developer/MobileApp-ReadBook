import { Text, TextProps, useColorScheme } from 'react-native'
import { Colors } from '@/constants/Colors'
import React from 'react'

const ThemedText = ({style, description = false, ...props}: TextProps & { description?: boolean }) => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme] 

    const textColor = description ? theme.description : theme.text
  return (
    <Text 
        style={[{color: textColor}, style]}
        {...props}
    />
  )
}

export default ThemedText