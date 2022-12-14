import React from 'react'
import { View } from 'native-base'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <View style={styles.truckItem}>
        <Placeholder
          Animation={Fade}
        >
          <View style={styles.truckInfo}>
            <PlaceholderMedia style={styles.truckImg} />
            <View style={styles.truckContent}>
              <View style={styles.truckBrand}>
                <PlaceholderLine width={80} style={styles.truckName} />
              </View>
              <View style={styles.rowAlignment}>
                <PlaceholderLine width={20} style={styles.truckNum} />
              </View>
            </View>
          </View>
          <View style={styles.truckContent2}>
            <PlaceholderLine width={40} style={styles.truckPosted} />
          </View>
        </Placeholder>
      </View>
    )
  }
}