import React from 'react'
import { TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { Container, Content, View, Text, Icon } from 'native-base'
import RNPickerSelect from 'react-native-picker-select'
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
                <Icon name='route' type='FontAwesome5' style={styles.formHeaderIcon} />
                <View style={styles.formHeaderRow}>
                  <Text style={styles.formHeaderTitle}>{__('Create Trip')}</Text>
                  <Text style={styles.formHeaderDesc}>{__('Create your trip informations')}</Text>
                </View>
              </View>
              <View style={styles.formContent}>
                <View style={styles.formContentHeader}>
                  <Text style={styles.formContentHeaderTitle}>{__('Trip Info')}</Text>
                </View>
                <View style={styles.formSelect}>
                  <View style={styles.formPicker}>
                    <RNPickerSelect
                      style={{ placeholder: { color: 'rgba(0, 0, 0, 0.5)' }, }}
                      placeholder={{
                        label: '',
                        value: 'Tata Ace',
                        color: 'red'
                      }}
                      onValueChange={(value) => console.log(value)}
                      items={[
                        { label: 'Tata Ace', value: 'Tata Ace' },
                        { label: 'Tata Intra', value: 'Tata Intra' },
                        { label: 'Tata Yodha', value: 'Tata Yodha' },
                      ]}
                    />
                  </View>
                  <Icon name='truck' type='Fontisto' style={styles.formIcon} />
                </View>
                <View style={styles.formSelect}>
                  <View style={styles.formPicker}>
                    <RNPickerSelect
                      style={{ placeholder: { color: 'rgba(0, 0, 0, 0.5)' }, }}
                      placeholder={{
                        label: '',
                        value: 'Michael',
                        color: 'red'
                      }}
                      onValueChange={(value) => console.log(value)}
                      items={[
                        { label: 'Michael', value: 'Michael' },
                        { label: 'Hazel William', value: 'Hazel William' },
                        { label: 'Lucas Benjamin', value: 'Lucas Benjamin' },
                      ]}
                    />
                  </View>
                  <Icon name='user' type='FontAwesome' style={styles.formIcon} />
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('Destination 1')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='location-pin' type='Entypo' style={styles.formIcon} />
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('Destination 2')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='location-pin' type='Entypo' style={styles.formIcon} />
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('From Date')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='calendar' type='FontAwesome' style={styles.formIcon} />
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('To Date')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='calendar' type='FontAwesome' style={styles.formIcon} />
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('Total Kilometers')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='road' type='FontAwesome' style={styles.formIcon} />
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('Price')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='money' type='FontAwesome' style={styles.formIcon} />
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
              <Icon name='close' type='AntDesign'  />
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