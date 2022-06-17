import { createContext, FC, useState } from "react";

import { WithChildren } from "../../types";

export const AppContext = createContext<AppState>({
  currentQuiz: null,
  setCurrentQuiz: () => null,
  questionsNumber: 10,
  setQuestionsNumber: () => null,
  lastQuizzes: null,
  setLastQuizzes: () => null,
  loading: false,
  setLoading: () => null,
  error: false,
  setError: () => null
});

const AppContextProvider = ({ children }: WithChildren) => {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [lastQuizzes, setLastQuizzes] = useState<Quiz[] | null>(null);
  const [questionsNumber, setQuestionsNumber] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <AppContext.Provider
      value={{
        currentQuiz,
        setCurrentQuiz,
        lastQuizzes,
        setLastQuizzes,
        questionsNumber,
        setQuestionsNumber,
        loading,
        setLoading,
        error,
        setError
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
