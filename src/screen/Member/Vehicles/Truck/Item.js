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
        <View style={styles.truckItem}>
          <View style={styles.truckInfo}>
            <Image source={{ uri: item.image }} style={styles.truckImg} />
            <View style={styles.truckContent}>
              <View style={styles.truckBrand}>
                <Text style={styles.truckName}>{item['name_' + this.props.language] || item.name}</Text>
              </View>
              <View style={styles.rowAlignment}>
                <Text style={styles.truckNum}>{__('Number')}</Text>
                <Text style={styles.truckData}>{item.num}</Text>
              </View>
              <View style={styles.rowAlignment}>
                <Text style={styles.truckNum}>{__('Year')}</Text>
                <Text style={styles.truckData}>{item.year}</Text>
              </View>
            </View>
          </View>
          <View style={styles.truckContent2}>
            <Text style={styles.truckPosted}>{__('Posted On:')} {item['posted_' + this.props.language] || item.posted}</Text>
            <View style={theme.row}>
              <TouchableOpacity style={styles.editBtn} onPress={() => {
                NavigationService.navigate('TransporterCreateTruck')
              }}>
                <Icon name='pencil' type='FontAwesome' style={styles.editIcon} />
                <Text style={styles.editText}>{__('EDIT')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.editBtn} onPress={this.props.onDelete}>
                <Icon name='trash-o' type='FontAwesome' style={styles.editIcon} />
                <Text style={styles.editText}>{__('DELETE')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    )
  }
}