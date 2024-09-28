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
import { Dropdown } from "react-native-element-dropdown";
import Header from "../../components/Header/Header";
import BottomTabNavigator from "../../routes/BottomTabNavigator";
import style from "./../RegistroDeProdutos/RegistroDeProdutosStyle";

export default function RegistroDeProdutos({navigation}) {

  //Criando os estados
  const [name, setName] = useState ();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();

  const [size, setSize] = useState(null)

    const data = [
         {label: 'PP', value: "1"},
         {label: 'P', value: "2"},
         {label: 'M', value: "2"},
         {label: 'G', value: "2"},
         {label: 'GG', value: "2"},
 ];

  //Funções para setar o valor digitado dentro do estado "set"
  function changeName(name){ setName(name);}
  function changeDescription(description){ setDescription(description);}
  function changePrice(price){ setPrice(price);}
  function changeAmount(amount){ setAmount(amount);}
  function changeSize(size){setSize(size);}
  
  function register() { //Se os campos não forem preenchidos, informar ao usuário.
    if( name === '' || description === ''
      || price === undefined|| amount === undefined
      || size === ''){
          Alert.alert("Preencha todos os campos!")
          return;
        }
  //Função ao clicar no botão os valores que estão nos estados "set" serão atrbuídos aos valores iniciais.
    setName('');
    setDescription('');
    setPrice( );
    setAmount( );
    setSize('');
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

    <View style={style.boxDescription}>
    <Text style={style.text}>Tamanho</Text>
      <Dropdown
        style={style.dropdown}
        placeholderStyle={style.placeholderStyle}
        selectedTextStyle={style.selectedTextStyle}
        inputSearchStyle={style.inputSearchStyle}
        iconStyle={style.iconStyle}
        data={data} // Definindo a variável de dados
        maxHeight={300}
        labelField="label"
        valueField="size"
        placeholder="Selecione o Tamanho..."
        value={size}
        onChange={(item) => {
        setSize(item.size);
        }}
        containerStyle={style.dropDownContainerStyle}
      />
    </View>

    <View style={style.boxDescription}>
       <Text style={style.text}>Preço</Text>
          <TextInput keyboardType="numeric" 
          style={style.Input} placeholder="R$"
          onChangeText={changePrice}
          value={price}>
          </TextInput>
    </View>

    <View style={style.boxDescription}>
      <Text style={style.text}>Quantidade</Text>
      <TextInput keyboardType="numeric" 
        style={style.Input} placeholder="Unidades"
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
    </TouchableWithoutFeedback>
  );
}

