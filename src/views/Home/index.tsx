import { FC } from "react";
import { Typography, Box } from "@material-ui/core";

import { Container } from "./style";
import QuestionsNumberCard from "../../components/QuestionsNumberCard";
import QuizInButton from "../../components/QuizInButton";
import { useNavigate } from "react-router";

interface ComponentProps {
  defaultContent?: boolean;
}

const Home: FC<ComponentProps> = ({ defaultContent }) => {
  const navigate = useNavigate();

  const handleCancelButton = () => navigate("/");

  const renderContent = () => (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" gap="30px">
        <Typography variant="h2">{defaultContent ? "Welcome to QuizIn" : "Are you ready?"}</Typography>
        <Typography variant="caption">
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
          <QuizInButton position="right" color="primary" width="105px">
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
