import { TextInput, View, Text, TextInputProps, useColorScheme } from 'react-native'
import { Colors } from '@/constants/Colors'
import { globalStyle } from '@/style/global_style'
import React from 'react'
import { useFonts } from 'expo-font'

const ThemedTextInput = ({style, ...props}: TextInputProps)  => {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme] 

  const [fontsLoaded] = useFonts({
        'ge-bold': require('@/assets/font/Geist-Bold.ttf'),
        'ge-regular': require('@/assets/font/Geist-Regular.ttf'),
        'ge-medium': require('@/assets/font/Geist-Medium.ttf'),
    })

    if(!fontsLoaded) {
        return (
          <View style={globalStyle.main}>
            <Text>Loading...</Text>
          </View>
        )
      }

  return (
    <TextInput 
      style={[
        {
          backgroundColor: theme.layout_theme,
          color: theme.description,
          borderColor: theme.background_button,
          borderStyle: 'solid',
          borderWidth: 1,
          padding: 16,
          borderRadius: 16,
          height: 53,
          fontFamily: 'ge-regular',
          width: '100%',
          marginBottom: 11,
        }
      ]}
      {...props}
    />
  )
}

export default ThemedTextInput
