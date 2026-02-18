import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { certificates } from "./data/certificates";

describe("App", () => {
  it("shows all certificates by default", () => {
    render(<App />);
    expect(screen.getAllByRole("link", { name: "View credential" })).toHaveLength(
      certificates.length
    );
  });

  it("filters cards by platform", () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText("Platform"), {
      target: { value: "coursera" }
    });

    expect(screen.getAllByRole("link", { name: "View credential" })).toHaveLength(3);
    expect(screen.getByText("3 results")).toBeInTheDocument();
  });

  it("resets filters back to full list", () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText("Search"), {
      target: { value: "advanced" }
    });
    expect(screen.getByText("1 result")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Reset Filters/i }));
    expect(screen.getAllByRole("link", { name: "View credential" })).toHaveLength(
      certificates.length
    );
  });
});
