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
              <Text style={styles.formHeaderTitle}>{__('Sign Up')}!</Text>
              <Text style={styles.formHeaderDesc}>{__('Create new account')}!</Text>
            </View>
            <View style={styles.formContent}>
              <View style={styles.formInputGroup}>
                <Icon name='user' type='AntDesign' style={styles.formInputIcon} />
                <TextInput
                  placeholder={__('Name')}
                  style={styles.formInputText}
                />
              </View>
              <View style={styles.formInputGroup}>
                <Icon name='envelope' type='SimpleLineIcons' style={styles.formInputIcon} />
                <TextInput
                  placeholder={__('Email Address')}
                  style={styles.formInputText}
                />
              </View>
              <View style={styles.formInputGroup}>
                <Icon name='phone' type='SimpleLineIcons' style={styles.formInputIcon} />
                <TextInput
                  placeholder={__('Mobile Number')}
                  style={styles.formInputText}
                />
              </View>
              <View style={styles.formInputGroup}>
                <Icon name='lock' type='SimpleLineIcons' style={styles.formInputIcon} />
                <TextInput
                  placeholder={__('Password')}
                  style={styles.formInputText}
                />
              </View>
              <View style={styles.formInputGroup}>
                <Icon name='lock' type='SimpleLineIcons' style={styles.formInputIcon} />
                <TextInput
                  placeholder={__('Confirm Password')}
                  style={styles.formInputText}
                />
              </View>
              <TouchableOpacity style={styles.formBtn} onPress={() => this.refs.Form.open()}>
                <Text style={styles.formBtnText}>{__('Sign Up')}!</Text>
                <Icon name='arrowright' type='AntDesign' style={styles.formBtnIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.formFooter}>
              <Text style={styles.formFooterText}>{__('Already have an account')}?</Text>
              <TouchableOpacity style={styles.formFooterBtn} onPress={() => { navigate('MemberSignIn') }}>
                <Text style={styles.formFooterBtnText}>{__('Sign In')}</Text>
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
            <Text style={styles.modalContentDesc}>{__('We have sent a verification to your registered email, kindly very your email address and access the account')}</Text>
          </ScrollView>
        </Modal>
      </Container>
    )
  }
}