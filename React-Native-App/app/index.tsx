import React, { useEffect } from 'react'
import { Image, StyleSheet, View} from 'react-native'
import { globalStyle } from '../style/global_style'
import { router } from 'expo-router'


const Home = () => {
  useEffect(() => {
		const timerMoment = setTimeout(() => {
      
			router.replace('/login')

		}, 4000)

		return () => {
			clearTimeout(timerMoment)
		}
	}, [])

	return (
		<View style={globalStyle.main}>
			<View style={styles.logo_container}>
				<Image
					style={styles.image}
					source={require('../assets/images/logo.png')}
				/>
			</View>
		</View>
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