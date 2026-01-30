import { Stack } from 'expo-router'
import { useColorScheme, StyleSheet, StatusBar, View } from 'react-native'
import { Colors } from '@/constants/Colors'
import AuthProvider from '@/providers/auth/AuthProvider'

export default function Layout() {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme]

  return (
    <AuthProvider>
      <View style={styles.container}>
        <StatusBar 
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} 
          backgroundColor={theme.background} 
        />
        <Stack screenOptions={{ 
          headerShown: false,
          contentStyle: { backgroundColor: theme.background }
        }}>
          <Stack.Screen name="(main)" options={{ headerShown: false }}/>
        </Stack>
      </View>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background 
  }
})