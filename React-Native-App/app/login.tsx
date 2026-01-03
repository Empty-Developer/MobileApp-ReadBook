import React from 'react'
import {
	Image,
	StyleSheet,
	Text,
	View,
	Pressable,
	TextInput,
	useColorScheme
} from 'react-native'
import { globalStyle } from '../style/global_style'
import { useFonts } from 'expo-font'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Link, Stack } from 'expo-router'
import { useRouter } from 'expo-router'
import { button } from '../components/ui/Button/button'
import { google_button } from '../components/ui/Button/button_google'
import { Colors } from '../constants/Colors'

const Login = () => {

	const colorScheme = useColorScheme() ?? 'light'
	
	const theme = Colors[colorScheme]

	const router = useRouter()

  	const [fontsLoaded] = useFonts({
			'ge-bold': require('../assets/font/Geist-Bold.ttf'),
			'ge-regular': require('../assets/font/Geist-Regular.ttf'),
			'ge-medium': require('../assets/font/Geist-Medium.ttf'),
	})

  	if(!fontsLoaded) {
		return (
			<View style={globalStyle.main}>
				<Text>Loading...</Text>
			</View>
		)
	}

return (
	<View style={[globalStyle.main, { backgroundColor: theme.background }]}>
		<View>
			{/* logo */}
			<Image
				style={styles.image}
				source={require('../assets/images/logo.png')}
			/>
		</View>
		<View>
			{/* h1 */}
			<Text style={[styles.h1, {color: theme.text}]}>Welcome back</Text>
			{/* text */}
			<Text style={[styles.description, {color: theme.description}]}>Let’s get you in to Read Book</Text>
		</View>
		{/* input */}
		<View>
			<TextInput placeholder='Your Email...'></TextInput>
			<TextInput placeholder='Your Password...'></TextInput>
		</View>
		{/* link */}
		<View>
			<Link href={'/recovery_password'} style={styles.text_link}>
				Forgot password?
			</Link>
		</View>
		{/* button */}
		<View style={{ width: '100%' }}>
			<Pressable
				style={({ pressed }) => [button.btn, pressed && button.pressed]}
				onPress={() => router.push('/hello_screen')}
			>
				<Text style={button.text_button}>Sign in</Text>
			</Pressable>
		</View>
		{/* line recovery*/}
		<View style={styles.line_container}>
			<View style={styles.line_left} />
			<Text style={styles.line_text}>or</Text>
			<View style={styles.line_right} />
		</View>
		{/* google button */}
		<View style={{ width: '100%' }}>
			<Pressable
				style={({ pressed }) => [
					google_button.btn_google,
					pressed && google_button.pressed_google,
				]}
			>
				<AntDesign name='google' size={24} color='#000000' />
				<Text style={google_button.text_button_google}>
					Sign In With Google
				</Text>
			</Pressable>
		</View>
		{/* link registration */}
		<Link href={'/registration'} style={styles.text_link}>
			Don’t have an account?
		</Link>
	</View>
)
}

export default Login

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