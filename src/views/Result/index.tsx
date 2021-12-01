import { FC, useContext, useEffect, useState } from "react";
import { Typography, Table, TableHead, TableBody, TableRow } from "@mui/material";
import { decode } from "html-entities";

import { Container, StyledTableContainer, StyledTableCell } from "./style";
import { AppContext } from "../../state/AppContext";
import { revealAnswers } from "../../services";

const Result: FC = () => {
  const { currentQuiz, setCurrentQuiz, questionsNumber } = useContext(AppContext);
  const [renderTable, setRenderTable] = useState(false);
  const [correctsCounter, setCorrectsCounter] = useState(0);

  const renderTableData = () =>
    currentQuiz?.questions.map(({ id, question, playerAnswer, correctAnswer }) => (
      <TableRow key={id}>
        <StyledTableCell align="left">{decode(question)}</StyledTableCell>
        <StyledTableCell align="center">{decode(playerAnswer)}</StyledTableCell>
        <StyledTableCell align="right">{decode(correctAnswer as string)}</StyledTableCell>
      </TableRow>
    ));

  useEffect(() => {
    revealAnswers(currentQuiz?.questions as Question[]).then((questions) => {
      setCurrentQuiz({ ...currentQuiz, questions } as Quiz);
      setRenderTable(true);
    });
  }, []);

  useEffect(() => {
    setCorrectsCounter(
      currentQuiz?.questions.filter((question) => question.playerAnswer == question.correctAnswer)
        .length as number
    );
  }, [currentQuiz]);

  return (
    <Container display="flex" flexDirection="column" alignItems="center">
      {renderTable ? (
        <>
          <Typography variant="h2">
            {`You’ve got ${correctsCounter} answers right of ${questionsNumber}!`}
          </Typography>
          <StyledTableContainer>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Question</StyledTableCell>
                  <StyledTableCell align="center">Your answer</StyledTableCell>
                  <StyledTableCell align="right">Correct answer</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderTableData()}</TableBody>
            </Table>
          </StyledTableContainer>
        </>
      ) : null}
    </Container>
  );
};

export default Result;
