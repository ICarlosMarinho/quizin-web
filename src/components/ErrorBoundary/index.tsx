import { Component, ErrorInfo, ReactNode } from "react";
import Typography from "@mui/material/Typography";

import { Container } from "./style";
import { WithChildren } from "../../types";

interface State {
  error: boolean;
}

class ErrorBoundary extends Component<WithChildren> {
  public state: State = {
    error: false
  };

  constructor(props: any) {
    super(props);
  }

  public static getDerivedStateFromError(): State {
    return { error: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log(error, info);
  }

  public render(): ReactNode {
    return this.state.error ? (
      <Container display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="30px">
        <Typography variant="h2" color="primary">
          Oops! Something went wrong.
        </Typography>
        <Typography variant="h4">Please contact the developers or try again.</Typography>
      </Container>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
