import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { globalStyle } from '../../style/global_style'
import { Colors } from '../../constants/Colors'

const user_profile = () => {
	const colorScheme = useColorScheme() ?? 'light'
	const theme = Colors[colorScheme]
	return (
		<View style={[globalStyle.main, { backgroundColor: theme.background }]}>
			<Text>user_profile</Text>
		</View>
	)
}

export default user_profile

const styles = StyleSheet.create({})
