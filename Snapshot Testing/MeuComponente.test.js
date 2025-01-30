import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import MeuComponente from "./MeuComponente";

describe("MeuComponente", () => {
  it("deve exibir o texto corretamente", () => {
    const { getByText } = render(<MeuComponente texto="Olá, mundo!" />);
    const textoElemento = getByText("Olá, mundo!");
    expect(textoElemento).toBeInTheDocument();
  });

  it("deve lidar com diferentes textos", () => {
    const { getByText } = render(<MeuComponente texto="Texto de teste" />);
    const textoElemento = getByText("Texto de teste");
    expect(textoElemento).toBeInTheDocument();
  });

  it("não deve exibir nada se o texto for vazio", () => {
    const { getByRole } = render(<MeuComponente texto="" />);
    const divElemento = getByRole("div");
    expect(divElemento).toBeEmptyDOMElement(); // Verifica se o div está vazio
  });

  it("deve lidar com números como texto", () => {
    const { getByText } = render(<MeuComponente texto={123} />); // Passa um número como texto
    const textoElemento = getByText("123"); // O texto deve ser o número convertido para string
    expect(textoElemento).toBeInTheDocument();
  });

  it("deve lidar com texto contendo caracteres especiais", () => {
    const { getByText } = render(
      <MeuComponente texto="Texto com !@#$%^&*()" />
    );
    const textoElemento = getByText("Texto com !@#$%^&*()");
    expect(textoElemento).toBeInTheDocument();
  });
});
