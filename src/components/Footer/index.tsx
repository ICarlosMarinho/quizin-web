import { FC } from "react";
import { Typography } from "@mui/material";

import { Container } from "./style";
import GithubIcon from "../../../public/icons8-github.svg";
import LinkedinIcon from "../../../public/icons8-linkedin.svg";
import TwitterIcon from "../../../public/icons8-twitter.svg";

const Footer: FC = () => (
  <Container>
    <Typography variant="caption">Carlos Marinho</Typography>
    <a href="https://github.com/ICarlosMarinho" target="_blank" rel="noreferrer noopener">
      <img src={GithubIcon} width="27px" height="27px" alt="Visit my Github profile" />
    </a>
    <a href="https://www.linkedin.com/in/carloshmarinho" target="_blank" rel="noreferrer noopener">
      <img src={LinkedinIcon} width="25px" height="25px" alt="Visit my Linkedin profile" />
    </a>
    <a href="https://twitter.com/CarlosMarinh0o" target="_blank" rel="noreferrer noopener">
      <img src={TwitterIcon} width="25px" height="25px" alt="Visit my Twitter profile" />
    </a>
  </Container>
);

export default Footer;
