import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Colors } from '@/constants/Colors'
import { globalStyle } from '@/style/global_style'
import { useFonts } from 'expo-font'
// hook background all screen
import ThemedView from '@/components/ui/View/ThemedView'
// hook logo theme
import ThemedLogo from '@/components/ui/Logo/ThemedLogo'
// hook text h1, description
import ThemedText from '@/components/ui/Text/ThemedText' 
import ThemedButton from '@/components/ui/Button/ThemedButton'
import ThemedButtonGoogle from '@/components/ui/Button/ThemedButtonGoogle'
import { Link, router } from 'expo-router'
import { useRouter } from 'expo-router'
// data email and password
import { IAuthFormData } from '@/types/auth.interface'
import AuthFields from '@/auth/Field/AuthField'

// library function for hook 
import { SubmitHandler, useForm } from 'react-hook-form'
const recovery_password = () => {
  const colorScheme = useColorScheme() ?? 'light'
    
  const theme = Colors[colorScheme]

  const [fontsLoaded] = useFonts({
        'ge-bold': require('@/assets/font/Geist-Bold.ttf'),
        'ge-regular': require('@/assets/font/Geist-Regular.ttf'),
        'ge-medium': require('@/assets/font/Geist-Medium.ttf'),
  })

  // login hook-form
  const {handleSubmit, reset, control} = useForm<IAuthFormData>({
    mode: 'onChange'
  })

  const handleCode = async () => {
        await handleSubmit(onSubmit)();
        router.push('/recovery_password_code');
  };
  
  // I receive user data
  const onSubmit: SubmitHandler<IAuthFormData> = data =>{
    console.log(data.email)
    console.log(data.password)
  }

  return (
    <ThemedView style={[globalStyle.main]}>
      <View>
			  {/* logo */}
			  <ThemedLogo style={styles.image}/>
		  </View>

      <View>
			  {/* h1 */}
			  <ThemedText style={styles.h1} >Reset password</ThemedText>
			  {/* text */}
			  <ThemedText style={styles.description} description={true}>
				  Please enter your new password and email to verify your data.
			  </ThemedText>
		  </View>
      {/* login */}
      <View style={{ width: '100%' }}>
			  <AuthFields control={control}/>
		  </View>

        {/* button */}
		  <View style={{ 
        width: '100%',
        marginTop: 35,
       }}>
			  {/* it is value for button  */}
			  <ThemedButton onPress={
				  handleCode
			  	} style={undefined}>
			  	<Text style={styles.text_button}>Continue</Text>
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
      <Link
        href={'/login'}
        style={[styles.text_link, { color: theme.description }]}
      >
        Remembered your password?
      </Link>
    </ThemedView>
  )
}

export default recovery_password

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