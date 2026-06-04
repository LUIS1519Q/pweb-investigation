import { render, screen } from "@testing-library/react";
import Saludo from "./Saludo";

describe("Saludo", () => {
  test("muestra el nombre correctamente", () => {
    render(<Saludo nombre="Ana" />);
    expect(screen.getByText("Hola Ana")).toBeInTheDocument();
  });

  test("muestra otro nombre correctamente", () => {
    render(<Saludo nombre="Luis" />);
    expect(screen.getByText("Hola Luis")).toBeInTheDocument();
  });
});
