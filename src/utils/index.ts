export const saveLastQuizzes = (lastQuizzes: Quiz[]): void => {
  try {
    const lastQuizzesStr = JSON.stringify(lastQuizzes);

    localStorage.setItem("lastQuizzes", lastQuizzesStr);
  } catch (error) {
    console.log(error);
  }
};

export const getLastQuizzesFromStorage = (): Quiz[] | null => {
  try {
    const lastQuizzesStr = localStorage.getItem("lastQuizzes");

    return JSON.parse(lastQuizzesStr as string);
  } catch (error) {
    return null;
  }
};

export const getCorrectsCounter = (currentQuiz: Quiz | null): number => {
  if (!currentQuiz) return 0;

  return currentQuiz.questions.filter((question) => question.playerAnswer == question.correctAnswer)
    .length as number;
};

export const correctAnswerRevealed = (currentQuiz: Quiz | null): boolean => {
  if (currentQuiz) {
    return currentQuiz.questions.every(({ correctAnswer }) => typeof correctAnswer == "string");
  } else return false;
};
