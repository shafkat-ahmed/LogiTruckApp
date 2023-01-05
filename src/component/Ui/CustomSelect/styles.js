import { COLOR } from '@theme/typography';
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

   // container: { padding: 16 },

    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 14,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      //backgroundColor:Colors.red,
    },
    selectedStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 14,
      backgroundColor: 'red',
      shadowColor: '#000',
      marginTop: 8,
      marginRight: 12,
      paddingHorizontal: 12,
      paddingVertical: 8,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,

    },
    textSelectedStyle: {
      marginRight: 5,
      fontSize: 16,
      color:'black',
    },
    dropdown: {
        paddingHorizontal: 8,
        width:'95%',
        alignSelf:'center',
        //marginTop:10,
        height:50,
        
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      // placeholderStyle: {
      //   fontSize: 12,
      //   color:Colors.darkGrey,
      // },
      // selectedTextStyle: {
      //   fontSize: 16,
      //   color:Colors.black,
      // },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      formSelect: {
        flexDirection: 'column',
        alignItems: 'center',
        //paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: COLOR.smokeLight
    },
  });