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
            <View style={theme.row}>
              <TouchableOpacity style={styles.editBtn} onPress={() => {
                navigate('MemberCreateTrip')
              }}>
                <Icon name='pencil' type='FontAwesome' style={styles.editIcon} />
                <Text style={styles.editText}>{__('EDIT')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.editBtn} onPress={this.props.onDelete}>
                <Icon name='trash-o' type='FontAwesome' style={styles.editIcon} />
                <Text style={styles.editText}>{__('DELETE')}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.editBtn} onPress={() => {
              navigate('MemberShipment')
            }}>
              <Icon name='search' type='FontAwesome' style={styles.editIcon} />
              <Text style={styles.editText}>{__('SHIPMENT')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}