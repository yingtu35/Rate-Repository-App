import { Alert } from "react-native";

export const alert = (title, message, confirmLabel, cancelLabel, onPress) => {
  Alert.alert(title, message, [
    { text: confirmLabel, onPress: onPress },
    { text: cancelLabel },
  ]);
};
