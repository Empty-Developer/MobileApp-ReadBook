import { Pressable, StyleSheet } from 'react-native'

const ThemedButton = ({ style, ...props }) => {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.btn,          
        pressed && styles.pressed,  
        style               
      ]}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#1A1A1A',
    width: '100%',
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  pressed: {
    opacity: 0.8,
  }
})

export default ThemedButton