import React from 'react'
import { ScrollView } from 'react-native'
import { Container, Content, View, Text, Icon } from 'native-base'

import styles from './styles'
import Header from '@component/Header'
import { navigate } from '@utility/navigation'
import theme from '@theme/styles'
import Languages from '@config/language'
import { setLocale, __ } from '@utility/translation'

export default class extends React.Component {
  render() {
    return (
      <Container style={theme.layoutFx}>
        <Header statusBarType='dark' navLeftType='back' />
        <Content contentContainerStyle={theme.layout}>
          <View style={styles.privacyContent} />
          <View style={styles.privacyContent2} />
          <View style={styles.privacyContainer}>
            <ScrollView>
              <View style={styles.privacyContentCol}>
                <Icon name='truck' type='Fontisto' style={styles.privacyContentIcon} />
                <View style={styles.privacyHeaderContent}>
                  <Text style={styles.privacyHeaderTitle}>{__('Privacy Policy')}</Text>
                  <Text style={styles.privacyHeaderText}>{__('Short story privacy our company')}</Text>
                </View>
              </View>
              <View style={styles.privacyContent3}>
                <Text style={styles.privacyContentText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{'\n\n'}
                  Suspendisse potenti nullam ac tortor vitae. In ante metus dictum at tempor commodo ullamcorper. Luctus accumsan tortor posuere ac ut consequat semper viverra. Viverra mauris in aliquam sem. Id diam vel quam elementum pulvinar etiam. Amet cursus sit amet dictum sit amet justo donec enim. Urna duis convallis convallis tellus.{'\n\n'}
                  Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Justo eget magna fermentum iaculis.
                </Text>
              </View>
            </ScrollView>
          </View>
        </Content>
      </Container>
    )
  }
}