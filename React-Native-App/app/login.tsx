import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { globalStyle } from '../style/global_style'
import { useFonts } from 'expo-font'


const Login = () => {

  const [fontsLoaded] = useFonts({
		'ge-bold': require('../assets/font/Geist-Bold.ttf'),
		'ge-regular': require('../assets/font/Geist-Regular.ttf'),
	})

  if(!fontsLoaded) {
    <View style={globalStyle.main}>
			<Text>Loading...</Text>
		</View> 
  }

  return (
		<View style={globalStyle.main}>
			<View>
				{/* logo */}
				<Image
					style={styles.image}
					source={require('../assets/images/logo.png')}
				/>
			</View>
			<View>
				{/* h2 */}
				<Text style={styles.h1}>Welcome back</Text>
				{/* text */}
				<Text style={styles.description}>Let’s get you in to Read Book</Text>
			</View>
			{/* input */}
			<View></View>
			{/* link */}
			<View></View>
			{/* button */}
			<View></View>
		</View>
	)
}

export default Login

const styles = StyleSheet.create({
	image: {
		width: 158,
		height: 30,
	},
	h1: {
		fontSize: 40,
		textAlign: 'center',
		color: '#0D0D0D',
		paddingTop: 40,
		paddingBottom: 5,
		fontFamily: 'ge-bold',
	},
	description: {
		fontSize: 20,
		color: '#373737',
		textAlign: 'center',
		paddingBottom: 60,
		fontFamily: 'ge-regular',
	},
})