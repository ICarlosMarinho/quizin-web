import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Testing Footer component", () => {

  it("Should render caption", () => {
    const captionText = "Carlos Marinho";

    render(<Footer />);

    screen.getByText(captionText);
  })

  it("Should render all links", () => {
    const githubAltText = "Visit my Github profile";
    const linkedinAltText = "Visit my Linkedin profile";
    const twitterAltText = "Visit my Twitter profile";

    render(<Footer />);

    screen.getByAltText(githubAltText);
    screen.getByAltText(linkedinAltText);
    screen.getByAltText(twitterAltText);
  });
});