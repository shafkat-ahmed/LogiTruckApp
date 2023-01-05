import { Container, Content, Icon, Text, View } from 'native-base'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modalbox'

import Header from '@component/Header'
import CustomButton from '@component/Ui/CustomButton/CustomButton'
import CustomTextInput from '@component/Ui/CustomTextInput/CustomTextInput'
import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import styles from './styles'

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
              <Text style={styles.formHeaderTitle}>{__('Sign In')}!</Text>
              <Text style={styles.formHeaderDesc}>{__('Login your account')}!</Text>
            </View>
            <View style={styles.formContent}>

              <CustomTextInput iconName="envelope" placeholder="Email Address or Mobile Number" />
              
              <CustomTextInput iconName="lock" placeholder="Password" />

              <TouchableOpacity style={styles.forgotBtn} onPress={() => { navigate('MemberForgotPassword') }}>
                <Text style={styles.forgotBtnText}>{__('Forgot Password')}?</Text>
              </TouchableOpacity>

              <CustomButton onPress={() => this.refs.Form.open()} iconName="arrowright" text="Sign In" />

            </View>
            <View style={styles.formFooter}>
              <Text style={styles.formFooterText}>{__('Don\'t have an account')}?</Text>
              <TouchableOpacity style={styles.formFooterBtn} onPress={() => { navigate('MemberSignUp') }}>
                <Text style={styles.formFooterBtnText}>{__('Sign Up')}</Text>
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