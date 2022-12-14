import React from 'react'
import { Dimensions } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

/* Drawer Menu */
import DrawerContent from '@component/Menu/Left'

/* Public Screens */
import PublicIntro from '@screen/Public/Intro'
import PublicAboutUs from '@screen/Public/AboutUs'
import PublicPrivacyPolicy from '@screen/Public/PrivacyPolicy'
import PublicTermsofUse from '@screen/Public/TermsofUse'
import PublicContactUs from '@screen/Public/ContactUs'
import PublicFaqs from '@screen/Public/Faqs'

import PublicLanguage from '@screen/Public/Language'

/* Member Screens */
import MemberHome from '@screen/Member/Home'
import MemberSignUp from '@screen/Member/SignUp'
import MemberSignIn from '@screen/Member/SignIn'
import MemberForgotPassword from '@screen/Member/ForgotPassword'
import MemberResetPassword from '@screen/Member/ResetPassword'
import MemberProfile from '@screen/Member/Profile'
import MemberSettings from '@screen/Member/Settings'
import MemberChangePassword from '@screen/Member/ChangePassword'
import MemberLoads from '@screen/Member/Loads'
import MemberLoadCreate from '@screen/Member/LoadCreate'
import MemberTrips from '@screen/Member/Trips'
import MemberTripCreate from '@screen/Member/TripCreate'
import MemberDrivers from '@screen/Member/Drivers'
import MemberDriverCreate from '@screen/Member/DriverCreate'
import MemberVehicles from '@screen/Member/Vehicles'
import MemberVehicleCreate from '@screen/Member/VehicleCreate'
import MemberSearchLoad from '@screen/Member/SearchLoad'
import MemberSearchLoadList from '@screen/Member/SearchLoadList'
import MemberSearchLoadDetail from '@screen/Member/SearchLoadDetail'
import MemberSearchTrip from '@screen/Member/SearchTrip'
import MemberSearchTripList from '@screen/Member/SearchTripList'
import MemberSearchTripDetail from '@screen/Member/SearchTripDetail'

/* Navigation */
import { navigationRef } from '@utility/navigation'
import { setDefaultLocale } from '@utility/translation'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const { width } = Dimensions.get('window')

const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress
  }
})

const options = {
  cardStyleInterpolator: forFade
}

function DrawerRoot() {
  return (
    <Drawer.Navigator
      initialRouteName='Drawer'
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{ width: width - 100 }}
    >
      <Drawer.Screen name='MemberHome' component={MemberHome} />
    </Drawer.Navigator>
  )
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAppInitiated: false
    }
    this.checkIsAppInitiated = this.checkIsAppInitiated.bind(this)
  }

  async componentDidMount() {
    await this.checkIsAppInitiated()
  }

  async checkIsAppInitiated() {
    await setDefaultLocale()
    this.setState({
      isAppInitiated: true
    })
  }

  render() {
    if (!this.state.isAppInitiated) {
      return null
    }

    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName='Drawer' headerMode='none'>
          <Stack.Screen name='Drawer' component={DrawerRoot} />

          <Stack.Screen name='PublicIntro' component={PublicIntro} />
          <Stack.Screen name='PublicAboutUs' component={PublicAboutUs} />
          <Stack.Screen name='PublicPrivacyPolicy' component={PublicPrivacyPolicy} />
          <Stack.Screen name='PublicTermsofUse' component={PublicTermsofUse} />
          <Stack.Screen name='PublicContactUs' component={PublicContactUs} />
          <Stack.Screen name='PublicFaqs' component={PublicFaqs} />
          <Stack.Screen name='PublicLanguage' component={PublicLanguage} />

          <Stack.Screen name='MemberSignUp' component={MemberSignUp} />
          <Stack.Screen name='MemberSignIn' component={MemberSignIn} />
          <Stack.Screen name='MemberForgotPassword' component={MemberForgotPassword} />
          <Stack.Screen name='MemberResetPassword' component={MemberResetPassword} />
          <Stack.Screen name='MemberProfile' component={MemberProfile} />
          <Stack.Screen name='MemberSettings' component={MemberSettings} />
          <Stack.Screen name='MemberChangePassword' component={MemberChangePassword} />
          <Stack.Screen name='MemberLoads' component={MemberLoads} />
          <Stack.Screen name='MemberLoadCreate' component={MemberLoadCreate} />
          <Stack.Screen name='MemberTrips' component={MemberTrips} />
          <Stack.Screen name='MemberTripCreate' component={MemberTripCreate} />
          <Stack.Screen name='MemberDrivers' component={MemberDrivers} />
          <Stack.Screen name='MemberDriverCreate' component={MemberDriverCreate} />
          <Stack.Screen name='MemberVehicles' component={MemberVehicles} />
          <Stack.Screen name='MemberVehicleCreate' component={MemberVehicleCreate} />
          <Stack.Screen name='MemberSearchLoad' component={MemberSearchLoad} />
          <Stack.Screen name='MemberSearchLoadList' component={MemberSearchLoadList} />
          <Stack.Screen name='MemberSearchLoadDetail' component={MemberSearchLoadDetail} />
          <Stack.Screen name='MemberSearchTrip' component={MemberSearchTrip} />
          <Stack.Screen name='MemberSearchTripList' component={MemberSearchTripList} />
          <Stack.Screen name='MemberSearchTripDetail' component={MemberSearchTripDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}