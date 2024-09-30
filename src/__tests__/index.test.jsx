import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import Index from "../pages/index";

const mockData = [
	{
		"titulo": "Título",
		"autor": "Autor",
		"conteudo": "Conteúdo",
		"data": "28/09/2024",
		"id": 1
	}
]

test("Home renders Post 1 successfully", () => {
	render(<Index posts={mockData}/>);
	expect(screen.getByRole("heading", {name: "Título"})).toBeInTheDocument();
	expect(screen.getByRole("link", {name: "Título"})).toHaveAttribute("href", "/post/1");
	expect(screen.getByRole("link", {name: "Título"})).toBeInTheDocument();
	expect(screen.getByText("Postado dia 28/09/2024")).toBeInTheDocument();
	expect(screen.getByText("Autor(a): Autor")).toBeInTheDocument();
	expect(screen.getByText("Conteúdo")).toBeInTheDocument();
	expect(screen.getByRole("link", {name: "Leia mais →"})).toHaveAttribute("href", "/post/1");
	expect(screen.getByRole("link", {name: "Leia mais →"})).toBeInTheDocument();
})