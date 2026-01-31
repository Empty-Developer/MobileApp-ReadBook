import { StyleSheet, TextInput, View, Keyboard, useColorScheme } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'
import { globalStyle } from '@/style/global_style'
import { useFonts } from 'expo-font'
import { CodeInputProps } from './input-code.interface'
import { Colors } from '@/constants/Colors'
const CodeInput: React.FC<CodeInputProps> = ({
  length = 6,
  onCodeFilled,
  }) => {
    const [code, setCode] = useState<string[]>(Array(length).fill(''))
    const inputRef = useRef<(TextInput | null) []>([])

    useEffect(() => {
      // focused on the first element
      inputRef.current[0]?.focus()
    }, [])

    const handleCodeChange = (text: string, index: number) => {
      const numberText = text.replace(/[^0-9]/g, '')

      if (numberText) {
        const newCode = [...code]
        // if we copy the text and add code
        if (numberText.length > 1) {
          const digits = numberText.split('').slice(0, length)
          digits.forEach((digit, idx) => {
            newCode[idx] = digit
          })
          setCode(newCode)

          // focus on the end element
          const lastIndex = Math.min(digits.length - 1, length - 1)
          inputRef.current[lastIndex]?.focus()

          // if the code is full - call the callback
          if (digits.length >= length && onCodeFilled) {
            onCodeFilled(newCode.join(''))
            Keyboard.dismiss();
          }
          return
        }

        // input one number
        newCode[index] = numberText
        setCode(newCode)

        // next input
        if (index - length - 1) {
          inputRef.current[index + 1]?.focus()
        }

        // examination oll code
        if (newCode.every(digit => digit !== '') && onCodeFilled) {
          onCodeFilled(newCode.join(''))
          Keyboard.dismiss()
        }
      } else {
        // if delete one number
        const newCode = [...code] 
        newCode[index] = ''
        setCode(newCode)
      }
    }
    
    const handleKeyPress = ({ nativeEvent }: any, index: number) => {
      // processing backspace
      if (nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
        const newCode = [...code]
        newCode[index - 1] = ''
        setCode(newCode)

        inputRef.current[index - 1]?.focus()
      }
    }

    const colorScheme = useColorScheme() ?? 'light'
        
    const theme = Colors[colorScheme]
    
    const [fontsLoaded] = useFonts({
            'ge-bold': require('@/assets/font/Geist-Bold.ttf'),
            'ge-regular': require('@/assets/font/Geist-Regular.ttf'),
            'ge-medium': require('@/assets/font/Geist-Medium.ttf'),
    })
  return (
    <View style={styles.container}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          ref={ref => {
            if (ref) {
              inputRef.current[index] = ref
            }
          }}
          style={[
            styles.input,
            {color: theme.layout,
             backgroundColor: theme.layout_theme,
             borderColor: theme.background_button,
            },
            digit !== '' && [styles.inputFilled, {backgroundColor: theme.layout_theme,}] 
          ]}
          value={digit}
          onChangeText={text => handleCodeChange(text, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          keyboardType="numeric"
          maxLength={index === 0 ? length : 1}
          caretHidden={true}
          textContentType="oneTimeCode"
          selectTextOnFocus
        />
      ))}
    </View>
  )
}

export default CodeInput

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0,
  },

  input: {
    width: 66,
    height: 97,
    borderWidth: 1,
    borderRadius: 16,
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    margin: 2,
    fontFamily: 'ge-bold',
  },

  inputFilled: {
    borderColor: '#00ff11ff',
  },
})