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
      value: 'Country',
      label: ''
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
            <ScrollView>
              <View style={styles.formHeader}>
                <Icon name='user' type='AntDesign' style={styles.formHeaderIcon} />
                <View style={styles.formHeaderRow}>
                  <Text style={styles.formHeaderTitle}>{__('Create Driver')}</Text>
                  <Text style={styles.formHeaderDesc}>{__('Create your driver informations')}</Text>
                </View>
              </View>
              <View style={styles.formContent}>
                <View style={styles.formContentHeader}>
                  <Text style={styles.formContentHeaderTitle}>{__('Driver Info')}</Text>
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('Driver Name')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='user' type='FontAwesome' style={styles.formIcon} />
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('Driver Badge Number')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='filter-1' type='MaterialIcons' style={styles.formIcon} />
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('Driver ID')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='image' type='Entypo' style={styles.formIcon} />
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('Email Address')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='mail' type='Entypo' style={styles.formIcon} />
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('Mobile Number')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='mobile' type='FontAwesome' style={styles.formIcon} />
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('Driver License')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='filter-1' type='MaterialIcons' style={styles.formIcon} />
                </View>
                <TouchableOpacity style={styles.formBtn} onPress={() => this.refs.Form.open()}>
                  <Text style={styles.formBtnText}>{__('Save')}</Text>
                  <Icon name='check' type='FontAwesome' style={styles.formBtnIcon} />
                </TouchableOpacity>
              </View>
            </ScrollView>
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
            <Text style={styles.modalContentDesc}>{__('Your information Saved')}</Text>
          </ScrollView>
        </Modal>
      </Container>
    )
  }
}