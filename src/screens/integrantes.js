import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default function Integrantes({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/dragao.png')}
      style={estilos.bg}
      imageStyle={estilos.dragaoImagem}
    >
      <View style={estilos.overlay} />

      <View style={estilos.container}>
        <Text style={estilos.titulo}>👥 Integrantes do App</Text>

        <Text style={estilos.texto}>
          Aplicativo desenvolvido com base em conhecimentos de HTML, CSS, JavaScript e React Native por:
        </Text>

        <View style={estilos.card}>
          <Image source={require('../assets/thomas.jpg')} style={estilos.foto} />
          <Text style={estilos.nome}>Thomas Adrian</Text>
          <Text style={estilos.cargo}>Desenvolvedor</Text>
        </View>

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
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 26,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: '#A51222',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  texto: {
    fontSize: 16,
    color: '#F5E6CC',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 25,
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'rgba(165, 18, 34, 0.8)',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
    marginBottom: 30,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#FFD700',
    marginBottom: 10,
  },
  nome: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },
  cargo: {
    color: '#F5E6CC',
    fontStyle: 'italic',
    fontSize: 14,
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
