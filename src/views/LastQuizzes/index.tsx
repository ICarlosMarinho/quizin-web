import { FC, useContext } from "react";
import { Table, TableContainer, TableHead, TableBody, TableRow } from "@mui/material";
import { useNavigate } from "react-router";

import { Container } from "./style";
import QuizInTableCell from "../../components/QuizInTableCell";
import { AppContext } from "../../state/AppContext";
import { getCorrectsCounter } from "../../utils";
import QuizInTableRow from "../../components/QuizInTableRow";
import QuizInButton from "../../components/QuizInButton";

const LastQuizzes: FC = () => {
  const { lastQuizzes, setCurrentQuiz, setQuestionsNumber } = useContext(AppContext);
  const navigate = useNavigate();

  const handleQuizSelect = (quiz: Quiz, questionsNumber: number) => {
    setCurrentQuiz(quiz);
    setQuestionsNumber(questionsNumber);
    navigate("/result");
  };

  const renderTableData = () =>
    lastQuizzes?.map((quiz) => (
      <QuizInTableRow hover key={quiz.id} onClick={() => handleQuizSelect(quiz, quiz.questions.length)}>
        <QuizInTableCell align="left">
          {Intl.DateTimeFormat("en", { timeZone: "UTC" }).format(new Date(quiz.date.split("T")[0]))}
        </QuizInTableCell>
        <QuizInTableCell align="center">
          {`${Math.floor((getCorrectsCounter(quiz) * 100) / quiz.questions.length)}%`}
        </QuizInTableCell>
        <QuizInTableCell align="right">{`${quiz.questions.length} questions`}</QuizInTableCell>
      </QuizInTableRow>
    ));

  return (
    <Container display="flex" flexDirection="column" alignItems="center" gap="30px">
      {lastQuizzes ? (
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <QuizInTableRow>
                <QuizInTableCell align="left">Date</QuizInTableCell>
                <QuizInTableCell align="center">Success rate</QuizInTableCell>
                <QuizInTableCell align="right">Question quantity</QuizInTableCell>
              </QuizInTableRow>
            </TableHead>
            <TableBody>{renderTableData()}</TableBody>
          </Table>
        </TableContainer>
      ) : null}
      <QuizInButton width="max-content" onClick={() => navigate("/")}>
        Home page
      </QuizInButton>
    </Container>
  );
};

export default LastQuizzes;
