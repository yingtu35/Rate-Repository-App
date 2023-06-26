import { Text, View } from "react-native";
import { render, screen } from "@testing-library/react-native";

const Greeting = ({ name }) => {
  return (
    <View>
      <Text>Hello {name}!</Text>
    </View>
  );
};

describe("Greeting", () => {
  it("renders a greeting message with a given name prop", () => {
    render(<Greeting name="Daniel" />);

    screen.debug();

    const displayText = screen.getByText("Hello Daniel!");
    expect(displayText).toBeDefined();
  });
});

describe("Example", () => {
  it("works", () => {
    expect(1).toBe(1);
  });
});
