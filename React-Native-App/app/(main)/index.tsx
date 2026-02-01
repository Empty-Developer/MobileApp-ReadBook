import { View } from 'react-native'
import React from 'react'
import { globalStyle } from '../../style/global_style'
import { useFonts } from 'expo-font'
import ThemedView from '@/components/ui/View/ThemedView'

const Index = () => {
	useFonts({
			'ge-bold': require('@/assets/font/Geist-Bold.ttf'),
			'ge-regular': require('@/assets/font/Geist-Regular.ttf'),
			'ge-medium': require('@/assets/font/Geist-Medium.ttf'),
	})
	return (
		<ThemedView style={[globalStyle.main]}>
			<View>
				{/* placeholder */}
			</View>
		</ThemedView>
	)
}

export default Index
