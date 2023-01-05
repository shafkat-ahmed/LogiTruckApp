import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';



  const MultiSelectComponent = ({data,onChange,value,title,labelField,valueField}) => {
    const [selected, setSelected] = useState([]);
    useEffect(() => {
      
       // update();

  }, []);

  const update = () => {
     console.log("inside update");
     if(value.length>0) {
      console.log("inside update if---------------->");
      value.map((item)=>{
      console.log("inside update if map---------->"); 
      return
      (
        <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item[`${labelField}`]}</Text>
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        </View>
      );
    });
  }
  else{
    console.log("map e jai nai");
  }
  
  }


    const renderItem = (item: any) => {
      return (
        <View style={styles.item}>
          <Text style={styles.selectedTextStyle}>{item[`${labelField}`]}</Text>
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        </View>
      );
    };

    const renderUpdateItem = (item) => {
      return (
        <View style={styles.item}>
          <Text style={styles.selectedTextStyle}>{item[`${labelField}`]}</Text>
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        </View>
      );
    };

    return (
      <View style={styles.formSelect}>
        <MultiSelect
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          labelField={labelField}
          valueField={valueField}
          placeholder={title?title:"Select Risk you want to exclude"}
          value={value}
          search
          searchPlaceholder="Search..."
          onChange={onChange}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
          renderItem={renderItem}
          renderSelectedItem={(item, unSelect) => (
            <View style={{marginLeft:10}}>
            <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
              <View style={styles.selectedStyle}>
                <Text style={styles.textSelectedStyle}>{item[`${labelField}`]}</Text>
                <AntDesign color="black" name="delete" size={17} />
              </View>
            </TouchableOpacity>
            </View>
          )}
          activeColor="red"
        />
      </View>
    );
  };

export default MultiSelectComponent;
