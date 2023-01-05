import CustomButton from '@component/Ui/CustomButton/CustomButton'
import CustomTextInput from '@component/Ui/CustomTextInput/CustomTextInput'
import AsyncStorage from '@react-native-community/async-storage'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import { Icon, Text, View } from 'native-base'
import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modalbox'
import CustomContainer from '../../../component/Ui/CustomContainer'
import styles from './styles'

import { useDispatch } from 'react-redux'
import { fillup, login } from '../../../redux/features/loginSlice'

const UserSignIn = () => {

  // var username = useSelector((state)=>state.login.username);
  // var password = useSelector((state)=>state.login.password);

  const dispatch = useDispatch();

  useEffect(()=> {
    componentDidMount();
  },[])

  const componentDidMount = async () => {

    console.log("inside component did mount");

    try {
      const data = await AsyncStorage.getItem('userParam');

      if (data !== null || typeof data !== undefined) {

        const info = JSON.parse(data);
        console.log("ASYNC DATA.......", info);

        let savedParams = {
          username: info.username,
          password: info.password
        };

        dispatch(login( savedParams ))
        .unwrap()
        .then((res) => {
           console.log('Response is', res);
           navigate('MemberDashboard');
          }
        )
        .catch((err) => {
          console.log('error login', err);
        });

      }
    } catch (error) {
    }
  };


  const [username,setUsername] = useState(null)
  const [password,setPassword] = useState(null)

  const submit = async () => {
    dispatch(login({ username, password }))
        .unwrap()
        .then((res) => {
            console.log('Response is', res);
            AsyncStorage.setItem("userParam",JSON.stringify({username,password}));
            navigate('MemberDashboard');
          }
        )
        .catch((err) => {
          console.log('error login', err);
        });
  }
  

    return (
        <CustomContainer>
          <View style={styles.formContainer}>
            <View style={styles.formHeader}>
              <Text style={styles.formHeaderTitle}>{__('Truck Track')}</Text>
              <Text style={styles.formHeaderDesc}>{__('Welcome To Truck Track Booking App')}!</Text>
            </View>
            <View style={styles.formContent}>

              <CustomTextInput iconName="envelope" placeholder="Email Address or Mobile Number" value={username} onChangeText={(e)=> setUsername(e) } />
              
              <CustomTextInput iconName="lock" placeholder="Password" value={password} onChangeText={(e)=> setPassword(e) } />

              <TouchableOpacity style={styles.forgotBtn} onPress={() => { dispatch(fillup()) }}>
                <Text style={styles.forgotBtnText}>{__('Forgot Password')}?</Text>
              </TouchableOpacity>

              <CustomButton iconName="arrowright" text="Sign In" onPress={()=>submit()} />

              <View style={styles.formFooter}>
              <Text style={styles.formFooterText}>{__('Don\'t have an account')}?</Text>
              <TouchableOpacity style={styles.formFooterBtn} onPress={() => { navigate('MemberSignUp') }}>
                <Text style={styles.formFooterBtnText}>{__('Sign Up')}</Text>
              </TouchableOpacity>
              </View>

            </View>
          </View>
          
          <Modal
            isOpen={true}
            position={'center'}
            swipeToClose={false}
            style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text />
              <TouchableOpacity style={styles.modalHeaderBtn}>
                <Icon name='close' type='AntDesign' />
              </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.modalContent}>
              <Icon name='check-circle' type='Feather' style={styles.modalContentIcon} />
              <Text style={styles.modalContentTitle}>{__('Thank you')}</Text>
              <Text style={styles.modalContentDesc}>{__('We have sent a verification to your registered email, kindly very your email address and access the account')}</Text>
            </ScrollView>
          </Modal>
        </CustomContainer>
    )
}

export default UserSignIn 