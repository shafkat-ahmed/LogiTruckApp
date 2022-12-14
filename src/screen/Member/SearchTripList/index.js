import React from 'react'
import { ScrollView } from 'react-native'
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

import Trip from './Trip'
import tripList from './data/trip'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    bind(this)
    this.fetchTripList = this.fetchTripList.bind(this)
  }
  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })
    await this.fetchTripList()
  }
  async fetchTripList() {
    await this.promisedSetState({
      fetchingTripList: true
    })
    const list = await request(tripList)
    await this.promisedSetState({
      tripList: list,
      fetchingTripList: false
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
                <Icon name='route' type='FontAwesome5' style={styles.formHeaderIcon} />
                <View style={styles.formHeaderRow}>
                  <Text style={styles.formHeaderTitle}>{__('Trip')}</Text>
                  <Text style={styles.formHeaderDesc}>{__('15 Results found')}</Text>
                </View>
              </View>
              <Trip
                language={this.state.language}
                list={this.state.tripList}
                fetching={this.state.fetchingTripList}
              />
            </ScrollView>
          </View>
        </Content>
      </Container>
    )
  }
}