import { StyleSheet } from "react-native";
import { Picker as NativePicker } from "@react-native-picker/picker";
import theme from "../../theme";
// import { useRef } from "react";

const styles = StyleSheet.create({
  picker: { backgroundColor: theme.colors.white, marginBottom: 5 },
});

const Picker = ({ orderMethod, setOrderMethod, options = [], style }) => {
  // only for Android
  // const pickerRef = useRef();

  // const openMenu = () => pickerRef.current.focus();
  // const closeMenu = () => pickerRef.current.blur();
  // only for Android
  const pickerStyle = { ...styles.picker, ...style };

  return (
    <NativePicker
      style={pickerStyle}
      // ref={pickerRef}
      selectedValue={orderMethod}
      onValueChange={(itemValue) => setOrderMethod(itemValue)}
    >
      {options.map(({ value, label }) => (
        <NativePicker key={value} label={label} value={value} />
      ))}
    </NativePicker>
  );
};

export default Picker;
