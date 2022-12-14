import React from 'react'
import { TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { Container, Content, View, Text, Icon } from 'native-base'
import Modal from 'react-native-modalbox'

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
              <Text style={styles.formHeaderTitle}>{__('Reset Password')}?</Text>
              <Text style={styles.formHeaderDesc}>{__('Reset your password')}!</Text>
            </View>
            <View style={styles.formContent}>
              <View style={styles.formInputGroup}>
                <Icon name='lock' type='SimpleLineIcons' style={styles.formInputIcon} />
                <TextInput
                  placeholder={__('New Password')}
                  style={styles.formInputText}
                />
              </View>
              <View style={styles.formInputGroup}>
                <Icon name='lock' type='SimpleLineIcons' style={styles.formInputIcon} />
                <TextInput
                  placeholder={__('Confirm New Password')}
                  style={styles.formInputText}
                />
              </View>
              <TouchableOpacity style={styles.formBtn} onPress={() => this.refs.Form.open()}>
                <Text style={styles.formBtnText}>{__('Reset Password')}</Text>
                <Icon name='arrowright' type='AntDesign' style={styles.formBtnIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </Content>
        <Modal
          ref={'Form'}
          isOpen={this.state.isOpen}
          position={'center'}
          swipeToClose={false}
          style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text />
            <TouchableOpacity onPress={() => this.refs.Form.close()} style={styles.modalHeaderBtn}>
              <Icon name='close' type='AntDesign'  />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Icon name='check-circle' type='Feather' style={styles.modalContentIcon} />
            <Text style={styles.modalContentTitle}>{__('Thank you')}</Text>
            <Text style={styles.modalContentDesc}>{__('Your password has been reset successfully')}</Text>
          </ScrollView>
        </Modal>
      </Container>
    )
  }
}