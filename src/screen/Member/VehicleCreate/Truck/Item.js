import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { View, Icon } from 'native-base'

import styles from './../styles'

import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
      <>
        <View style={styles.photoItem}>
          <Image source={{ uri: 'https://39yg8a49fjdg1yo8qt272ix6-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/cascadia.jpg' }} style={styles.photoItemImg} />
          <TouchableOpacity style={styles.photoItemBtn} onPress={this.props.onDelete}>
            <Icon name='trash' type='FontAwesome' style={styles.photoItemBtnIcon} />
          </TouchableOpacity>
        </View>
      </>
    )
  }
}