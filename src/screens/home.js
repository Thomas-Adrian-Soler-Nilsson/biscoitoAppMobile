import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function Home({ navigation }) {
  const [img, setImg] = useState(require('../assets/biscoitoFechado.png'));
  const [textoFrase, setTextoFrase] = useState('Abra o biscoito para descobrir a frase!');

  let frases = [
    "千里之行，始于足下。 (Uma jornada de mil milhas começa com um único passo.) — Laozi",
    "学而不思则罔，思而不学则殆。 (Estudar sem pensar é inútil; pensar sem estudar é perigoso.) — Confúcio",
    "知足者常乐。 (Quem sabe contentar-se é sempre feliz.)",
    "水滴石穿，绳锯木断。 (A gota d’água perfura a pedra; a corda serra a madeira.) — Perseverança vence a força.",
    "失败是成功之母。 (O fracasso é a mãe do sucesso.)",
    "塞翁失马，焉知非福。 (Quando o velho perdeu seu cavalo, como saber se isso não seria uma bênção?) — Toda perda pode trazer um bem oculto.",
    "君子和而不同。 (O sábio busca harmonia, não uniformidade.) — Confúcio",
    "静以修身，俭以养德。 (A calma cultiva o corpo, a simplicidade alimenta a virtude.)",
    "天行健，君子以自强不息。 (O céu se move com força; o homem nobre esforça-se sem cessar.) — I Ching",
    "知者不言，言者不知。 (Aquele que sabe não fala; quem fala, não sabe.) — Laozi",
    "积土成山，积水成渊。 (Amontoar terra forma uma montanha; acumular água cria um abismo.) — Pequenos esforços criam grandes resultados.",
    "慎终如始，则无败事。 (Se fores cuidadoso até o fim como foste no início, nada fracassará.)",
    "有志者，事竟成。 (Onde há vontade, há um caminho.)",
    "知人者智，自知者明。 (Conhecer os outros é inteligência; conhecer a si mesmo é sabedoria.) — Laozi",
    "不怕慢，就怕停。 (Não tema ir devagar, tema apenas parar.)",
    "心静自然凉。 (Com o coração tranquilo, até o calor se torna brando.)",
    "道生一，一生二，二生三，三生万物。 (O Tao gera o Um, o Um gera o Dois, o Dois gera o Três, e o Três gera todas as coisas.) — Laozi",
    "玉不琢，不成器。 (O jade não lapidado não se torna joia.) — O talento precisa ser cultivado.",
    "善有善报，恶有恶报。 (O bem traz boas recompensas; o mal traz más recompensas.)",
    "风雨之后见彩虹。 (Depois da tempestade, vê-se o arco-íris.)"
  ];

  function quebrarBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase(frases[numeroAleatorio]);
    setImg(require('../assets/biscoitoAberto.png'));
  }

  function reiniciarBiscoito() {
    if (textoFrase === 'Abra o biscoito para descobrir a frase!') {
      alert('O biscoito já está fechado!');
      return;
    } else {
      setTextoFrase('Abra o biscoito para descobrir a frase!');
      setImg(require('../assets/biscoitoFechado.png'));
    }
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

        <TouchableOpacity style={estilos.botao1} onPress={quebrarBiscoito}>
          <Text style={estilos.btnTexto}>🀄 Abrir Biscoito</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={estilos.botao2} onPress={reiniciarBiscoito}>
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
    width: 260,
    height: 260,
    marginBottom: 20,
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
