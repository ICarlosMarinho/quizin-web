import { useNavigate } from "react-router";
import { FC, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewRounded from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";

import { Container } from "./style";
import { AppContext } from "../../state/AppContext";
import QuizInButton from "../QuizInButton";

const QuestionsNumberCard: FC = () => {
  const { setQuestionsNumber, questionsNumber } = useContext(AppContext);
  const navigate = useNavigate();

  const handleNumberChange = (action: "increment" | "decrement" | "reset") => {
    if (action == "decrement") setQuestionsNumber(questionsNumber - 1);
    else if (action == "increment") setQuestionsNumber(questionsNumber + 1);
    else if (action == "reset") setQuestionsNumber(10);
  };

  const handleNextButton = () => navigate("/ready");

  return (
    <Container display="flex" flexDirection="column" gap="30px">
      <Box display="flex" justifyContent="space-between">
        <IconButton
          aria-label="Decrement questions number"
          onClick={() => handleNumberChange("decrement")}
          disabled={questionsNumber <= 1}>
          <ArrowBackIosNewRounded />
        </IconButton>
        <Typography variant="h2" color="text.primary">
          {Intl.NumberFormat("en", { minimumIntegerDigits: 2 }).format(questionsNumber)}
        </Typography>
        <IconButton
          aria-label="Increment questions number"
          onClick={() => handleNumberChange("increment")}
          disabled={questionsNumber >= 99}>
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
