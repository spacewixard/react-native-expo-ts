import { MonoText } from "../StyledText";
import { render, screen } from "@testing-library/react-native";

it("renders correctly", () => {
  render(<MonoText>Snapshot test!</MonoText>);
  expect(screen.getByText("Snapshot test!")).toBeTruthy();

  // const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();
  // expect(tree).toMatchSnapshot();
});
