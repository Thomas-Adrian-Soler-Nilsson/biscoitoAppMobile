import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/dragao.png')}
      style={estilos.bg}
      imageStyle={estilos.dragaoImagem}
    >
      <View style={estilos.overlay} />

      <View style={estilos.container}>
        <Text style={estilos.titulo}>📜 Sobre o App</Text>

        <Text style={estilos.texto}>
          Este aplicativo de <Text style={{ color: '#FFD700', fontWeight: 'bold' }}>Sorteio do Exodia</Text> 
          {' '}foi desenvolvido em <Text style={{ color: '#FFD700', fontWeight: 'bold' }}>React Native</Text> 
          {' '}utilizando conceitos de componentes, estados e navegação entre telas.{"\n\n"}
          Ele permite sortear aleatoriamente as partes do lendário 
          {' '}<Text style={{ color: '#FFD700', fontWeight: 'bold' }}>Exodia, o Proibido</Text>, trazendo uma experiência divertida inspirada no universo de Yu-Gi-Oh! 🔥🃏
        </Text>

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => navigation.goBack()}
        >
          <Text style={estilos.btnTexto}>⬅ Voltar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const estilos = StyleSheet.create({
  bg: {
    flex: 1,
  },
  dragaoImagem: {
    resizeMode: 'contain',
    position: 'absolute',
    width: 400,
    height: 400,
    top: '25%',
    left: '50%',
    transform: [{ translateX: -200 }],
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  titulo: {
    fontSize: 26,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 25,
    textShadowColor: '#A51222',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  texto: {
    fontSize: 16,
    color: '#F5E6CC',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#A51222',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
  },
  btnTexto: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});
