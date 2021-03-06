import { FC, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { decode } from "html-entities";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Container, Answer } from "./style";
import { AppContext } from "../../state/AppContext";

const Question: FC = () => {
  const { currentQuiz, setCurrentQuiz, questionsNumber } = useContext(AppContext);
  const { current } = useParams();
  const navigate = useNavigate();
  const currentQuestion = currentQuiz?.questions.find((_, index) => index == Number(current) - 1);

  const handleUserAnswer = (playerAnswer: string) => {
    setCurrentQuiz({
      ...currentQuiz,
      questions: currentQuiz?.questions.map((question) => {
        if (question.id == currentQuestion?.id) return { ...question, playerAnswer };
        else return { ...question };
      }) as Question[]
    } as Quiz);

    if (Number(current) == questionsNumber) navigate("/result");
    else navigate(`/question/${Number(current) + 1}`);
  };

  const renderAnswers = () => (
    <Box display="flex" flexDirection="column">
      {currentQuestion?.answers.map((answer, index) => (
        <Answer key={index} onClick={() => handleUserAnswer(answer)}>
          <Typography variant="h4" color="inherit">
            {decode(answer)}
          </Typography>
        </Answer>
      ))}
    </Box>
  );

  return (
    <Container>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="body2"
          textAlign="left">{`Question ${current} of ${questionsNumber}`}</Typography>
        <Typography variant="body2" textAlign="right">
          {currentQuestion?.category}
        </Typography>
      </Box>
      <Typography variant="h3">{decode(currentQuestion?.question)}</Typography>
      {renderAnswers()}
    </Container>
  );
};

export default Question;
