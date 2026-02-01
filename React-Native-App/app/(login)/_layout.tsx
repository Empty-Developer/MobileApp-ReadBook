import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { Colors } from '@/constants/Colors'

export default function LoginLayout() {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme]

  return (
    <Stack screenOptions={{ 
      headerShown: false,
      contentStyle: { backgroundColor: theme.background }
    }}>
      <Stack.Screen name="hello_screen" />
      <Stack.Screen name="login" />
      <Stack.Screen name="registration" />
      <Stack.Screen name="recovery_password" />
      <Stack.Screen name="recovery_password_code" />
    </Stack>
  )
}