import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PortfolioSite from "../components/PortfolioSite";

test("renders navigation links", () => {
  render(<PortfolioSite />);
  expect(screen.getByText("Projects")).toBeInTheDocument();
  expect(screen.getByText("Blog")).toBeInTheDocument();
  expect(screen.getByText("Resume")).toBeInTheDocument();
  expect(screen.getByText("Contact")).toBeInTheDocument();
});

test("renders section anchors", () => {
  render(<PortfolioSite />);
  expect(document.querySelector("#projects")).toBeTruthy();
  expect(document.querySelector("#blog")).toBeTruthy();
  expect(document.querySelector("#resume")).toBeTruthy();
  expect(document.querySelector("#contact")).toBeTruthy();
});

test("dark mode toggles", () => {
  render(<PortfolioSite />);
  const toggle = screen.getByText(/dark/i);
  fireEvent.click(toggle);
  expect(document.body.textContent).toContain("Light");
});
