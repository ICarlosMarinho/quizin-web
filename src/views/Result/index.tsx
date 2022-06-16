import { FC, useContext, useEffect, useState } from "react";
import { decode } from "html-entities";
import { useNavigate } from "react-router";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";

import { Container } from "./style";
import { AppContext } from "../../state/AppContext";
import QuizInTableCell from "../../components/QuizInTableCell";
import { correctAnswerRevealed, getCorrectsCounter, saveLastQuizzes } from "../../utils";
import { revealAnswers } from "../../services";
import QuizInTableRow from "../../components/QuizInTableRow";
import QuizInButton from "../../components/QuizInButton";

const Result: FC = () => {
  const {
    currentQuiz,
    questionsNumber,
    setLastQuizzes,
    lastQuizzes,
    setCurrentQuiz,
    setQuestionsNumber,
    setLoading
  } = useContext(AppContext);
  const [renderContent, setRenderContent] = useState(false);
  const navigate = useNavigate();

  const renderTableData = () =>
    currentQuiz?.questions.map(({ id, question, playerAnswer, correctAnswer }) => (
      <QuizInTableRow key={id}>
        <QuizInTableCell align="left">{decode(question)}</QuizInTableCell>
        <QuizInTableCell align="center">{decode(playerAnswer)}</QuizInTableCell>
        <QuizInTableCell align="right">{decode(correctAnswer as string)}</QuizInTableCell>
      </QuizInTableRow>
    ));

  useEffect(() => {
    if (!correctAnswerRevealed(currentQuiz)) {
      setLoading(true);

      revealAnswers(currentQuiz?.questions as Question[]).then((questions) => {
        setCurrentQuiz({ ...currentQuiz, questions } as Quiz);
        setLoading(false);
      });
    }

    return () => {
      setCurrentQuiz(null);
      setQuestionsNumber(10);
    };
  }, []);

  useEffect(() => {
    const exists = lastQuizzes?.find(({ id }) => id == currentQuiz?.id);

    if (correctAnswerRevealed(currentQuiz)) {
      if (!lastQuizzes && !exists) {
        setLastQuizzes([currentQuiz as Quiz] as Quiz[]);
      } else if (lastQuizzes && !exists) {
        setLastQuizzes(lastQuizzes.concat(currentQuiz as Quiz));
      }

      setRenderContent(true);
    }
  }, [currentQuiz]);

  useEffect(() => {
    if (lastQuizzes) saveLastQuizzes(lastQuizzes as Quiz[]);
  }, [lastQuizzes]);

  return (
    <Container display="flex" flexDirection="column" alignItems="center" gap="20px">
      {renderContent ? (
        <>
          <Typography variant="h3">
            {`You’ve got ${getCorrectsCounter(currentQuiz)} answers right of ${questionsNumber}!`}
          </Typography>
          <TableContainer>
            <Table stickyHeader>
              <TableHead>
                <QuizInTableRow>
                  <QuizInTableCell align="left">Question</QuizInTableCell>
                  <QuizInTableCell align="center">Your answer</QuizInTableCell>
                  <QuizInTableCell align="right">Correct answer</QuizInTableCell>
                </QuizInTableRow>
              </TableHead>
              <TableBody>{renderTableData()}</TableBody>
            </Table>
          </TableContainer>
          <QuizInButton width="max-content" onClick={() => navigate("/")}>
            Home page
          </QuizInButton>
        </>
      ) : null}
    </Container>
  );
};

export default Result;
