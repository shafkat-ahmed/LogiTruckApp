import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Content, View, Text, Icon } from 'native-base'

import styles from './styles'
import Header from '@component/Header'
import { navigate } from '@utility/navigation'
import theme from '@theme/styles'
import Languages from '@config/language'
import { setLocale, __ } from '@utility/translation'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Container style={theme.layoutFx}>
        <Header statusBarType='dark' navLeftType='back' />
        <Content contentContainerStyle={theme.layout}>
          <View style={styles.bgCrv} />
          <View style={styles.bgCrvOverlay} />
          <View style={styles.formContainer}>
            <View style={styles.formHeader}>
              <Icon name='gear' type='EvilIcons' style={styles.formHeaderIcon} />
              <View style={styles.formHeaderCol}>
                <Text style={styles.formHeaderTitle}>{__('Settings')}</Text>
                <Text style={styles.formHeaderDesc}>{__('Manage Your Settings')}</Text>
              </View>
            </View>
            <View style={styles.formContent}>
              <TouchableOpacity style={styles.formBtn} onPress={() => { navigate('MemberChangePassword') }}>
                <Text style={styles.formBtnText}>{__('Change Password')}</Text>
                <Icon name='lock' type='SimpleLineIcons' style={styles.formBtnIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.formBtn} onPress={() => { navigate('MemberNotification') }}>
                <Text style={styles.formBtnText}>{__('Notification')}</Text>
                <Icon name='sticky-note-o' type='FontAwesome' style={styles.formBtnIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}