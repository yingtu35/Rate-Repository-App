import { useState } from "react";
import { Text, TextInput, Pressable, View } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit({ username, password });
  };

  return (
    <View>
      <View>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
        />
      </View>
      <View>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
        />
      </View>
      <View>
        <Pressable onPress={handleSubmit}>
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

describe("Form", () => {
  it("calls function provided by onSubmit prop when pressing the submit button", () => {
    const onSubmit = jest.fn();
    render(<Form onSubmit={onSubmit} />);

    // screen.debug();

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByText("Submit");
    fireEvent.changeText(usernameInput, "daniel");
    fireEvent.changeText(passwordInput, "password");
    fireEvent.press(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0].username).toBe("daniel");
    expect(onSubmit.mock.calls[0][0].password).toBe("password");
  });
});
