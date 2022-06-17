import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from ".";

describe("Testing ErrorBoundary component", () => {

  it("Should render fallback message on error", () => {
    const text = "Oops! Something went wrong.";
    const Children = () => {
      
      throw new Error("Test error");
    };
    
    const err = console.error;
    const log = console.log;

    console.error = jest.fn();
    console.log = jest.fn();

    render(
      <ErrorBoundary>
        <Children />
      </ErrorBoundary>
    );

    console.log = log;
    console.error = err;

    screen.getByText(text);
  });

  it("Should render children component", () => {
    const text = "Hello jest!";
    const Children = () => <h1>{text}</h1>;

    render(
      <ErrorBoundary>
        <Children />
      </ErrorBoundary>
    );

    screen.findByText(text);
  });
});