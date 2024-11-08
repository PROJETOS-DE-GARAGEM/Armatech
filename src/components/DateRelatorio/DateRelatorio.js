import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import style from "./DateRelatorioStyle";

const DateRelatorio = ({ onStartDateChange, onEndDateChange, onConfirm }) => {
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Funções para abrir e fechar o DatePicker
  const showStartDatePicker = () => setStartDatePickerVisibility(true);
  const hideStartDatePicker = () => setStartDatePickerVisibility(false);

  const showEndDatePicker = () => setEndDatePickerVisibility(true);
  const hideEndDatePicker = () => setEndDatePickerVisibility(false);

  // Funções para confirmar as datas selecionadas
  const handleConfirmStartDate = (date) => {
    const formattedDate = date.toLocaleDateString("pt-BR");
    setStartDate(formattedDate);
    onStartDateChange(formattedDate);
    hideStartDatePicker();
  };

  const handleConfirmEndDate = (date) => {
    const formattedDate = date.toLocaleDateString("pt-BR");
    setEndDate(formattedDate);
    onEndDateChange(formattedDate);
    hideEndDatePicker();
  };

  // Função para confirmar o intervalo de datas
  const handleConfirmDates = () => {
    if (!startDate || !endDate) {
      alert("Por favor, selecione tanto a data inicial quanto a data final."); // Exibe um alerta amigável
      return;
    }
    onConfirm(startDate, endDate);
  };

  return (
    <View style={style.container}>
      {/* Campo de Data Inicial */}
      <View style={style.containerInput}>
        <TextInput
          style={style.InputText}
          placeholder="Data Inicial"
          placeholderTextColor="#ccc"
          value={startDate || ""}
          editable={false}
        />
        <TouchableOpacity
          onPress={showStartDatePicker}
          style={style.ButtonIconPicker}
        >
          <FontAwesome
            name="calendar"
            size={20}
            color="gray"
            style={style.iconCalendario}
          />
        </TouchableOpacity>
      </View>

      {/* Campo de Data Final */}
      <View style={style.containerInput}>
        <TextInput
          style={style.InputText}
          placeholder="Data Final"
          placeholderTextColor="#ccc"
          value={endDate || ""}
          editable={false}
        />
        <TouchableOpacity
          onPress={showEndDatePicker}
          style={style.ButtonIconPicker}
        >
          <FontAwesome
            name="calendar"
            size={20}
            color="gray"
            style={style.iconCalendario}
          />
        </TouchableOpacity>
      </View>

      {/* Botão Confirmar Sempre Visível */}
      <TouchableOpacity
        onPress={handleConfirmDates}
        style={style.ButtonIconConfirm}
      >
        <FontAwesome name="check-circle" size={30} color="green" />
      </TouchableOpacity>

      {/* Modais de Seleção de Data */}
      <DateTimePickerModal
        isVisible={isStartDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmStartDate}
        onCancel={hideStartDatePicker}
      />
      <DateTimePickerModal
        isVisible={isEndDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmEndDate}
        onCancel={hideEndDatePicker}
        minimumDate={
          startDate
            ? new Date(startDate.split("/").reverse().join("-"))
            : new Date()
        }
      />
    </View>
  );
};

export default DateRelatorio;
