import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Container, View, Text, Content } from 'native-base'
import AppIntroSlider from 'react-native-app-intro-slider'

import styles from './styles'

import Header from '@component/Header'
import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import { bind } from '@utility/component'

const slides = [
  {
    key: 'one',
    text: 'Welcome to LogiTruck',
    desc: 'Largest truck services in the world',
    text_ar: 'النص 1',
    image: require('@asset/images/slide1.png')
  },
  {
    key: 'two',
    text: 'Loader',
    desc: 'Load your parcel and get a truck quickly',
    text_ar: 'النص 2',
    image: require('@asset/images/slide2.png')
  },
  {
    key: 'three',
    text: 'Transporter',
    desc: 'Find a load and book quickly',
    text_ar: 'النص 3',
    image: require('@asset/images/slide3.png')
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showRealApp: false
    }
    bind(this)

    this.onDone = this.onDone.bind(this)
    this.onSkip = this.onSkip.bind(this)
    this.onLeave = this.onLeave.bind(this)
    this.renderNextButton = this.renderNextButton.bind(this)
    this.renderPrevButton = this.renderPrevButton.bind(this)
    this.renderSkipButton = this.renderSkipButton.bind(this)
    this.renderDoneButton = this.renderDoneButton.bind(this)
  }

  onDone() {
    this.onLeave()
  }
  onSkip() {
    this.onLeave()
  }
  async onLeave() {
    await this.props.updateShownIntroductionSlider(true)
    navigate('')
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slideContainer}>
        <Image source={item.image} resizeMode={'contain'} style={styles.slideImg} resizeMode='contain' />
        <Text style={styles.slideText}>{item['text_' + this.props.language] || item.text}</Text>
        <Text style={styles.slideDesc}>{item.desc}</Text>
      </View>
    )
  }
  renderNextButton() {
    return (
      <TouchableOpacity style={styles.introBtn}>
        <Text style={styles.introBtnText}>{__('Next')}</Text>
      </TouchableOpacity>
    );
  }
  renderPrevButton() {
    return (
      <TouchableOpacity style={styles.introBtn}>
        <Text style={styles.introBtnText}>{__('Prev')}</Text>
      </TouchableOpacity>
    );
  }
  renderSkipButton() {
    return (
      <TouchableOpacity style={styles.introBtn}>
        <Text style={styles.introBtnText}>{__('Skip')}</Text>
      </TouchableOpacity>
    );
  }
  renderDoneButton() {
    return (
      <TouchableOpacity style={styles.introBtn}>
        <Text style={styles.introBtnText}>{__('Done')}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    if (this.state.showRealApp) {
      return <App />
    } else {
      return <Container style={theme.layoutFx}>
        <Header statusBarType='dark' />

        <Content contentContainerStyle={theme.layout}>
          <AppIntroSlider
            data={slides}
            renderItem={this._renderItem}
            onDone={this.onDone}
            onSkip={this.onSkip}
            showSkipButton
            renderNextButton={this.renderNextButton}
            renderPrevButton={this.renderPrevButton}
            renderSkipButton={this.renderSkipButton}
            renderDoneButton={this.renderDoneButton}
          />
        </Content>
      </Container>
    }
  }
}