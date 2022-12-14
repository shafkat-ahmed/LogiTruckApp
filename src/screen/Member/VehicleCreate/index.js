import React from 'react'
import { TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import { Container, Content, View, Text, Icon } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import RNPickerSelect from 'react-native-picker-select'
import Modal from 'react-native-modalbox'

import styles from './styles'

import Header from '@component/Header'
import { navigate } from '@utility/navigation'
import theme from '@theme/styles'
import Languages from '@config/language'
import { setLocale, __ } from '@utility/translation'
import { bind } from '@utility/component'
import request from '@utility/request'

import Truck from './Truck'
import truckList from './data/truck'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Tata Ace',
      label: ''
    }
    bind(this)
    this.fetchTruckList = this.fetchTruckList.bind(this)
  }
  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })
    await this.fetchTruckList()
  }
  async fetchTruckList() {
    await this.promisedSetState({
      fetchingTruckList: true
    })
    const list = await request(truckList)
    await this.promisedSetState({
      truckList: list,
      fetchingTruckList: false
    })
  }
  onDelete() {
    Alert.alert(
      'Alert',
      'Are you sure you want to delete this photo?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK'
        }
      ],
      { cancelable: false }
    )
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
                <Icon name='truck' type='Fontisto' style={styles.formHeaderIcon} />
                <View style={styles.formHeaderRow}>
                  <Text style={styles.formHeaderTitle}>{__('Create Vehicle')}</Text>
                  <Text style={styles.formHeaderDesc}>{__('Create your vehicle informations')}</Text>
                </View>
              </View>
              <View style={styles.formContent}>
                <View style={styles.formContentHeader}>
                  <Text style={styles.formContentHeaderTitle}>{__('Vehicle Info')}</Text>
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
                    placeholder={__('Capacity')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='weight-hanging' type='FontAwesome5' style={styles.formIcon} />
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('Vehicle Number')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='filter-1' type='MaterialIcons' style={styles.formIcon} />
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('Color')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='color-lens' type='MaterialIcons' style={styles.formIcon} />
                </View>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder={__('Year')}
                    placeholderTextColor='rgba(36,42,56,0.4)'
                    style={styles.formInput}
                  />
                  <Icon name='calendar' type='FontAwesome' style={styles.formIcon} />
                </View>
              </View>
              <View style={styles.formContent}>
                <View style={styles.formContentHeader}>
                  <Text style={styles.formContentHeaderTitle}>{__('Photos')}</Text>
                </View>
                <View style={styles.photos}>
                  <Truck
                    language={this.state.language}
                    list={this.state.truckList}
                    fetching={this.state.fetchingTruckList}
                    onDelete={this.onDelete}
                  />
                </View>
              </View>
              <View style={styles.formContent}>
                <View style={styles.formContentHeader}>
                  <Text style={styles.formContentHeaderTitle}>{__('Documents')}</Text>
                </View>
                <View style={styles.formRow}>
                  <View style={styles.formFile}>
                    <Text style={styles.formFileText}>RC Boook 012442412.png</Text>
                    <TouchableOpacity style={styles.formDeleteBtn}>
                      <Icon name='trash-o' type='FontAwesome' style={styles.formDeleteBtnIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.formRow}>
                  <View style={styles.formFile}>
                    <Text style={styles.formFileText}>{__('Insurance Document')}</Text>
                    <TouchableOpacity style={styles.formDeleteBtn}>
                      <Icon name='upload' type='AntDesign' style={styles.formDeleteBtnIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.formRow}>
                  <View style={styles.formFile}>
                    <Text style={styles.formFileText}>{__('Pollution Document')}</Text>
                    <TouchableOpacity style={styles.formDeleteBtn}>
                      <Icon name='upload' type='AntDesign' style={styles.formDeleteBtnIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.formBtn} onPress={() => this.refs.Form.open()}>
                <Text style={styles.formBtnText}>{__('Save')}</Text>
                <Icon name='check' type='FontAwesome' style={styles.formBtnIcon} />
              </TouchableOpacity>
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