import React from 'react'
import { ScrollView, Alert } from 'react-native'
import { Container, Content, View, Text, Icon } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'

import Header from '@component/Header'
import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { bind } from '@utility/component'
import request from '@utility/request'
import Languages from '@config/language'
import { setLocale, __ } from '@utility/translation'

import Driver from './Driver'
import driverList from './data/driver'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled: false,
      isOpen: false
    }
    bind(this)
    this.fetchDriverList = this.fetchDriverList.bind(this)
  }
  onDelete() {
    Alert.alert(
      'Alert',
      'Are you sure you want to delete this vessel?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK'
        }
      ],
      { cancelable: false }
    )
  }
  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })
    await this.fetchDriverList()
  }
  async fetchDriverList() {
    await this.promisedSetState({
      fetchingDriverList: true
    })
    const list = await request(driverList)
    await this.promisedSetState({
      driverList: list,
      fetchingDriverList: false
    })
  }
  render() {
    return (
      <Container style={theme.layoutFx}>
        <Header statusBarType='dark' navLeftType='back' />
        <Content contentContainerStyle={theme.layout}>
          <View style={styles.bgCrv} />
          <View style={styles.bgCrvOverlay} />
          <View style={styles.formContainer}>
            <ScrollView>
              <View style={styles.formHeader}>
                <Icon name='user' type='AntDesign' style={styles.formHeaderIcon} />
                <View style={styles.formHeaderRow}>
                  <Text style={styles.formHeaderTitle}>{__('Driver')}</Text>
                  <Text style={styles.formHeaderDesc}>{__('Select your Driver')}</Text>
                </View>
              </View>
              <Driver
                language={this.state.language}
                list={this.state.driverList}
                fetching={this.state.fetchingDriverList}
                onDelete={this.onDelete}
              />
            </ScrollView>
          </View>
        </Content>
      </Container>
    )
  }
}