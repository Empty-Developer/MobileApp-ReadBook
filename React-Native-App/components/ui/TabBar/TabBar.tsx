import { 
  View, 
  StyleSheet, 
  LayoutChangeEvent 
} from "react-native"
import { BottomTabBarProps } from '@react-navigation/bottom-tabs' 
import TabBarButton from "@/components/ui/TabBar/TabBarButton"
import { useState } from "react"
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring 
} from "react-native-reanimated"

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  
  // circle animated background
  const [dimension, setDimension] = useState({ height: 20, width: 100 })
  
  // the length depends on the number of tabs on the panel
  const buttonWidth = dimension.width / state.routes.length

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimension({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    })
  }

  const tabPositionX = useSharedValue(0)

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }]
    }
  })

  return (
    <View onLayout={onTabbarLayout} style={styles.tab_bar}>
      <Animated.View 
        style={[
          animationStyle,
          {
            position: 'absolute',
            backgroundColor: '#FFFFFF',
            borderRadius: 100,
            marginHorizontal: 3,
            height: dimension.height - 6,
            width: buttonWidth - 6
          }
        ]}
      />
      
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, { duration: 500 })
          
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? '#0D0D0D' : '#D4D4D4'}
            label={label as string} 
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tab_bar: {
    position: 'absolute',
    bottom: 59,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    marginHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 100,
    shadowColor: '#0D0D0D',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
})