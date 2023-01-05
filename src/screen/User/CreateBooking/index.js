import CustomButton from '@component/Ui/CustomButton/CustomButton'
import CustomSelect from '@component/Ui/CustomSelect'
import CustomTextInput from '@component/Ui/CustomTextInput/CustomTextInput'
import { Container, Content, Icon, Text, View } from 'native-base'
import React, { useEffect } from 'react'
import { ScrollView, TextInput } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import * as Server from '../../../utilities/api'

import styles from './styles'

import Header from '@component/Header'
import theme from '@theme/styles'
import { __ } from '@utility/translation'
import { useState } from 'react'

const UserCreateBooking = () => {

  useEffect(()=>{
    getParcelList();
  },[]);

  const [parcelList,setParcelList] = useState([]);
  const [parcelIds,setParcelIds] = useState([]);

  const getParcelList = async () => {

    try {
      
      var response = await Server.getParcelListAsync();
      console.log("parcel list",response);
      setParcelList(response.data);
      
    } catch (error) {
      console.log(error);
    }

  }


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
                    <Text style={styles.formHeaderTitle}>{__('Booking')}</Text>
                    <Text style={styles.formHeaderDesc}>{__('Create Your Booking')}</Text>
                  </View>
              </View>
              <View style={styles.formContent}>
                <View style={styles.formContentHeader}>
                  <Text style={styles.formContentHeaderTitle}>{__('Booking Info')}</Text>
                </View>

                <CustomTextInput iconName="location-pin" placeholder="Source Address" onFocus={()=>console.log("focused")}  />
                
                <CustomTextInput iconName="direction" placeholder="Destination Address"  />

                  <View style={styles.container}>
                    <MapView
                      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                      style={styles.map}
                      region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                      }}                     
                    >  
                    </MapView>
                  </View>

                <CustomSelect data={parcelList} labelField="description" valueField="id" title="Select Parcel Type" 
                value={parcelIds} onChange={(item)=> setParcelIds(item) } />

                      
                {/* <View style={styles.formSelect}>
                  <View style={styles.formPicker}>
                    <RNPickerSelect
                      style={{ placeholder: { color: 'rgba(0, 0, 0, 0.5)' }, }}
                      placeholder={{
                        label: '',
                        value: 'Michael',
                        color: 'red'
                      }}
                      onValueChange={(value) => console.log(value)}
                      items={[
                        { label: 'Michael', value: 'Michael' },
                        { label: 'Hazel William', value: 'Hazel William' },
                        { label: 'Lucas Benjamin', value: 'Lucas Benjamin' },
                      ]}
                    />
                  </View>
                  <Icon name='user' type='FontAwesome' style={styles.formIcon} />
                </View> */}


                <CustomTextInput iconName="note" placeholder="Pick Up Instruction"  />

                <CustomTextInput iconName="note" placeholder="Delivery Instruction" />
                
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('To Date')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='calendar' type='FontAwesome' style={styles.formIcon} />
                </View>
              
                <CustomButton iconName="arrowright" text="Submit"/>
              </View>
            </ScrollView>
          </View>
        </Content>
      </Container>
    )
  }

export default UserCreateBooking