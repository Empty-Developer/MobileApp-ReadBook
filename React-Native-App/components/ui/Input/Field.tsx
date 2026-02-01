import { 
  StyleSheet, 
  Text, 
  View, 
  useColorScheme,
  TextInput
} from 'react-native'
import { IField } from './field.interface'
import React, { JSX } from 'react'
import { Controller } from 'react-hook-form'
import { globalStyle } from '@/style/global_style'
import { Colors } from '@/constants/Colors'
import { useFonts } from 'expo-font'


const Field = <T extends Record<string, any>>({
  control,
  rules,
  name,
  className,
  ...rest
}: IField<T>): JSX.Element => {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme]

  const [fontsLoaded] = useFonts({
    'ge-bold': require('@/assets/font/Geist-Bold.ttf'),
    'ge-regular': require('@/assets/font/Geist-Regular.ttf'),
    'ge-medium': require('@/assets/font/Geist-Medium.ttf'),
  })

  if (!fontsLoaded) {
    return (
      <View style={globalStyle.main}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ 
        field: { value, onChange, onBlur }, 
        fieldState: { error }
      }) => (
        <View style={styles.container}>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: theme.layout_theme,
                color: theme.description,
                borderColor: error ? '#CC2222' : theme.background_button,
                fontFamily: 'ge-regular',
              }
            ]}
            value={value as string}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholderTextColor={theme.description}
            autoCapitalize='none'
            {...rest}
          />
          
          {error && (
            <Text style={[
              styles.errorText,
              { 
                color: '#CC2222',
                fontFamily: 'ge-regular' 
              }
            ]}>
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  )
}

export default Field

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 11,
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
    height: 53,
    width: '100%',
    fontSize: 16,
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    marginLeft: 4,
  }
})