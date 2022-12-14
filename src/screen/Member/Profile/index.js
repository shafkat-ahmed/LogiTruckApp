import React from 'react'
import { TouchableOpacity, TextInput, Image } from 'react-native'
import { Container, Content, View, Text, Icon } from 'native-base'
import RNPickerSelect from 'react-native-picker-select'

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
            <View style={styles.profile}>
              <View>
                <Image source={{ uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={styles.profileImg} />
                <TouchableOpacity style={styles.editBtn} onPress={() => {
                  NavigationService.navigate('CustomerProfile')
                }}>
                  <Icon name='edit' type='MaterialIcons' style={styles.editBtnIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.profileContent}>
                <Text style={styles.profileText}>{__('Hey Megan Fox!')}</Text>
                <Text style={styles.profileDesc}>{__('New York')}</Text>
              </View>
            </View>
            <View style={styles.regForm}>
              <View style={styles.infoBox}>
                <View style={styles.infoHeader}>
                  <Text style={styles.infoHeaderText}>{__('Basic Information\'s')}</Text>
                </View>
                <View style={styles.fSelect}>
                  <View style={styles.fPicker}>
                    <RNPickerSelect
                      style={{ placeholder: { color: 'rgba(0, 0, 0, 0.5)' } }}
                      placeholder={{
                        label: '',
                        value: 'Title'
                      }}
                      onValueChange={(value) => console.log(value)}
                      items={[
                        { label: 'Mr.', value: 'Mr.' },
                        { label: 'Mrs.', value: 'Mrs.' },
                        { label: 'M/S', value: 'M/S' },
                      ]}
                    />
                  </View>
                </View>
                <View style={styles.fRow}>
                  <TextInput
                    placeholder={__('Name')}
                    placeholderTextColor='rgba(0,0,0,0.3)'
                    style={styles.fInput}
                  />
                </View>
                <View style={styles.fRow}>
                  <TextInput
                    placeholder={__('Email Address')}
                    placeholderTextColor='rgba(0,0,0,0.3))'
                    style={styles.fInput}
                  />
                </View>
                <View style={styles.fRow}>
                  <TextInput
                    placeholder={__('Mobile Number')}
                    placeholderTextColor='rgba(0,0,0,0.3))'
                    style={styles.fInput}
                  />
                </View>
              </View>
            </View>
            <View style={styles.regForm}>
              <View style={styles.infoBox}>
                <View style={styles.infoHeader}>
                  <Text style={styles.infoHeaderText}>{__('Address Information\'s')}</Text>
                </View>
                <View style={styles.fRow}>
                  <TextInput
                    placeholder={__('Address1')}
                    placeholderTextColor='rgba(0,0,0,0.3))'
                    style={styles.fInput}
                  />
                </View>
                <View style={styles.fRow}>
                  <TextInput
                    placeholder={__('City/Town')}
                    placeholderTextColor='rgba(0,0,0,0.3))'
                    style={styles.fInput}
                  />
                </View>
                <View style={styles.fRow}>
                  <TextInput
                    placeholder={__('State')}
                    placeholderTextColor='rgba(0,0,0,0.3))'
                    style={styles.fInput}
                  />
                </View>
                <View style={styles.fSelect}>
                  <View style={styles.fPicker}>
                    <RNPickerSelect
                      style={{ placeholder: { color: 'rgba(0, 0, 0, 0.5)' } }}
                      placeholder={{
                        label: '',
                        value: 'Country',
                        color: 'red'
                      }}
                      onValueChange={(value) => console.log(value)}
                      items={[
                        { label: 'Country', value: 'Country' },
                        { label: 'Afghanistan', value: 'Afghanistan' },
                        { label: 'Albania', value: 'Albania' },
                      ]}
                    />
                  </View>
                </View>
                <View style={styles.fRow}>
                  <TextInput
                    placeholder={__('Postal Code')}
                    placeholderTextColor='rgba(0,0,0,0.3))'
                    keyboardType={'numeric'}
                    style={styles.fInput}
                  />
                </View>
              </View>
            </View>
            <View style={styles.regForm}>
              <View style={styles.infoBox}>
                <View style={styles.infoHeader}>
                  <Text style={styles.infoHeaderText}>{__('Contact Information\'s')}</Text>
                </View>
                <View style={styles.fRow}>
                  <TextInput
                    placeholder={__('Phone Number 1')}
                    placeholderTextColor='rgba(0,0,0,0.3))'
                    keyboardType={'numeric'}
                    style={styles.fInput}
                  />
                </View>
                <View style={styles.fRow}>
                  <TextInput
                    placeholder={__('Phone Number 2')}
                    placeholderTextColor='rgba(0,0,0,0.3))'
                    keyboardType={'numeric'}
                    style={styles.fInput}
                  />
                </View>
                <View style={styles.fRow}>
                  <TextInput
                    placeholder={__('Website URL')}
                    placeholderTextColor='rgba(0,0,0,0.3))'
                    style={styles.fInput}
                  />
                </View>
                <View style={styles.fRow}>
                  <TextInput
                    placeholder={__('VAT No')}
                    placeholderTextColor='rgba(0,0,0,0.3))'
                    style={styles.fInput}
                  />
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.fBtn}>
              <Text style={styles.fBtnText}>{__('Save')}</Text>
              <Icon name='check' type='FontAwesome' style={styles.fBtnIcon} />
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    )
  }
}