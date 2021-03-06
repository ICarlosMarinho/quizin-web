import { FC, useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { LoadingContainer } from "./style";
import { AppContext } from "../../state/AppContext";
import QuizInModal from "../QuizInModal";

const QuizInLoading: FC = () => {
  const { loading } = useContext(AppContext);
  return (
    <QuizInModal open={loading}>
      <LoadingContainer display="flex" alignItems="center" justifyContent="center">
        <CircularProgress color="secondary" size={80} />
      </LoadingContainer>
    </QuizInModal>
  );
};

export default QuizInLoading;
