import React from 'react'
import { TouchableOpacity, ScrollView, Image } from 'react-native'
import { Container, Content, View, Text, Icon } from 'native-base'

import styles from './styles'

import Header from '@component/Header'
import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import request from '@utility/request'
import Languages from '@config/language'
import { setLocale, __ } from '@utility/translation'

export default class extends React.Component {
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
                <Image source={{ uri: 'https://39yg8a49fjdg1yo8qt272ix6-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/cascadia.jpg' }} style={styles.formHeaderAvatar} />
                <View style={styles.formHeaderRow}>
                  <Text style={styles.formHeaderTitle}>{__('CASACADIA Transport')}</Text>
                  <View style={styles.formHeaderRating}>
                    <Icon name='star' type='AntDesign' style={styles.formHeaderStarActive} />
                    <Icon name='star' type='AntDesign' style={styles.formHeaderStarActive} />
                    <Icon name='star' type='AntDesign' style={styles.formHeaderStarActive} />
                    <Icon name='star' type='AntDesign' style={styles.formHeaderStarActive} />
                    <Icon name='staro' type='AntDesign' style={styles.formHeaderStar} />
                  </View>
                </View>
              </View>
              <View style={styles.formContent}>
                <View style={styles.tripItem}>
                  <View style={styles.truckInfo}>
                    <View style={styles.truckCol}>
                      <Text style={styles.truckTrip}>{__('TRIP #123')}</Text>
                      <Text style={styles.truckData}>{__('Vehicle Type: Freightliner CASACADIA')}</Text>
                      <View style={theme.row2}>
                        <Text style={styles.truckData}>TN 07 9898</Text>
                        <Text>   |   </Text>
                        <Text style={styles.truckFare}>{__('$2500')}</Text>
                      </View>
                    </View>
                    <Image source={{ uri: 'https://39yg8a49fjdg1yo8qt272ix6-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/cascadia.jpg' }} style={styles.truckImg} />
                  </View>
                  <View style={styles.tripInfo}>
                    <View style={styles.tripContent2}>
                      <View style={styles.tripPlaces}>
                        <Icon name='circle-o' type='FontAwesome' style={styles.tripIcon} />
                        <Text style={styles.placeText}>{__('Philadelphia, PA')}</Text>
                      </View>
                      <View style={styles.tripPlaces}>
                        <Icon name='calendar' type='FontAwesome' style={styles.checkIcon} />
                        <Text style={styles.placeText}>{__('25 Aug 8:00 AM')}</Text>
                      </View>
                    </View>
                    <Text style={styles.lineTracker}>|</Text>
                    <View style={styles.tripContent2}>
                      <View style={styles.tripPlaces}>
                        <Icon name='circle-o' type='FontAwesome' style={styles.tripIcon} />
                        <Text style={styles.placeText}>{__('San Antonia, TX')}</Text>
                      </View>
                      <View style={styles.tripPlaces}>
                        <Icon name='calendar' type='FontAwesome' style={styles.checkIcon} />
                        <Text style={styles.placeText}>{__('30 Aug 12:00 am')}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.tripContent3}>
                    <Text style={styles.tripContent3Text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales vitae ligula eu hendrerit. Donec in magna sodales, semper urna et, gravida enim.
                      {'\n\n'}Mauris dolor magna, sodales et finibus nec, feugiat nec enim. Nullam id arcu lacus.
                    </Text>
                    <Text style={styles.tripContent3Date}>{__('Posted on: 25 Aug 2020')}</Text>
                  </View>
                  <View style={styles.tripContent4}>
                    <TouchableOpacity style={styles.editBtn} onPress={() => {
                      navigate('MemberLoadBooking')
                    }}>
                      <Text style={styles.editText}>{__('Book Now')}</Text>
                      <Icon name='arrowright' type='AntDesign' style={styles.editIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Content>
      </Container>
    )
  }
}