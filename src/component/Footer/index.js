import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Eletro from '../Eletro';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>

       <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>

            <Eletro img={require('../../assets/note2.png')} cost="R$4.099,00">
            Notebook Acer Aspire W10
          </Eletro>
            </View>
            <View style={{marginHorizontal: 10}}>
            <Eletro img={require('../../assets/pcGamer2.jpg')} cost="R$9.838,00" >
          Pc Gamer GTX Intel I7 4ºG
          </Eletro>
            </View>
            <View style={{marginHorizontal: 10}}>
            <Eletro img={require('../../assets/tablet1.jpg')} cost="R$7.999,00" >
          iPad Pro 11" 2ª G. Apple
          </Eletro>
            </View>
        </ScrollView> 
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})