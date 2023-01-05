import { __ } from '@utility/translation'
import { Icon, View } from 'native-base'
import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

const CustomTextInput = (props) => {
  return (
    <View style={styles.formInputGroup}>
        <Icon name={props.iconName} type='SimpleLineIcons' style={styles.formInputIcon} />
        <TextInput
            placeholder={__(props.placeholder)}
            style={styles.formInputText}
            onChangeText={props.onChangeText}
            value={props.value}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            placeholderTextColor='grey'
            ref={props.ref}
            onFocus={props.onFocus}
        />
    </View>
  )
}

export default CustomTextInput
