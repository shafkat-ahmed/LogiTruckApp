import React from 'react'
import { View } from 'native-base'
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <View style={styles.tripItem}>
        <Placeholder
          Animation={Fade}
        >
          <View style={styles.truckInfo}>
            <View style={{flex: 1}}>
              <PlaceholderLine width={80} />
              <PlaceholderLine width={40} />
            </View>
            <PlaceholderLine width={20} style={styles.truckFare} />
          </View>
          <View style={styles.tripInfo}>
            <PlaceholderLine width={80} style={styles.placeText} />
            <PlaceholderLine width={60} style={styles.placeText}  />
          </View>
        </Placeholder>
      </View>
    )
  }
}