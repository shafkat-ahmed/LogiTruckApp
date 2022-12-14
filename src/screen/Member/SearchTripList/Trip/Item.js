import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { View, Text, Icon } from 'native-base'

import styles from './../styles'

import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
      <>
        <View style={styles.tripItem}>
          <View style={styles.truckInfo}>
            <View>
              <Text style={styles.truckTrip}>{item['trip_' + this.props.language] || item.trip}</Text>
              <Text style={styles.truckData}>{item['name_' + this.props.language] || item.name}</Text>
              <View style={theme.row2}>
                <Text style={styles.truckData}>{item.num}</Text>
                <Text>   |   </Text>
                <Icon name='check' type='FontAwesome' style={styles.checkIcon} />
              </View>
            </View>
            <Image source={{ uri: item.image }} style={styles.truckImg} />
          </View>
          <View style={styles.tripInfo}>
            <View style={styles.tripContent2}>
              <View style={styles.tripPlaces}>
                <Icon name='circle-o' type='FontAwesome' style={styles.tripIcon} />
                <Text style={styles.placeText}>{item['startplace_' + this.props.language] || item.startplace}</Text>
              </View>
              <View style={styles.tripPlaces}>
                <Icon name='calendar' type='FontAwesome' style={styles.checkIcon} />
                <Text style={styles.placeText}>{item.startat}</Text>
              </View>
            </View>
            <Text style={styles.lineTracker}>|</Text>
            <View style={styles.tripContent2}>
              <View style={styles.tripPlaces}>
                <Icon name='circle-o' type='FontAwesome' style={styles.tripIcon} />
                <Text style={styles.placeText}>{item['finishplace_' + this.props.language] || item.finishplace}</Text>
              </View>
              <View style={styles.tripPlaces}>
                <Icon name='calendar' type='FontAwesome' style={styles.checkIcon} />
                <Text style={styles.placeText}>{item.finishat}</Text>
              </View>
            </View>
          </View>
          <View style={styles.tripContent2}>
            <View>
              <Text style={styles.tripPosted}>{__('Posted on: 24 Aug 2020')}</Text>
            </View>
            <TouchableOpacity style={styles.editBtn} onPress={() => {
              navigate('MemberShipment')
            }}>
              <Text style={styles.editText}>{__('Read More')}</Text>
              <Icon name='arrowright' type='AntDesign' style={styles.editIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}