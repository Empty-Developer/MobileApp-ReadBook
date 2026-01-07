import { Pressable, StyleSheet, Text } from 'react-native'
import { icon } from "@/constants/Icon"
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'

const TabBarButton = ({
	onPress,
	onLongPress,
	isFocused,
	routeName,
	color,
	label,
}: {
	onPress: () => void
	onLongPress: () => void
	isFocused: boolean
	routeName: string
    color: string
    label: string
}) => {

    const scale = useSharedValue(0)
    
    useEffect(() => {
        scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 })
    },[scale, isFocused])

    // glass effect
    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0])
        
        return {
            opacity: opacity
        }
    })

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2])
        const top = interpolate(scale.value, [0, 1], [0, 9])
        return {
            transform: [{
                scale: scaleValue
            }],
            top
        }
    })

    const [fontsLoaded] = useFonts({
                'ge-medium': require('@/assets/font/Geist-Medium.ttf'),
        })

	return (
		<Pressable
			onPress={() => onPress()}
			onLongPress={() => onLongPress()}
			style={styles.tab_barItem}
		>
            <Animated.View style={animatedIconStyle}>    
			    {icon[routeName as keyof typeof icon]?.({
			    	color: isFocused ? '#0D0D0D' : '#D4D4D4',
			    })}
            </Animated.View>
			<Animated.Text 
                style={[{ 
                    color: isFocused ? '#0D0D0D' : '#D4D4D4', 
                    fontSize: 12,
                    fontFamily: 'ge-medium'
                }, animatedTextStyle]}>
                    {label}
            </Animated.Text>
		</Pressable>
	)
}

export default TabBarButton

const styles = StyleSheet.create({
    // style tabs
	tab_barItem: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 5,
		paddingVertical: 10,
	},
})