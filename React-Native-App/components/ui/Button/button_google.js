import { StyleSheet } from 'react-native'

export const google_button = StyleSheet.create({
	// button google
	btn_google: {
		backgroundColor: '#FFFFFF',
		width: '100%',
		height: 53,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		flexDirection: 'row', // icon
		gap: 10, // icon
	},

	pressed_google: {
		backgroundColor: '#F2F2F2',
		opacity: 0.8,
	},

	text_button_google: {
		color: '#0D0D0D',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'ge-medium',
		fontSize: 20,
	},
})
