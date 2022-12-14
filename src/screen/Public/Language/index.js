import React from 'react'
import { StatusBar } from 'react-native'
import { Container, View, Text } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import RNPickerSelect from 'react-native-picker-select'
import RNRestart from 'react-native-restart'

import styles from './styles'

import theme from '@theme/styles'
import Languages from '@config/language'
import { setLocale, __ } from '@utility/translation'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      language: ''
    }
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    this.setState({
      language
    })
  }

  async changeLanguage(code) {
    if (this.state.language !== code) {
      const l = Languages.find(item => (item.code === code))
      if (l) {
        await AsyncStorage.setItem('language', code)
        setLocale(code, l.direction)
        RNRestart.Restart()
      }
    }
  }

  render() {
    return (
      <Container style={theme.layoutFx}>
        <StatusBar backgroundColor='rgba(36, 42, 56, 1)' animated barStyle='light-content' />

        <View style={styles.langContainer}>
          <Text style={styles.langHeader}>{__('Language')}</Text>
          <Text style={styles.langDesc}>{__('Choose your language to view the app')}</Text>
          <View style={styles.langPicker}>
            <RNPickerSelect
              items={Languages.map(item => ({ label: item.name, value: item.code }))}
              value={this.state.language}
              pickerProps={{
                style: styles.langPickerText
              }}
              onValueChange={this.changeLanguage}
            />
          </View>
        </View>
      </Container>
    )
  }
}