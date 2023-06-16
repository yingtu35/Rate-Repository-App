import { TextInput as NativeTextInput } from "react-native"

const TextInput = ({ style, ...props }) => {
  const textStyle = [style]
  return <NativeTextInput style={textStyle} {...props} />
}

export default TextInput
