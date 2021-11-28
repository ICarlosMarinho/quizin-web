import { Typography, IconButton, Box } from "@material-ui/core";
import { ArrowBackIosNewRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import { FC, useState } from "react";
import { useNavigate } from "react-router";
import QuizInButton from "../QuizInButton";

import { Container } from "./style";

const QuestionsNumberCard: FC = () => {
  const [questions, setQuestions] = useState(10);
  const navigate = useNavigate();

  const handleNumberChange = (action: "increment" | "decrement" | "reset") => {
    if (action == "decrement") setQuestions(questions - 1);
    else if (action == "increment") setQuestions(questions + 1);
    else if (action == "reset") setQuestions(10);
  };

  const handleNextButton = () => navigate("/ready");

  return (
    <Container display="flex" flexDirection="column" gap="30px">
      <Box display="flex" justifyContent="space-between">
        <IconButton
          aria-label="Decrement questions number"
          onClick={() => handleNumberChange("decrement")}
          disabled={questions <= 1}>
          <ArrowBackIosNewRounded />
        </IconButton>
        <Typography variant="h2" color="text.primary">
          {Intl.NumberFormat("en", { minimumIntegerDigits: 2 }).format(questions)}
        </Typography>
        <IconButton
          aria-label="Increment questions number"
          onClick={() => handleNumberChange("increment")}
          disabled={questions >= 99}>
          <ArrowForwardIosRounded />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="center">
        <QuizInButton position="left" color="secondary" onClick={() => handleNumberChange("reset")}>
          Reset
        </QuizInButton>
        <QuizInButton position="right" color="primary" onClick={handleNextButton}>
          Next
        </QuizInButton>
      </Box>
    </Container>
  );
};

export default QuestionsNumberCard;
