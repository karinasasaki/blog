import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";

test("Navbar renders successfully", () => {
	render(<Navbar/>);
  expect(screen.getAllByRole("link")[0]).toHaveAttribute("href", "/");
  expect(screen.getAllByRole("link")[0]).toBeInTheDocument();
  expect(screen.getByAltText("Logo")).toHaveAttribute("src", "/Logo.svg");
  expect(screen.getByAltText("Logo")).toBeInTheDocument();
  expect(screen.getAllByRole("link")[1]).toHaveAttribute("href", "/novo-post");
  expect(screen.getAllByRole("link")[1]).toBeInTheDocument();
})

test("Main renders successfully", () => {
	render(<Main/>);
})

test("Footer renders successfully", () => {
	render(<Footer/>);
	expect(screen.getByRole("separator")).toBeInTheDocument();
})