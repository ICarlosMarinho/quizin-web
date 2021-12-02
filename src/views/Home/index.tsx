import { FC, useContext, useEffect } from "react";
import { Typography, Box } from "@mui/material";

import { Container } from "./style";
import QuestionsNumberCard from "../../components/QuestionsNumberCard";
import QuizInButton from "../../components/QuizInButton";
import { useNavigate } from "react-router";
import { AppContext } from "../../state/AppContext";
import { getQuizFromApi } from "../../services";
import { getLastQuizzesFromStorage } from "../../utils";

interface ComponentProps {
  defaultContent?: boolean;
}

const Home: FC<ComponentProps> = ({ defaultContent }) => {
  const navigate = useNavigate();
  const { setCurrentQuiz, setLoading, setError, questionsNumber, setLastQuizzes, setQuestionsNumber } =
    useContext(AppContext);

  const handleCancelButton = () => navigate("/");
  const handleStartButton = () => {
    setLoading(true);

    getQuizFromApi(questionsNumber)
      .then((quiz) => {
        setCurrentQuiz(quiz as Quiz);

        navigate(`/question/1`, { replace: true });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLastQuizzes(getLastQuizzesFromStorage() as Quiz[]);
  }, []);

  const renderContent = () => (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" gap="30px">
        <Typography variant="h3">{defaultContent ? "Welcome to QuizIn" : "Are you ready?"}</Typography>
        <Typography variant="h6">
          {defaultContent
            ? "First, choose the number of questions to answer."
            : "You can start the quiz now, or cancel and modify the number of questions."}
        </Typography>
      </Box>
      {defaultContent ? (
        <QuestionsNumberCard />
      ) : (
        <Box display="flex" justifyContent="center">
          <QuizInButton position="left" color="secondary" width="105px" onClick={handleCancelButton}>
            No, cancel
          </QuizInButton>
          <QuizInButton position="right" color="primary" width="105px" onClick={handleStartButton}>
            Yes, start
          </QuizInButton>
        </Box>
      )}
    </>
  );

  return (
    <Container display="flex" flexDirection="column" alignItems="center" gap="80px">
      {renderContent()}
    </Container>
  );
};

export default Home;
