import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Eletro(props) {

 function filterDesc(desc){
    if(desc.length < 27){
        return desc;
    }

    return `${desc.substring(0, 23)}...`;
 }

 return (
   <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image
        source={props.img}
        style={styles.eletroImg}
      />
      <Text style={styles.eletroText}>
          {filterDesc(props.children)}
      </Text>
      <View opacity={0.4}>
        <Text style={styles.eletroText}> {props.cost} </Text>
      </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    eletroImg:{
        width: 175,
        height: 175
    },
    eletroText:{
        fontSize: 16
    }
});