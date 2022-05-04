import { render, screen, cleanup } from "@testing-library/react";
import MyApp from "../pages/_app";

describe("App Component", () => {
  it("should render layout and child components", () => {
    render(<MyApp />);

    const main = screen.getByRole("div");
    expect(main).toBeInTheDocument();
  });
});
