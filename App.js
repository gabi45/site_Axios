import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import viaceplogo from './assets/Viaceplogo.jpg'
import { useEffect } from 'react';

export default function App() {
  
  const [ cepInformado, setCepInformado] = useState("");
  const [ Logradouro, setCepInformado] = useState("");
  const [ Bairro, setCepInformado] = useState("");
  const [ Cidade, setCepInformado] = useState("");
  const [ UF, setCepInformado] = useState("");

  async function handleCEPSelected(){
    try{
      const response: await api.get(`${cepInformado}/json`);
      setLogradouro(response.data.logardouro)
      setBairro(response.data.bairro)
      setCidade(response.data.localidade)
      SetUf(response.data.uf)
    } catch (error) {
      console.log(error);
    
    }
  }

  useEffect(()) => {
    handleCEPSelected();
    [cepInformado])
  },

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={{ position: 'absolute', top: 40, flex: 1 }}
        source={viaceplogo}
      />
      <View
        style={styles.containerInfos}
      >
        <ScrollView showsVerticalScrollIndicator= {false}>
          <Text
            style={styles.textStyle}
          >
            Nome:
          </Text>
          <TextInput
            placeholder='Informe o seu nome:'
            style={styles.inputStyle}
          />
          <Text
            style={styles.textStyle}
          >
            CEP:
          </Text>
          <TextInput
            placeholder='Informe o seu CEP:'
            style={styles.inputStyle}
            keyboardType='numeric'
          />
          <Text
            style={styles.textStyle}
          >
            Endereço:
          </Text>
          <TextInput
            placeholder='Informe o seu endereço:'
            style={styles.inputStyle}
          />
          <Text
            style={styles.textStyle}
          >
            Número:
          </Text>
          <TextInput
            placeholder='Informe o seu número:'
            style={styles.inputStyle}
            keyboardType='numeric'
          />
          <Text
            style={styles.textStyle}
          >
            Bairro:
          </Text>
          <TextInput
            placeholder='Informe o seu bairro:'
            style={styles.inputStyle}
            value={bairro}
          />
          <Text
            style={styles.textStyle}
          >
            Cidade:
          </Text>
          <TextInput
            placeholder='Informe a sua cidade:'
            style={styles.inputStyle}
            value={Cidade}
          />
          <Text
            style={styles.textStyle}
          >
            UF:
          </Text>
          <TextInput
            placeholder='Informe a sua UF:'
            style={styles.inputStyle}
            value={UF}
            keyboardType='numeric'
            onchangeText={(txt) => setCepInformado (txt)}

          />

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInfos: {
    flex: 1,
    width: '90%',
    height: '60%',
    marginTop: 250,

  },
  inputStyle: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    borderColor: '#6c9c5e',
    marginTop: 10,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 16,
    color: '#417b35'
  }
});

