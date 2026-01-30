import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { globalStyle } from '../../style/global_style'
import { Colors } from '../../constants/Colors'
import { useFonts } from 'expo-font'
import ThemedLogo from '@/components/ui/Logo/ThemedLogo'
import ThemedView from '@/components/ui/View/ThemedView'
import Feather from '@expo/vector-icons/Feather';

const index = () => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme]

	const [fontsLoaded] = useFonts({
			'ge-bold': require('@/assets/font/Geist-Bold.ttf'),
			'ge-regular': require('@/assets/font/Geist-Regular.ttf'),
			'ge-medium': require('@/assets/font/Geist-Medium.ttf'),
	})
	return (
		<ThemedView style={[globalStyle.main]}>
			<View>
				{/* logo */}
				<ThemedLogo style={styles.image}/>
				<View>
					<Feather name="settings" size={24} color="black" />
				</View>
			</View>
		</ThemedView>
	)
}

export default index

const styles = StyleSheet.create({
	// logo
	image: {
		width: 158,
		height: 30,
	},
})
