import React, { useState } from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import style from "../DateTimePicker/DatePickerStyle";
import { format } from "date-fns";

const DatePicker = ({ onDateChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date); // Enviar a data formatada para o componente pai
    onDateChange(date);
    hideDatePicker();
  };

  return (
    <View>
      <View style={style.containerInput}>
        <TextInput
          style={style.InputText}
          placeholder="DD/MM/AA"
          placeholderTextColor={"#ccc"}
          value={selectedDate ? format(selectedDate, "dd/MM/yyyy") : ""}
          editable={false}
        />
        <TouchableOpacity
          style={style.ButtonIconPicker}
          //onPress={showDatePicker}
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