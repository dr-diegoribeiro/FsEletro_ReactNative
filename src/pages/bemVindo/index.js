import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';
import App from '../../component/Carousel';


import Eletro from '../../component/Eletro';

export default function bemVindo() {
 const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>

       <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Eletro img={require('../../assets/logofs.png')} cost="" >
        ...
          </Eletro>
        </View>

        <center>
        <Text style={styles.text}>SEJA BEM VINDX</Text>
        </center>
      
        <App/>

         <View style={styles.textContainer}>
            <Text style={[styles.text, { color: '#CECECF'} ]}>•</Text>
            <Text style={styles.text}>HARDWARE</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>•</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>INFORMÁTICA</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
         </View>
       </View>

      <View style={styles.line} />

      <ScrollView>
          <center><Text style={styles.text}>CONFIRA NOSSOS PRODUTOS</Text></center>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Eletro img={require('../../assets/clique.png')} cost="." onClick={()=> navigation.navigate('Home') }>
          produtos com desconto
          </Eletro>
        </View>


      </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});