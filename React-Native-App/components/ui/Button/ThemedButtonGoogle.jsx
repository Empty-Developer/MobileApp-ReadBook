import { Pressable, StyleSheet } from 'react-native'

const ThemedButtonGoogle = ({ style, ...props }) => {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.btn_google,          
        pressed && styles.pressed_google,  
        style               
      ]}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  btn_google: {
		backgroundColor: '#FFFFFF',
		width: '100%',
		height: 53,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		flexDirection: 'row', // icon
		gap: 10, // icon
	},

	pressed_google: {
		opacity: 0.8,
	},
})

export default ThemedButtonGoogle