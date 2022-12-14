import { Container, Content, Icon, Text, View } from 'native-base'
import React from 'react'
import { Image, ScrollView, TouchableOpacity } from 'react-native'

import Header from '@component/Header'
import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import styles from './styles'

const MemberHome = () => {
    return (
      <Container style={theme.layoutFx}>
        <Header statusBarType='dark' navLeftType='menu' />
        <Content contentContainerStyle={theme.layout}>
          <View style={styles.homeContent} />
          <View style={styles.homeContent2} />
          <View style={styles.homeContainer}>
            <ScrollView contentContainerStyle={styles.dbContainer}>
              <View style={styles.dbHeaderContentCol}>
                <Image source={{ uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={styles.dbImg} />
                <View style={styles.dbRow}>
                  <Text style={styles.dbName}>{__('Megan Fox')}</Text>
                  <Text style={styles.dbCity}>{__('Florida, USA')}</Text>
                </View>
              </View>
              <View style={styles.count}>
                <View style={[styles.countCol, styles.bgYellow]}>
                  <Text style={styles.priceText}>{__('$4800')}</Text>
                  <Text style={styles.priceDesc}>{__('PAID')}</Text>
                </View>
                <View style={[styles.countCol, styles.bgGrey]}>
                  <Text style={[styles.priceText, theme.light]}>{__('$1200')}</Text>
                  <Text style={[styles.priceDesc, theme.light]}>{__('DUE')}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.dbBtn} onPress={() => {
                navigate('CustomerBooking')
              }}>
                <Icon name='calendar-check-o' type='FontAwesome' style={styles.dbBtnIcon} />
                <View style={styles.dbCol}>
                  <Text style={styles.dbBtnTitle}>{__('Bookings')}</Text>
                  <Text style={styles.dbBtnDesc}>{__('Manage your bookings')}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dbBtn} onPress={() => {
                navigate('MemberLoads')
              }}>
                <Icon name='package' type='Octicons' style={styles.dbBtnIcon} />
                <View style={styles.dbCol}>
                  <Text style={styles.dbBtnTitle}>{__('Loads')}</Text>
                  <Text style={styles.dbBtnDesc}>{__('Manage your Load')}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dbBtn} onPress={() => {
                navigate('MemberSearchTrip')
              }}>
                <Icon name='search' type='FontAwesome' style={styles.dbBtnIcon} />
                <View style={styles.dbCol}>
                  <Text style={styles.dbBtnTitle}>{__('Search Trips')}</Text>
                  <Text style={styles.dbBtnDesc}>{__('Find your transport trips')}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dbBtn} onPress={() => {
                navigate('MemberTrips')
              }}>
                <Icon name='route' type='FontAwesome5' style={styles.dbBtnIcon} />
                <View style={styles.dbCol}>
                  <Text style={styles.dbBtnTitle}>{__('Trip')}</Text>
                  <Text style={styles.dbBtnDesc}>{__('Manage your Trip')}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dbBtn} onPress={() => {
                navigate('MemberDrivers')
              }}>
                <Icon name='user' type='AntDesign' style={styles.dbBtnIcon} />
                <View style={styles.dbCol}>
                  <Text style={styles.dbBtnTitle}>{__('Driver')}</Text>
                  <Text style={styles.dbBtnDesc}>{__('Select your Driver')}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dbBtn} onPress={() => {
                navigate('MemberVehicles')
              }}>
                <Icon name='truck' type='Fontisto' style={styles.dbBtnIcon} />
                <View style={styles.dbCol}>
                  <Text style={styles.dbBtnTitle}>{__('Vehicles')}</Text>
                  <Text style={styles.dbBtnDesc}>{__('Manage your vehicle')}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dbBtn} onPress={() => {
                navigate('memberSearchLoad')
              }}>
                <Icon name='search' type='FontAwesome' style={styles.dbBtnIcon} />
                <View style={styles.dbCol}>
                  <Text style={styles.dbBtnTitle}>{__('Search Load')}</Text>
                  <Text style={styles.dbBtnDesc}>{__('Find your loads')}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dbBtn} onPress={() => {
                navigate('MemberProfile')
              }}>
                <Icon name='user' type='AntDesign' style={styles.dbBtnIcon} />
                <View style={styles.dbCol}>
                  <Text style={styles.dbBtnTitle}>{__('Profile')}</Text>
                  <Text style={styles.dbBtnDesc}>{__('Manage your profile informations')}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dbBtn} onPress={() => {
                navigate('MemberSettings')
              }}>
                <Icon name='gear' type='EvilIcons' style={styles.dbBtnIcon} />
                <View style={styles.dbCol}>
                  <Text style={styles.dbBtnTitle}>{__('Settings')}</Text>
                  <Text style={styles.dbBtnDesc}>{__('Manage your password, notifications, etc')}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dbBtn} onPress={() => {
                navigate('MemberSettings')
              }}>
                <Icon name='toggle-off' type='Fontisto' style={styles.dbBtnIcon} />
                <View style={styles.dbCol}>
                  <Text style={styles.dbBtnTitle}>{__('Switch')}</Text>
                  <Text style={styles.dbBtnDesc}>{__('Switch to Transporters')}</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Content>
      </Container>
    )
}

export default MemberHome