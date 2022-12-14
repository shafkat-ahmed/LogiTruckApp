import React from 'react'
import { TouchableOpacity, TextInput } from 'react-native'
import { Container, Content, View, Text, Icon, Accordion } from 'native-base'

import styles from './styles'
import Header from '@component/Header'
import { navigate } from '@utility/navigation'
import theme from '@theme/styles'
import Languages from '@config/language'
import { setLocale, __ } from '@utility/translation'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.renderAccordionHeader = this.renderAccordionHeader.bind(this)
    this.renderAccordionContent = this.renderAccordionContent.bind(this)
    this.renderAccordionContentEnsure = this.renderAccordionContentEnsure.bind(this)
    this.renderAccordionContentMonitor = this.renderAccordionContentMonitor.bind(this)
    this.renderAccordionContentSure = this.renderAccordionContentSure.bind(this)
  }

  renderAccordionHeader(item, expanded) {
    return (
      <View style={styles.faqContentTab}>
        {expanded
          ? <Text style={styles.faqContentTabActiveText}>{item.title}</Text>
          : <Text style={styles.faqContentTabText}>{item.title}</Text>}
        {expanded
          ? <Icon name='down' type='AntDesign' style={styles.faqContentTabActiveIcon} />
          : <Icon name='right' type='AntDesign' style={styles.faqContentTabIcon} />}
      </View>
    )
  }
  renderAccordionContent(item) {
    var fn = 'renderAccordionContent' + (item.type.charAt(0).toUpperCase() + item.type.substr(1))
    return <View style={styles.faqContentItems}>
      {this[fn]()}
    </View>
  }
  renderAccordionContentEnsure() {
    return <View>
      <Text style={styles.faqContentItemText}>{__('Aliquam nisi mi, posuere sit amet iaculis ac, posuere eget risus. Fusce accumsan odio quis lectus ullamcorper scelerisque. Duis scelerisque varius dignissim. Vivamus maximus enim non tincidunt eleifend. Donec scelerisque mollis turpis, non bibendum dolor dictum id. Phasellus sollicitudin, enim at ultrices faucibus.')}</Text>
    </View>
  }
  renderAccordionContentMonitor() {
    return <View>
      <Text style={styles.faqContentItemText}>{__('Aliquam nisi mi, posuere sit amet iaculis ac, posuere eget risus. Fusce accumsan odio quis lectus ullamcorper scelerisque. Duis scelerisque varius dignissim. Vivamus maximus enim non tincidunt eleifend. Donec scelerisque mollis turpis, non bibendum dolor dictum id. Phasellus sollicitudin, enim at ultrices faucibus.')}</Text>
    </View>
  }
  renderAccordionContentSure() {
    return <View>
      <Text style={styles.faqContentItemText}>{__('Aliquam nisi mi, posuere sit amet iaculis ac, posuere eget risus. Fusce accumsan odio quis lectus ullamcorper scelerisque. Duis scelerisque varius dignissim. Vivamus maximus enim non tincidunt eleifend. Donec scelerisque mollis turpis, non bibendum dolor dictum id. Phasellus sollicitudin, enim at ultrices faucibus.')}</Text>
    </View>
  }
  render() {
    return (
      <Container style={theme.layoutFx}>
        <Header statusBarType='dark' navLeftType='back' />
        <Content contentContainerStyle={theme.layout}>
          <View style={styles.faqContent} />
          <View style={styles.faqContent2} />
          <View style={styles.faqContainer}>
            <View style={styles.faqContentCol}>
              <Icon name='truck' type='Fontisto' style={styles.faqContentIcon} />
              <View style={styles.faqHeaderContent}>
                <Text style={styles.faqHeaderTitle}>{__('FAQs')}</Text>
                <Text style={styles.faqHeaderText}>Aliquam nisi mi, posuere sit amet iaculis ac.</Text>
              </View>
            </View>

            <View style={styles.faqSearch}>
              <TextInput
                placeholder={__('Search')}
                style={styles.faqSearchInput}
              />
              <TouchableOpacity style={styles.faqSearchBtn}>
                <Icon name='search' type='FontAwesome' style={styles.faqSearchBtnIcon} />
              </TouchableOpacity>
            </View>

            <Accordion
              dataArray={[
                {
                  type: 'ensure',
                  title: 'Lorem ipsum dolor sit,comsectetur adipiscing elit ?'
                },
                {
                  type: 'monitor',
                  title: 'Pharetra vel turpis nunc eget lorem dolor.'
                },
                {
                  type: 'sure',
                  title: 'Dolor magna eget est lorem ipsum dolor sit amet consectur.'
                }
              ]}
              expanded={0}
              renderHeader={this.renderAccordionHeader}
              renderContent={this.renderAccordionContent}
            />
          </View>
        </Content>
      </Container>
    )
  }
}