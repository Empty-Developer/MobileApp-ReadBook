import { StyleSheet } from 'react-native'

export const button = StyleSheet.create({
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
