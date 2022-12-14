import React from 'react'
import { TouchableOpacity, Image, ScrollView } from 'react-native'
import { View, Text, Icon } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'

import { closeDrawer, navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import { bind } from '@utility/component'

import * as MENU from './Menu'

const imgAvatar = 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'en'
    }
    bind(this)
    this.renderMenuList = this.renderMenuList.bind(this)
  }

  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })
  }

  renderMenuList(menus) {
    return menus.map((menu) => {
      return <TouchableOpacity style={styles.navItemBtn} underlayColor='transparent' onPress={() => {
        closeDrawer()
        navigate(menu.route)
      }}>
        <View style={styles.navItemBtnCol}>
          <Icon name={menu.iconName} type={menu.iconType} style={styles.navItemBtnIcon} />
        </View>
        <Text style={styles.navItemBtnText}>{menu['name_' + this.props.language] || menu.name}</Text>
      </TouchableOpacity>
    })
  }

  render() {
    return (
      <View style={styles.navContainer}>
        <View style={styles.navContent}>
          <Image source={{ uri: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={styles.navContentImg} />
          <View>
            <Text style={styles.navContentTitle}>{__('Megan Fox')}</Text>
            <Text style={styles.navContentText}>{__('New York')}</Text>
          </View>
        </View>
        <View style={styles.navMenuContent}>
          <ScrollView>
            {this.renderMenuList(MENU.Data1)}
            <Text style={styles.navHeader}>{__('Loaders')}</Text>
            {this.renderMenuList(MENU.Data2)}
            <Text style={styles.navHeader}>{__('Transporters')}</Text>
            {this.renderMenuList(MENU.Data3)}
          </ScrollView>
        </View>
      </View>
    )
  }
}