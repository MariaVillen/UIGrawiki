import { render } from "@testing-library/react";
import { Button } from "@ui/forms";

describe("Button Component", () => {
  it("renders with default props", () => {
    const { queryByText } = render(<Button>Default Button</Button>);
    expect(queryByText("Default Button")).not.toBeNull();
  });

  it("renders with primary variant", () => {
    const { queryByText } = render(
      <Button variant="primary">Primary Button</Button>,
    );
    expect(queryByText("Primary Button")).not.toBeNull();
  });

  it("renders with secondary variant", () => {
    const { queryByText } = render(
      <Button variant="secondary">Secondary Button</Button>,
    );
    expect(queryByText("Secondary Button")).not.toBeNull();
  });

  it("renders with ghost variant", () => {
    const { queryByText } = render(
      <Button variant="ghost">ghost Button</Button>,
    );
    expect(queryByText("ghost Button")).not.toBeNull();
  });

  it("renders with big size", () => {
    const { queryByText } = render(<Button size="big">Big Button</Button>);
    expect(queryByText("Big Button")).not.toBeNull();
  });

  it("renders with medium size", () => {
    const { queryByText } = render(
      <Button size="medium">Medium Button</Button>,
    );
    expect(queryByText("Medium Button")).not.toBeNull();
  });

  it("renders with small size", () => {
    const { queryByText } = render(<Button size="small">Small Button</Button>);
    expect(queryByText("Small Button")).not.toBeNull();
  });
});
