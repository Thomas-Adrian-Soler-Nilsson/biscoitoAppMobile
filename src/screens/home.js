import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function Home({ navigation }) {
  const [img, setImg] = useState(require('../assets/cabeca.png'));
  const [textoFrase, setTextoFrase] = useState('Toque para sortear uma parte do Exodia!');

  // Lista com as imagens das 5 partes
  const partesExodia = [
    require('../assets/bracoDireito.png'),
    require('../assets/bracoEsquerdo.png'),
    require('../assets/cabeca.png'),
    require('../assets/pernaDireita.png'),
    require('../assets/pernaEsquerda.png'),
  ];

const frases = [
    "Numero 1 sorteado",
    "Numero 2 sorteado",
    "Numero 3 sorteado",
    "Numero 4 sorteado",
    "Numero 5 sorteado",
  ];

  function sortearParte() {
    const indice = Math.floor(Math.random() * partesExodia.length);
    setImg(partesExodia[indice]);
    const frase = Math.floor(Math.random() * frases.length);  
    setTextoFrase(frases[frase]);
  }

  function reiniciar() {
    setTextoFrase('Toque para sortear um numero e ver a parte do Exodia!');
    setImg(require('../assets/cabeca.png'));
  }

  return (
    <ImageBackground
      source={require('../assets/dragao.png')}
      style={estilos.bg}
      imageStyle={estilos.dragaoImagem} 
    >
      <View style={estilos.overlay} />
      <View style={estilos.container}>
        

        <Image source={img} style={estilos.img} />
        <Text style={estilos.textoFrase}>{textoFrase}</Text>

        <TouchableOpacity style={estilos.botao1} onPress={sortearParte}>
          <Text style={estilos.btnTexto}>🃏 Sortear Exodia</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={estilos.botao2} onPress={reiniciar}>
          <Text style={estilos.btnTexto}>🔁 Reiniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[estilos.botao1, { backgroundColor: '#6E0D25' }]}
          onPress={() => navigation.navigate('Sobre')}
        >
          <Text style={estilos.btnTexto}>📜 Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[estilos.botao1, { backgroundColor: '#5A0E17' }]}
          onPress={() => navigation.navigate('Integrantes')}
        >
          <Text style={estilos.btnTexto}>👥 Integrantes</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  img: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  textoFrase: {
    fontSize: 20,
    color: '#F5E6CC',
    marginVertical: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 28,
    textShadowColor: '#9B111E',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  botao1: {
    width: 220,
    height: 50,
    backgroundColor: '#A51222',
    borderRadius: 30,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: '#FFD700',
    elevation: 5,
  },
  botao2: {
    width: 220,
    height: 50,
    backgroundColor: '#3B1C0A',
    borderRadius: 30,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#C48F65',
  },
  btnTexto: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});
