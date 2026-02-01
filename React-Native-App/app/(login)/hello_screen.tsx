import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Colors } from '@/constants/Colors'
import { globalStyle } from '@/style/global_style'
import { useRouter } from 'expo-router'
import { useFonts } from 'expo-font'
import Feather from '@expo/vector-icons/Feather';
import React from 'react'
import ThemedButton from '@/components/ui/Button/ThemedButton'
import ThemedView from '@/components/ui/View/ThemedView'
import ThemedText from '@/components/ui/Text/ThemedText' 

// hook logo theme
import ThemedLogo from '@/components/ui/Logo/ThemedLogo'

const HelloScreen = () => {
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
		<ThemedView style={globalStyle.main}>
			{/* logo*/}
			<View>
				<ThemedLogo style={styles.image}/>
			</View>
			{/* icon book*/}
			<View>
				<Feather name="book-open" size={253} style={{color: theme.layout}} />
			</View>

			{/* text information for oll */}
			<View>
				<ThemedText style={styles.h3} >These are applications for reading books from all authors in the world.</ThemedText>
			</View>

				{/* button next */}
				<View style={{ width: '100%' }}>
					<ThemedButton onPress={() => router.push('/(main)')} style={undefined}>
						<Text style={styles.text_button}>Lets go</Text>
					</ThemedButton>
				</View>
		</ThemedView>
	)
}

		export default HelloScreen

const styles = StyleSheet.create({
	// button next home
	btn: {
		width: '100%',
		height: 53,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
	},

	pressed: {
		opacity: 0.8,
	},

	text_button: {
		color: '#D4D4D4',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'ge-medium',
		fontSize: 20,
	},

	image: {
		width: 260,
		height: 51,
		marginBottom: 93,
		marginTop: 93,
	},

	h3: {
		fontSize: 24,
		textAlign: 'left',
		paddingTop: 82,
		paddingBottom: 31,
		fontFamily: 'ge-bold',
	},
})