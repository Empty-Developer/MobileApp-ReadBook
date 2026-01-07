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
import { globalStyle } from '@/style/global_style'
import { useFonts } from 'expo-font'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Link } from 'expo-router'
import { useRouter } from 'expo-router'
// import { button } from '../components/ui/Button/button'
// import { google_button } from '../components/ui/Button/button_google'
import { Colors } from '@/constants/Colors'

// hook background all screen
import ThemedView from '@/components/ui/View/ThemedView'
// hook logo theme
import ThemedLogo from '@/components/ui/Logo/ThemedLogo'
// hook text h1, description
import ThemedText from '@/components/ui/Text/ThemedText' 
// hooks for buttons jsx format (bad)
import ThemedButton from '@/components/ui/Button/ThemedButton'
import ThemedButtonGoogle from '@/components/ui/Button/ThemedButtonGoogle'
//
import ThemedTextInput from '@/components/ui/Input/ThemedTextInput'
const Login = () => {

	const colorScheme = useColorScheme() ?? 'light'
	
	const theme = Colors[colorScheme]

	const router = useRouter()

  	const [fontsLoaded] = useFonts({
			'ge-bold': require('@/assets/font/Geist-Bold.ttf'),
			'ge-regular': require('@/assets/font/Geist-Regular.ttf'),
			'ge-medium': require('@/assets/font/Geist-Medium.ttf'),
	})

  	if(!fontsLoaded) {
		return (
			<View style={globalStyle.main}>
				<Text>Loading...</Text>
			</View>
		)
	}

return (
	<ThemedView style={[globalStyle.main]}>
		<View>
			{/* logo */}
			<ThemedLogo style={styles.image}/>
		</View>
		<View>
			{/* h1 */}
			<ThemedText style={styles.h1} >Welcome back</ThemedText>
			{/* text */}
			<ThemedText style={styles.description} description={true}>
				Let’s get you in to Read Book
			</ThemedText>
		</View>
		{/* input */}
		<View style={{ width: '100%' }}>
			<ThemedTextInput keyboardType='email-address' placeholder='Your Email...' />
			<ThemedTextInput secureTextEntry placeholder='Your Password...' />
		</View>
		{/* link */}
		<View >
			<Link
				href={'/recovery_password'}
				style={[styles.text_link, { color: theme.description }]}
			>
				Forgot password?
			</Link>
		</View>
		{/* button */}
		<View style={{ width: '100%' }}>
			<ThemedButton onPress={() => router.push('/hello_screen')} style={undefined}>
				<Text style={styles.text_button}>Sign in</Text>
			</ThemedButton>
		</View>
		{/* line recovery*/}
		<View style={styles.line_container}>
			<View style={[styles.line_left, { backgroundColor: theme.layout }]} />
			<Text style={[styles.line_text, { color: theme.layout }]}>or</Text>
			<View style={[styles.line_right, { backgroundColor: theme.layout }]} />
		</View>
		{/* google button */}
		<View style={{ width: '100%' }}>
			<ThemedButtonGoogle style={undefined}>
				<AntDesign name='google' size={24} color={theme.layout_black} />
				<Text style={styles.text_button_google}>Sign In With Google</Text>
			</ThemedButtonGoogle>
		</View>
		{/* link registration */}
		<Link
			href={'/registration'}
			style={[styles.text_link, { color: theme.description }]}
		>
			Don’t have an account?
		</Link>
	</ThemedView>
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
		textAlign: 'center',
		paddingBottom: 49,
		fontFamily: 'ge-regular',
	},
	// dividing line
	line_container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 25,
		marginTop: 14,
	},

	line_text: {
		fontSize: 20,
		marginHorizontal: 5,
		fontFamily: 'ge-regular',
	},

	line_right: {
		flex: 1,
		height: 1,
	},

	line_left: {
		flex: 1,
		height: 1,
	},

	// recovery link
	text_link: {
		fontSize: 20,
		fontFamily: 'ge-regular',
		color: '#373737',
		paddingVertical: 30,
	},
	// text sign in
	text_button: {
		color: '#D4D4D4',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'ge-medium',
		fontSize: 20,
	},

	// text button google
	text_button_google: {
		color: '#0D0D0D',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'ge-medium',
		fontSize: 20,
	},
})