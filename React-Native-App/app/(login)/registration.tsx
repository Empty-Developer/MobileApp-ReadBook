import React from 'react'
import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { globalStyle } from '@/style/global_style'
import { useFonts } from 'expo-font'
import { Link, Stack } from 'expo-router'

const registration = () => {

  const [fontsLoaded] = useFonts({
      'ge-bold': require('@/assets/font/Geist-Bold.ttf'),
      'ge-regular': require('@/assets/font/Geist-Regular.ttf'),
    })
  
    if(!fontsLoaded) {
    return (
      <View style={globalStyle.main}>
        <Text>Loading...</Text>
      </View>
    )
       
    }

	return (
		<View style={globalStyle.main}>
			<View>
				{/* logo */}
				<Image
					style={styles.image}
					source={require('@/assets/images/logo-light.png')}
				/>
			</View>
			<View>
				{/* h2 */}
				<Text style={styles.h1}>Welcome back</Text>
				{/* text */}
				<Text style={styles.description}>
					Enter your details below and start reading.
				</Text>
			</View>
			{/* line recovery*/}
			<View style={styles.line_container}>
				<View style={styles.line_left} />
				<Text style={styles.line_text}>or</Text>
				<View style={styles.line_right} />
			</View>
			<Link href={'/login'} style={styles.text_link}>
				Already have an account?
			</Link>
		</View>
	)
}

export default registration

const styles = StyleSheet.create({
	// logo
	image: {
		width: 158,
		height: 30,
	},
	// main text
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

	// dividing line
	line_container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 25,
	},

	line_text: {
		fontSize: 20,
		color: '#0D0D0D',
		marginHorizontal: 5,
		fontFamily: 'ge-regular',
	},

	line_right: {
		flex: 1,
		height: 1,
		backgroundColor: '#0D0D0D',
	},

	line_left: {
		flex: 1,
		height: 1,
		backgroundColor: '#0D0D0D',
	},

	// recovery link
	text_link: {
		fontSize: 20,
		fontFamily: 'ge-regular',
		color: '#373737',
		paddingVertical: 30,
	},
})