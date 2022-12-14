import React from 'react'
import PropTypes from 'prop-types'
import { StatusBar, TouchableOpacity } from 'react-native'
import { Header as HeaderNB, View, Text, Icon } from 'native-base'
import { __ } from '@utility/translation'

import theme from '@theme/styles'
import { openDrawer, back, navigate } from '@utility/navigation'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.renderStatusBar = this.renderStatusBar.bind(this)
    this.renderNavLeft = this.renderNavLeft.bind(this)
    this.renderNavMiddle = this.renderNavMiddle.bind(this)
    this.renderNavRight = this.renderNavRight.bind(this)
  }

  renderStatusBar() {
    if (this.props.showStatusBar) {
      if (this.props.statusBarType === 'light') {
        return <StatusBar backgroundColor='rgba(255, 255, 255, 1)' barStyle='dark-content' />
      } else if (this.props.statusBarType === 'dark') {
        return <StatusBar backgroundColor='rgba(36, 42, 56, 1)' barStyle='light-content' />
      }
    }

    return null
  }

  renderNavLeft() {
    if (!this.props.showNavLeft) {
      return null
    }

    let icon
    if (this.props.navLeftContent) {
      icon = this.props.navLeftContent
    } else if (this.props.navLeftType === 'menu') {
      icon = <TouchableOpacity style={theme.navBtn} onPress={openDrawer}>
        <Icon name='sort' type='MaterialIcons' style={theme.navBtnIcon} />
      </TouchableOpacity>
    } else if (this.props.navLeftType === 'back') {
      icon = <TouchableOpacity style={theme.navBtn} onPress={back}>
        <Icon name='arrow-left' type='Feather' style={theme.navBtnIcon} />
      </TouchableOpacity>
    }

    return (
      <View style={this.props.navLeftStyle}>
        {icon}
      </View>
    )
  }

  renderNavMiddle() {
    if (!this.props.showNavMiddle) {
      return null
    }

    const titleStyle = []
    if (this.props.navMiddleType === 'tiny') {
      titleStyle.push(theme.tiny)
    } else if (this.props.navMiddleType === 'small') {
      titleStyle.push(theme.small)
    } else if (this.props.navMiddleType === 'medium') {
      titleStyle.push(theme.medium)
    } else if (this.props.navMiddleType === 'large') {
      titleStyle.push(theme.large)
    } else if (this.props.navMiddleType === 'huge') {
      titleStyle.push(theme.huge)
    }

    if (this.props.theme === 'light') {
      titleStyle.push(theme.light)
    } else if (this.props.theme === 'dark') {
      titleStyle.push(theme.dark)
    }

    if (this.props.navTextColor) {
      titleStyle.push({
        color: this.props.navTextColor
      })
    }

    if (this.props.navTextWeight) {
      titleStyle.push({
        weight: this.props.navTextWeight
      })
    }

    return (
      <View style={this.props.navMiddleStyle}>
        {
          this.props.navMiddleContent
            ? this.props.navMiddleContent
            : <Text style={[titleStyle, theme.navText]}>{this.props.title}</Text>
        }
      </View>
    )
  }

  renderNavRight() {
    if (!this.props.showNavRight) {
      return null
    }

    let navRightContent
    if (this.props.navRightContent) {
      navRightContent = this.props.navRightContent
    } else if (this.props.navRightType === 'search') {
      navRightContent = <TouchableOpacity onPress={() => {
        navigate('PublicPropertyDetail')
      }}>
        <Icon name='search' type='FontAwesome' style={theme.navRightIcon} />
      </TouchableOpacity>
    } else if (this.props.navRightType === 'menu') {
      navRightContent = <TouchableOpacity onPress={() => {
        navigate('MemberPropertyAdd')
      }}>
        <Icon name='plus' type='FontAwesome' style={theme.navRightIcon} />
      </TouchableOpacity>
    } else if (this.props.navRightType === 'share') {
      navRightContent = <TouchableOpacity onPress={this.onShare}>
        <Icon name='ios-share-alt' type='Ionicons' style={theme.navRightIcon} />
      </TouchableOpacity>
    }

    return (
      <View style={this.props.navRightStyle}>
        {navRightContent}
      </View>
    )
  }

  render() {
    let headerStyle
    if (this.props.theme === 'light') {
      headerStyle = theme.headerLight
    } else if (this.props.theme === 'dark') {
      headerStyle = theme.headerDark
    } else {
      headerStyle = theme.headerTransparent
    }

    return (
      <HeaderNB style={headerStyle}>
        {this.renderStatusBar()}
        <View style={this.props.navStyle}>
          {this.renderNavLeft()}

          {this.renderNavMiddle()}

          {this.renderNavRight()}
        </View>
      </HeaderNB>
    )
  }
}

Header.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),

  showStatusBar: PropTypes.bool,
  statusBarType: PropTypes.oneOf(['light', 'dark']),

  navStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),

  showNavLeft: PropTypes.bool,
  navLeftStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  navLeftType: PropTypes.oneOf(['home', 'back', 'menu']),
  navLeftContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]),

  showNavMiddle: PropTypes.bool,
  navMiddleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  navMiddleType: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  title: PropTypes.string,
  navMiddleContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]),
  navTextColor: PropTypes.string,
  navTextWeight: PropTypes.string,

  showNavRight: PropTypes.bool,
  navRightStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  navRightContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ])
}

Header.defaultProps = {
  theme: 'light',

  showStatusBar: true,
  statusBarType: 'light',

  baseStyle: theme.navTransparent,
  navStyle: theme.nav,

  showNavLeft: true,
  navLeftStyle: theme.navLeft,
  navLeftType: '',
  navLeftContent: null,

  showNavMiddle: true,
  navMiddleStyle: theme.navMiddle,
  navMiddleType: 'small',
  title: '',
  navMiddleContent: null,
    
  showNavRight: true,
  navRightStyle: theme.navRight,
  navRightContent: null
}

export default Header