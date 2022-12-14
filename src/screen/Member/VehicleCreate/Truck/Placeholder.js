import React from 'react'
import { View } from 'native-base'
import { Fade, Placeholder, PlaceholderMedia } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <View style={styles.photoItem}>
        <Placeholder
          Animation={Fade}
        >
          <View>
            <PlaceholderMedia style={styles.photoItemImg} />
          </View>
        </Placeholder>
      </View>
    )
  }
}
