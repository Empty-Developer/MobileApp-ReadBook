import {View, ViewProps, useColorScheme } from 'react-native'
import { Colors } from '../../../constants/Colors'
// for further consideration
// import {SafeAreaView} from 'react-native-safe-area-context' 
import React from 'react'

const ThemedView = ({style, ...props}: ViewProps) => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme]
  return (
    <View style={[{
        backgroundColor: theme.background,
        flex: 1,
        paddingHorizontal: 16,
        }, style]}
        {...props}
    />
  )
}

export default ThemedView