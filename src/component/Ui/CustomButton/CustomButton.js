import { __ } from '@utility/translation'
import { Icon, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={[styles.formBtn,props.buttonStyle]} onPress={props.onPress}>
        <Text style={styles.formBtnText}>{__(props.text)}</Text>
        <Icon name={props.iconName} type={props.type?props.type:'AntDesign'} style={styles.formBtnIcon} />
    </TouchableOpacity>
  )
}

export default CustomButton
