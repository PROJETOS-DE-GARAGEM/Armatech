import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  Alert, 
  Keyboard,
} from "react-native";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Select from "../../components/Select/Select";
import style from "./../RegistroDeProdutos/RegistroDeProdutosStyle";

export default function RegistroDeProdutos({navigation}) {

  //Criando os estados
  const [name, setName] = useState ();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();
  const [size, setSize] = useState();

  //Funções para setar o valor digitado dentro do estado "set"
  function changeName(name){ setName(name);}
  function changeDescription(description){ setDescription(description);}
  function changePrice(price){ setPrice(price);}
  function changeAmount(amount){ setAmount(amount);}
  function changeSize(size){ setSize(size);}
  
  function register() { //Se os campos não forem preenchidos, informar ao usuário.
    if( name === undefined || description === undefined
      || price === undefined|| amount === undefined
      || size === undefined){
          Alert.alert("Preencha todos os campos!")
          return;
        }
  //Função ao clicar no botão os valores que estão nos estados "set" serão atrbuídos aos valores iniciais.
    setName();
    setDescription();
    setPrice();
    setAmount();
    setSize();
  }

  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={style.container}>
      <Header titulo="Registro de Produtos" navigation={navigation}  />

      <Text style={style.Title}>Adicionar novo Produto</Text>

      <View style={style.boxContainer}>

      <View style={style.boxDescription}>
      <Text style={style.text}>Nome do Produto</Text>
      <TextInput style={style.Input} 
      placeholder="Nome do Produto"
      onChangeText={(Input) => changeName()} 
      value={name}>
      </TextInput>
      </View>
      
      <View style={style.boxDescription}>
      <Text style={style.text}>Descrição</Text>
      <TextInput style={style.Input} 
      placeholder="Descrição"
      onChangeText={(Input) => changeDescription()} 
      value={description}>
      </TextInput>
      
      </View>

      <Select onChangeSelect={(id) => changeSize()}
        text="Selecione o tamanho"
        value={size}
        />
      
      <View style={style.boxRow}>

      <View style={style.boxTitle}> 
      <Text style={style.text}>Preço</Text>
      <Text style={style.text}>Quantidade</Text>
      </View>

      <View style={style.boxInput}>
      <TextInput keyboardType="numeric" 
      style={style.Input2} placeholder="R$"
      onChangeText={changePrice}
      value={price}>
      </TextInput>

      <TextInput keyboardType="numeric" 
      style={style.Input2} placeholder="Un"
      onChangeText={changeAmount}
      value={amount}>
      </TextInput>
      </View>

      </View>

      <View style={style.btnBox}>

      <TouchableOpacity onPress={ () => register()} style={[style.btn, {backgroundColor: '#32bc9b'}]}>
      <View style={style.btnArea}>
        <Text style={style.btnText}>Salvar</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={[style.btn, {backgroundColor: '#ff784b'}]}>
      <View style={style.btnArea}>
      <Text style={style.btnText}>Cancelar</Text>
      </View>
      </TouchableOpacity>
      </View>
      </View>
      
      <Footer />
    </View>
    </TouchableWithoutFeedback>
  );
}

