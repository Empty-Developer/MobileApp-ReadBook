import React, { useEffect } from 'react'
import { Image, StyleSheet, View} from 'react-native'
import { globalStyle } from '@/style/global_style'
import { router } from 'expo-router'
import ThemedView from '@/components/ui/View/ThemedView'
// hook logo theme
import ThemedLogo from '@/components/ui/Logo/ThemedLogo'
const Home = () => {
  useEffect(() => {
		const timerMoment = setTimeout(() => {
      
			router.replace('/login')

		}, 2500)

		return () => {
			clearTimeout(timerMoment)
		}
	}, [])

	return (
		<ThemedView style={globalStyle.main}>
			<View style={styles.logo_container}>
				<ThemedLogo
					style={styles.image}/>
			</View>
		</ThemedView>
	)
}

export default Home

const styles = StyleSheet.create({
	logo_container: {
		flex: 1,
		justifyContent: 'center',
	},
	image: {
		width: 256,
		height: 51,
	},
})