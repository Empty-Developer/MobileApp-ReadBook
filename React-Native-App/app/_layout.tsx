import { Stack } from 'expo-router'
import { useColorScheme, StyleSheet, StatusBar } from 'react-native'
import { Colors } from '@/constants/Colors'

export default function Layout() {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme]

  return (
    <>
      <StatusBar 
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} 
        backgroundColor={theme.background} 
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      </Stack>
    </>
  )
}

const styles = StyleSheet.create({})