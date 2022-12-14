import React from 'react'
import { ScrollView } from 'react-native'
import { Container, Content, View, Text, Icon } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'

import Header from '@component/Header'
import { navigate } from '@utility/navigation'
import theme from '@theme/styles'
import { bind } from '@utility/component'
import request from '@utility/request'
import Languages from '@config/language'
import { setLocale, __ } from '@utility/translation'

import Shipment from './Shipment'
import shipmentList from './data/shipment'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    bind(this)
    this.fetchShipmentList = this.fetchShipmentList.bind(this)
  }
  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })
    await this.fetchShipmentList()
  }
  async fetchShipmentList() {
    await this.promisedSetState({
      fetchingShipmentList: true
    })
    const list = await request(shipmentList)
    await this.promisedSetState({
      shipmentList: list,
      fetchingShipmentList: false
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
                <Icon name='package' type='Feather' style={styles.formHeaderIcon} />
                <View style={styles.formHeaderRow}>
                  <Text style={styles.formHeaderTitle}>{__('Loads')}</Text>
                  <Text style={styles.formHeaderDesc}>{__('120 results found')}</Text>
                </View>
              </View>
              <Shipment
                language={this.state.language}
                list={this.state.shipmentList}
                fetching={this.state.fetchingShipmentList}
                onDelete={this.onDelete}
              />
            </ScrollView>
          </View>
        </Content>
      </Container>
    )
  }
}