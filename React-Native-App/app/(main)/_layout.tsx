import { StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { TabBar } from "@/components/ui/TabBar/TabBar"


const TabLayout = () => {
  return (
		<Tabs screenOptions={{ headerShown: false }} tabBar={props => <TabBar {...props} />}>
			<Tabs.Screen name='index' options={{ title: 'Home' }} />
			<Tabs.Screen name='library' options={{ title: 'Library' }} />
			<Tabs.Screen name='like' options={{ title: 'Like' }} />
			<Tabs.Screen name='user_profile' options={{ title: 'Profile' }} />
		</Tabs>
	)
}

export default TabLayout

const styles = StyleSheet.create({})