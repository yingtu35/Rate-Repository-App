import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  show: {
    display: "",
  },
  hide: {
    display: "none",
  },
  button: {
    height: 50,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  openButtonColor: {
    backgroundColor: "#0cb025",
  },
  closeButtonColor: {
    backgroundColor: theme.colors.error,
  },
});

const Togglable = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((visible) => !visible);
  };

  return (
    <View>
      <Pressable
        style={
          visible
            ? styles.hide
            : [styles.show, styles.button, styles.openButtonColor]
        }
        onPress={toggleVisibility}
      >
        <Text color="white" fontWeight="bold">
          {props.buttonLabel}
        </Text>
      </Pressable>
      <View style={visible ? styles.show : styles.hide}>
        {props.children}
        <Pressable
          onPress={toggleVisibility}
          style={[styles.button, styles.closeButtonColor]}
        >
          <Text color="white" fontWeight="bold">
            Cancel
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Togglable;
