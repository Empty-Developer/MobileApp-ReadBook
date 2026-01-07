import { StyleSheet, Text, View, Pressable, useColorScheme } from 'react-native'
import { Colors } from '@/constants/Colors'
import { globalStyle } from '@/style/global_style'
import { useRouter } from 'expo-router'
import React from 'react'
import ThemedButton from '@/components/ui/Button/ThemedButton'
import ThemedView from '@/components/ui/View/ThemedView'
const hello_screen = () => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme]
    const router = useRouter()

  return (
		<ThemedView style={globalStyle.main}>
			<View style={{ width: '100%' }}>
				{/* fuck routing */}
				<ThemedButton onPress={() => router.push('/(main)')} style={undefined}>  
					<Text style={styles.text_button}>Let’s go</Text>
				</ThemedButton>
			</View>
		</ThemedView>
	)
}

export default hello_screen

const styles = StyleSheet.create({
	// button next home
	btn: {
		backgroundColor: '#1A1A1A',
		width: '100%',
		height: 53,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
	},

	pressed: {
		backgroundColor: '#1A1A1A',
		opacity: 0.8,
	},

	text_button: {
		color: '#D4D4D4',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'ge-medium',
		fontSize: 20,
	},
})