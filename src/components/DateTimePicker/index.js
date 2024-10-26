import React, { useState } from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import style from "../DateTimePicker/DatePickerStyle";

const DatePicker = ({onDateChange}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = date.toLocaleDateString("pt-BR"); // Formata a data para "DD/MM/AAAA"
    setSelectedDate(formattedDate);
    onDateChange(formattedDate); // Passa a data formatada para o componente pai
    hideDatePicker();
  };

  return (
    <View>
      <Text style={style.TextTittle}>Data da Venda:</Text>
      <View style={style.containerInput}>
        <TextInput
          style={style.InputText}
          placeholder="DD/MM/AA"
          placeholderTextColor={'#gray'}
          value={selectedDate || ""}
          editable={false}
        />
        <TouchableOpacity
          style={style.ButtonIconPicker}
          onPress={showDatePicker}
        >
          <FontAwesome
            style={style.iconCalendario}
            name="calendar"
            size={20}
            color="gray" />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DatePicker;