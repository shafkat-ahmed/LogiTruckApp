import { Icon, Text, View } from 'native-base'
import React, { useEffect } from 'react'
import { Image, ScrollView, TouchableOpacity } from 'react-native'

import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import { useDispatch, useSelector } from 'react-redux'
import CustomContainer from '../../../component/Ui/CustomContainer'
import { getUserById } from '../../../redux/features/userDashboardSlice'
import styles from './styles'

const UserHome = () => {

  const userId = useSelector((state)=>state.login.userId);
  const userInfo = useSelector((state)=>state.userDashboard.userInfo)

  const dispatch = useDispatch();

  useEffect(()=> {
    fetchUser();
  },[]);

  const fetchUser = () => {
    console.log("user id",userId);
    dispatch(getUserById(userId))
    .unwrap()
        .then((res) => {
           console.log('Response is', res);
          }
        )
        .catch((err) => {
          console.log('error fetch user', err);
        });
  }
    return (
        <CustomContainer navLeftType='menu' bgCrvOverlayStyles={{height:"55%"}}>
          <View style={styles.homeContainer}>
            <ScrollView contentContainerStyle={styles.dbContainer}>
              <View style={styles.dbHeaderContentCol}>
                <Image source={{ uri: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.dbImg} />
                <View style={styles.dbRow}>
                  <Text style={styles.dbName}>{userInfo?.name}</Text>
                  <Text style={styles.dbCity}>{userInfo?.phone}</Text>
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
                navigate('UserCreateBooking')
              }}>
                <Icon name='calendar-check-o' type='FontAwesome' style={styles.dbBtnIcon} />
                <View style={styles.dbCol}>
                  <Text style={styles.dbBtnTitle}>{__('Booking')}</Text>
                  <Text style={styles.dbBtnDesc}>{__('Create your booking')}</Text>
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
              {/* <TouchableOpacity style={styles.dbBtn} onPress={() => {
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
              </TouchableOpacity> */}
            </ScrollView>
          </View>
        </CustomContainer>
    )
}

export default UserHome