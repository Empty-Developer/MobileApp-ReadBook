import { Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { globalStyle } from '../../style/global_style'
import { Colors } from '../../constants/Colors'

const Like = () => {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme]
	return (
		<View style={[globalStyle.main, { backgroundColor: theme.background }]}>
			<Text>like</Text>
		</View>
	)
}

export default Like
