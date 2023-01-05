import { Container, Content, View } from 'native-base'
import React from 'react'

import Header from '@component/Header'
import theme from '@theme/styles'
import styles from './styles'

const CustomContainer = (props) => {
  return (
    <Container style={theme.layoutFx}>
    <Header statusBarType='dark' navLeftType={props.navLeftType} />
    <Content contentContainerStyle={theme.layout}>
    <View style={[styles.bgCrv,props.bgCrvStyles]} />
    <View style={[styles.bgCrvOverlay,props.bgCrvOverlayStyles]} />
      {props.children}
    </Content>
    </Container>
  )
}

export default CustomContainer
