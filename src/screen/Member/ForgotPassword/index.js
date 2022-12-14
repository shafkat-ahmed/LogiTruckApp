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
              <Text style={styles.formHeaderTitle}>{__('Forgot Password')}?</Text>
              <Text style={styles.formHeaderDesc}>{__('We just need your registered email address\nto send your password reset')}!</Text>
            </View>
            <View style={styles.formContent}>
              <View style={styles.formInputGroup}>
                <Icon name='envelope' type='SimpleLineIcons' style={styles.formInputIcon} />
                <TextInput
                  placeholder={__('Email Address')}
                  style={styles.formInputText}
                />
              </View>
              <TouchableOpacity style={styles.formBtn} onPress={() => this.refs.Form.open()}>
                <Text style={styles.formBtnText}>{__('Reset Password')}</Text>
                <Icon name='arrowright' type='AntDesign' style={styles.formBtnIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.formFooter}>
              <Text style={styles.formFooterText}>{__('Remember your password')}?</Text>
              <TouchableOpacity style={styles.formFooterBtn} onPress={() => { navigate('MemberSignUp') }}>
                <Text style={styles.formFooterBtnText}>{__('Login')}</Text>
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
              <Icon name='close' type='AntDesign' />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Icon name='check-circle' type='Feather' style={styles.modalContentIcon} />
            <Text style={styles.modalContentTitle}>{__('Thank you')}</Text>
            <Text style={styles.modalContentDesc}>{__('We have sent a reset verification to your registered email, kindly check and reset your account')}</Text>
          </ScrollView>
        </Modal>
      </Container>
    )
  }
}