import { Pressable, ActivityIndicator } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { useEffect, useState } from "react";

const SubmitButton = ({ onSubmit, buttonLabel, style }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onPress = () => {
    setIsSubmitting(true);
  };

  useEffect(() => {
    const executeSubmit = async () => {
      await onSubmit();
      setIsSubmitting(false);
    };
    if (isSubmitting) {
      executeSubmit();
    }
  }, [isSubmitting]);

  return (
    <Pressable onPress={onPress} disabled={isSubmitting} style={style}>
      {isSubmitting ? (
        <ActivityIndicator size="small" color={theme.colors.white} />
      ) : (
        <Text color="white" fontWeight="bold">
          {buttonLabel}
        </Text>
      )}
    </Pressable>
  );
};

export default SubmitButton;
