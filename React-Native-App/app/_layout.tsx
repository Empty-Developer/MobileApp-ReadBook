import { Stack } from 'expo-router'
import { useColorScheme, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'

export default function Layout() {
	const colorScheme = useColorScheme() ?? 'light'

	const theme = Colors[colorScheme]

	

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="(tabs)" options={{headerShown: false}}/>
		</Stack>
	)

}
