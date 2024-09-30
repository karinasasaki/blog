import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import NovoPost from "../pages/novo-post";

test("Form renders successfully", () => {
	render(<NovoPost/>);
	expect(screen.getByRole("heading", {name: "Novo Post"})).toBeInTheDocument();
	expect(screen.getByRole("textbox", {name: "Título"})).toBeInTheDocument();
	expect(screen.getByRole("textbox", {name: "Autor(a)"})).toBeInTheDocument();
	expect(screen.getByRole("textbox", {name: "Resumo"})).toBeInTheDocument();
	expect(screen.getByRole("textbox", {name: "Conteúdo"})).toBeInTheDocument();
	expect(screen.getByRole("button", {name: "Postar"})).toHaveAttribute("type", "submit");
	expect(screen.getByRole("button", {name: "Postar"})).toBeInTheDocument();
	expect(screen.getByRole("button", {name: "Voltar"})).toBeInTheDocument();
})