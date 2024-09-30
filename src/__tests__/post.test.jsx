import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import Post from "../pages/post/[id]";

const mockData = {
  "titulo": "Título",
  "autor": "Autor",
  "conteudo": "Conteúdo",
  "data": "28/09/2024",
  "id": 1
};

test("Post 1 details renders successfully", () => {
	render(<Post post={mockData}/>);
	expect(screen.getByRole("heading", {name: "Título"})).toBeInTheDocument();
	expect(screen.getByText("Postado dia 28/09/2024"));
	expect(screen.getByText("Autor(a): Autor"));
	expect(screen.getByText("Conteúdo"));
	expect(screen.getByRole("button", {name: "Voltar"})).toBeInTheDocument();
})