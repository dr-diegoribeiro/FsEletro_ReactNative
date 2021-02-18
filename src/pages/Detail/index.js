import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';


export default function Detail({ navigation }) {

  navigation.setOptions({
     headerTitle: 'Notebook VAIO'
  })

 return (
   <ScrollView style={styles.container}>
       <Image
       source={require('../../assets/logofs.png')}
       style={styles.image}
       resizeMode="cover"
       />

       <View>
         <View>
           <Text style={[styles.title, { fontSize: 24 } ]}>R$ 3.299,00</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 30 } ]}>Notebook VAIO Core i5-8250U 12GB 1TB Tela Full HD 14” <br></br>
           FE14 VJFE41F11X-B1121H</Text>
         </View>

         <View style={styles.dotContainer}>

          <Dot color="#ddd" />
          <Dot color="#000" />
         </View>

         <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Notebook VAIO Core i5
          </Text>
          <Text style={styles.textContent}>
          O VAIO FE14 possui uma tela Full HD de alta resolução com moldura reduzida, ou seja, reduzimos o tamanho das bordas laterais do notebook mantendo a tela de 14 polegadas. Usabilidade, ergonomia para digitar com linhas delicadas e um teclado silencioso. Mais leve, o VAIO FE14 possui apenas 1,55 kg e Wireless AC (3 vezes mais rápido do que o 802.11n). Um notebook tão bonito e potente como o VAIO FE14 merece nada menos do que uma bateria de longa duração.
          </Text>
          <Text style={styles.textList}>
            - Altura: 1,98 Centímetros
          </Text>
          <Text style={styles.textList}>
           - Largura: 32,40 Centímetros
          </Text>
          <Text style={styles.textList}>
          - Profundidade: 22,10 Centímetros
          </Text>
          <Text style={styles.textList}>
           - Peso: 1,55 Quilos
          </Text>
         </View>

         <View style={styles.line} />
         <View>
           <Text style={[styles.title, { fontSize: 15 } ]}>FORMAS DE PAGAMENTO DISPONÍVEIS</Text>
         </View>
         <View style={styles.line} />

        
          <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#FFF" >BOLETO</SizeButton>
            <SizeButton bgColor="#17181a" color="#FFF">CRÉDITO</SizeButton>
            <SizeButton>DEBITO</SizeButton>
            <SizeButton>PIX</SizeButton>
          </ScrollView>
         </View>

        <Button/>
        

        <View style={styles.line} />

        <Footer/>

       </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%'
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});