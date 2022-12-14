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

import Truck from './Truck'
import truckList from './data/truck'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    bind(this)
    this.fetchTruckList = this.fetchTruckList.bind(this)
  }
  onDelete() {
    Alert.alert(
      'Alert',
      'Are you sure you want to delete this vehicle?',
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
    await this.fetchTruckList()
  }
  async fetchTruckList() {
    await this.promisedSetState({
      fetchingTruckList: true
    })
    const list = await request(truckList)
    await this.promisedSetState({
      truckList: list,
      fetchingTruckList: false
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
                <Icon name='truck' type='Fontisto' style={styles.formHeaderIcon} />
                <View style={styles.formHeaderRow}>
                  <Text style={styles.formHeaderTitle}>{__('Vehicles')}</Text>
                  <Text style={styles.formHeaderDesc}>{__('Manage your vehicle')}</Text>
                </View>
              </View>
              <Truck
                language={this.state.language}
                list={this.state.truckList}
                fetching={this.state.fetchingTruckList}
                onDelete={this.onDelete}
              />
            </ScrollView>
          </View>
        </Content>
      </Container>
    )
  }
}