import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import SignInContainer from "../../src/components/SignIn/SignInContainer";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const values = {
        username: "daniel",
        password: "password",
      };

      render(<SignInContainer onSubmit={onSubmit} />);

      // screen.debug();

      const usernameInput = screen.getByPlaceholderText("Username");
      const passwordInput = screen.getByPlaceholderText("Password");
      const submitButton = screen.getByText("Sign in");
      fireEvent.changeText(usernameInput, values.username);
      fireEvent.changeText(passwordInput, values.password);
      fireEvent.press(submitButton);
      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual(values);
      });
    });
  });
});
