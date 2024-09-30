import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import NotFound from "../pages/404";

test("Not Found page renders successfully", () => {
	render(<NotFound/>);
	expect(screen.getByRole("heading", {name: "404"})).toBeInTheDocument();
	expect(screen.getByText("Página não encontrada!"));
	expect(screen.getByRole("link")).toHaveAttribute("href", "/");
	expect(screen.getByRole("link")).toBeInTheDocument();
})