import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Title, TextInput, Button, FAB } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Block } from 'galio-framework'
import Swiper from 'react-native-swiper';
import { width, height } from '../../constants/Utils'
import Header from './Header'

export default function OneStep({ next, prev }) {
  const [titulo, setTitulo] = useState('')
  const [referencia, setReferencia] = useState('')
  const [descricao, setDescricao] = useState('')
  const [finish, setFinish] = useState(false)

  useEffect(() => {
    setFinish((titulo && referencia && descricao))
  }, [titulo, referencia, descricao])

  return (
    <Block flex style={styles.contentContainer}>
      <KeyboardAwareScrollView>
        <Header title={'Crie sua Pasta'} onPrevPage={prev} />
        <Block flex style={styles.inputContainer}>
          <Block center>
            <Image
              style={styles.image}
              source={require('../../../assets/new_folder.png')}>
            </Image>
          </Block>
          <TextInput style={styles.TextInput}
            placeholder={'Titulo que vai aparecer na lista'}
            mode={'flat'}
            label={'Titulo'}
            text={titulo}
            onChangeText={setTitulo}
          />
          <TextInput style={styles.TextInput}
            placeholder={'Ex. o endereço do relato'}
            mode={'flat'}
            label='Ponto de referência'
            text={referencia}
            onChangeText={setReferencia}
          />
          <TextInput style={styles.TextInput}
            placeholder={'Descrição do relato'}
            mode={'flat'}
            label='Descrição'
            multiline={true}
            text={descricao}
            onChangeText={setDescricao}
          />

          <TextInput style={styles.TextInput}
            placeholder={'Descrição do relato'}
            mode={'flat'}
            label='Descrição'
            multiline={true}
            text={descricao}
            onChangeText={setDescricao}
          />
          
        </Block>
        {!!finish &&
          <FAB
            style={styles.fab}
            color={'#fff'}
            icon={"check"}
            onPress={next}
          />}
      </KeyboardAwareScrollView>
    </Block>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#fff',
  },
  container: {
  },
  inputContainer: {
    padding: 30
  },
  TextInput: {
    marginBottom: 20,
  },
  image: {
    width: width * 0.35,
    height: width * 0.35
  },
  fab: {
    backgroundColor: 'black',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
})