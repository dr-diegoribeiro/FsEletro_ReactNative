import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';
import App from '../../component/Carousel';


import Eletro from '../../component/Eletro';

export default function Home() {
 const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>

       <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Eletro img={require('../../assets/logofs.png')} cost="" >
        ...
          </Eletro>
        </View>

        <Text style={styles.text}># TECH # TOPHARDWARE # DEVEL # SOVEM</Text>
      
        <App/>

         <View style={styles.textContainer}>
            <Text style={styles.text}>DEPARTAMENTO</Text>
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
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Eletro img={require('../../assets/note1.jpg')} cost="R$3.299,00" onClick={()=> navigation.navigate('Detail') }>
          Notebook VAIO W10
          </Eletro>
          <Eletro img={require('../../assets/note2.png')} cost="R$4.099,00" onClick={()=> alert('PRODUTO INDISPONÍVEL')}>
            Notebook Acer Aspire W10
          </Eletro>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Eletro img={require('../../assets/tablet1.jpg')} cost="R$7.999,00" onClick={()=> alert('PRODUTO INDISPONÍVEL')}>
          iPad Pro 11" 2ª G. Apple
          </Eletro>
          <Eletro img={require('../../assets/tablet2.jpg')} cost="R$2.500,00" onClick={()=> alert('PRODUTO INDISPONÍVEL')}>
          Tablet Samsung Galaxy S6
          </Eletro>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Eletro img={require('../../assets/pcGame1.jpg')} cost="R$4.232,00" onClick={()=> alert('PRODUTO INDISPONÍVEL')}>
          PC Gamer GeForce GTX
          </Eletro>
          <Eletro img={require('../../assets/pcGamer2.jpg')} cost="R$9.838,00" onClick={()=> alert('PRODUTO INDISPONÍVEL')}>
          Pc Gamer GTX Intel I7 4ºG
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