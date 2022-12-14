import React from 'react'
import { TouchableOpacity, TextInput } from 'react-native'
import { Container, Content, View, Text, Icon } from 'native-base'
import Modal from 'react-native-modalbox'

import styles from './styles'
import Header from '@component/Header'
import { navigate } from '@utility/navigation'
import theme from '@theme/styles'
import Languages from '@config/language'
import { bind } from '@utility/component'
import { setLocale, __ } from '@utility/translation'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabSelected: 'enquiry'
    }
    bind(this)
    this.renderEnquiry = this.renderEnquiry.bind(this)
    this.renderInfo = this.renderInfo.bind(this)
  }

  renderEnquiry() {
    return <View style={styles.contactForm}>
      <View style={styles.contactCol}>
        <Text style={styles.contactFormLabel}>{__('Name')}</Text>
        <TextInput
          style={styles.contactFormInput}
        />
      </View>
      <View style={styles.contactCol}>
        <Text style={styles.contactFormLabel}>{__('Email Address')}</Text>
        <TextInput
          style={styles.contactFormInput}
        />
      </View>
      <View style={styles.contactCol}>
        <Text style={styles.contactFormLabel}>{__('Mobile')}</Text>
        <TextInput
          style={styles.contactFormInput}
        />
      </View>
      <View style={styles.contactCol}>
        <Text style={styles.contactFormLabel}>{__('Comments')}</Text>
        <TextInput
          style={[styles.contactFormInput, styles.contactFormInputMulti]}
        />
      </View>
      <TouchableOpacity style={styles.contactFormSendBtn} onPress={() => this.refs.ModalConfirm.open()}>
        <Text style={styles.contactFormSendBtnText}>{__('Send')}</Text>
      </TouchableOpacity>
    </View>
  }
  renderInfo() {
    return <View style={styles.contactInfo}>
      <View style={styles.contactRow}>
        <Icon name='location' type='Octicons' style={styles.contactInfoIcon} />
        <View>
          <Text style={styles.contactInfoTitle}>{__('Address')}</Text>
          <Text style={styles.contactInfoText}>3-277-10, Susan Apartment,{'\n'}Liverpool, United Kingdoom</Text>
        </View>
      </View>
      <View style={styles.contactRow}>
        <Icon name='phone' type='SimpleLineIcons' style={styles.contactInfoIcon} />
        <View>
          <Text style={styles.contactInfoTitle}>{__('Phone')}</Text>
          <Text style={styles.contactInfoText}>+01 1234567982 / +01 9874658231</Text>
        </View>
      </View>
      <View style={styles.contactRow}>
        <Icon name='envelope' type='SimpleLineIcons' style={styles.contactInfoIcon} />
        <View>
          <Text style={styles.contactInfoTitle}>{__('Email')}</Text>
          <Text style={styles.contactInfoText}>contact@logitruck.com</Text>
        </View>
      </View>
      <View style={styles.contactRow}>
        <Icon name='globe' type='SimpleLineIcons' style={styles.contactInfoIcon} />
        <View>
          <Text style={styles.contactInfoTitle}>{__('Website')}</Text>
          <Text style={styles.contactInfoText}>www.logitruck.com</Text>
        </View>
      </View>
    </View>
  }
  render() {
    let tabContent
    if (this.state.tabSelected === 'enquiry') {
      tabContent = this.renderEnquiry()
    } else if (this.state.tabSelected === 'info') {
      tabContent = this.renderInfo()
    }
    return (
      <Container style={theme.layoutFx}>
        <Header statusBarType='dark' navLeftType='back' />
        <Content contentContainerStyle={theme.layout}>
          <View style={styles.contactContent} />
          <View style={styles.contactContent2} />
          <View style={styles.contactContainer}>
            <View style={styles.contactContentCol}>
              <Icon name='truck' type='Fontisto' style={styles.contactContentIcon} />
              <View style={styles.contactHeaderContent}>
                <Text style={styles.contactHeaderTitle}>{__('Contact Us')}</Text>
                <Text style={styles.contactHeaderText}>{__('Short story about our company')}</Text>
              </View>
            </View>
            <View style={styles.contactTabContentCol}>
              <TouchableOpacity style={this.state.tabSelected === 'enquiry' ? styles.contactTabActiveBtn : styles.contactTabInactiveBtn} onPress={() => this.setState({ tabSelected: 'enquiry' })}>
                <Text style={this.state.tabSelected === 'enquiry' ? styles.contactTabActiveBtnText : styles.contactTabInactiveBtnText}>{__('Enquiry')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={this.state.tabSelected === 'info' ? styles.contactTabActiveBtn : styles.contactTabInactiveBtn} onPress={() => this.setState({ tabSelected: 'info' })}>
                <Text style={this.state.tabSelected === 'info' ? styles.contactTabActiveBtnText : styles.contactTabInactiveBtnText}>{__('Info')}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contactContent3}>
              {tabContent}
            </View>
          </View>
        </Content>
        <Modal
          ref={'ModalConfirm'}
          isOpen={this.state.isOpen}
          position={'center'}
          swipeToClose={false}
          style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Icon name='check-circle' type='Feather' style={styles.modalContentIcon} />
            <Text style={styles.modalContentTitle}>{__('Thank you!')}</Text>
            <Text style={styles.modalContentText}>{__('Your message has been sent, we will get back you shortly')}</Text>
          </View>
        </Modal>
      </Container>
    )
  }
}
