import React from 'react'
import { FlatList } from 'react-native'
import { } from 'native-base'

import styles from './../styles'
import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@utility/translation'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.renderTemplate = this.renderTemplate.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  renderTemplate() {
    return <Placeholder />
  }

  renderItem({ item }) {
    return (
      <Item
        language={this.props.language}
        item={item}
        onDelete={this.props.onDelete}
      />
    )
  }

  render() {
    return (
      <>
        <FlatList
          numColumns={3}
          data={this.props.fetching ? [1, 2] : this.props.list}
          renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
        />
      </>
    )
  }
}