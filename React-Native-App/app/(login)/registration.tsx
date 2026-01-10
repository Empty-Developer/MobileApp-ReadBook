import React from 'react'
import { Image, StyleSheet, Text, View, Pressable, useColorScheme } from 'react-native'
import { globalStyle } from '@/style/global_style'
import { useFonts } from 'expo-font'
import { Link, Stack } from 'expo-router'
import { Colors } from '@/constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useRouter } from 'expo-router'
// hooks
import ThemedView from '@/components/ui/View/ThemedView'
import ThemedText from '@/components/ui/Text/ThemedText' 
import ThemedLogo from '@/components/ui/Logo/ThemedLogo'
import ThemedButton from '@/components/ui/Button/ThemedButton'
import ThemedButtonGoogle from '@/components/ui/Button/ThemedButtonGoogle'
import ThemedTextInput from '@/components/ui/Input/ThemedTextInput'

const registration = () => {

	const colorScheme = useColorScheme() ?? 'light'
		
	const theme = Colors[colorScheme]

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

	const router = useRouter()

	return (
		<ThemedView style={globalStyle.main}>
			<View>
				{/* logo */}
				<ThemedLogo style={styles.image}/>
			</View>
			<View>
				{/* h2 */}
				<ThemedText style={styles.h1} >Welcome back</ThemedText>
				{/* text */}
				<ThemedText style={styles.description} description={true}>
					Enter your details below and start reading.
				</ThemedText>
			</View>

			<View style={{ width: '100%' }}>
				<ThemedTextInput keyboardType='email-address' placeholder='Your Email...' />
				<ThemedTextInput secureTextEntry placeholder='Your Password...' />
			</View>

			{/* button */}
			<View style={{ width: '100%',
				paddingTop: 25,
			}}>
				<ThemedButton onPress={() => router.push('/hello_screen')} style={undefined}>
					<Text style={styles.text_button}>Registration in</Text>
				</ThemedButton>
			</View>

			{/* line recovery*/}
			
			<View style={styles.line_container}>
				<View style={[styles.line_left, { backgroundColor: theme.layout }]} />
				<Text style={[styles.line_text, { color: theme.layout }]}>or</Text>
				<View style={[styles.line_right, { backgroundColor: theme.layout }]} />
			</View>

			<View style={{ width: '100%' }}>
			<ThemedButtonGoogle style={undefined}>
				<AntDesign name='google' size={24} color={theme.layout_black} />
				<Text style={styles.text_button_google}>Sign In With Google</Text>
			</ThemedButtonGoogle>
			</View>

			<Link href={'/login'} style={[styles.text_link, { color: theme.description }]}>
				Already have an account?
			</Link>
		</ThemedView>
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
		paddingTop: 40,
		paddingBottom: 5,
		fontFamily: 'ge-bold',
	},

	description: {
		fontSize: 20,
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

	// text button google
	text_button_google: {
		color: '#0D0D0D',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'ge-medium',
		fontSize: 20,
	},

	text_button: {
		color: '#D4D4D4',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'ge-medium',
		fontSize: 20,
	},
})