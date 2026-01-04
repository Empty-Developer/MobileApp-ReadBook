import { StyleSheet, Text, View, Pressable, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import { globalStyle } from '../style/global_style'
import { useRouter } from 'expo-router'
import React from 'react'

const hello_screen = () => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme]
    const router = useRouter()

  return (
		<View style={[globalStyle.main, { backgroundColor: theme.background }]}>
			<View style={{ width: '100%' }}>
				<Pressable
					style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
					onPress={() => router.push('/home')}
				>
					<Text style={styles.text_button}>Let’s go</Text>
				</Pressable>
			</View>
		</View>
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