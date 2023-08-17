import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import NewComponent from "../components/NewComponent";

describe("Testing a test", () => {
  it("should render a heading", () => {
    render(<NewComponent />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent(/Hello World/i);
  });
});
