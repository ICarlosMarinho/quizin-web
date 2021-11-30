import axios from "axios";

export const getQuizFromApi = (questionsNumber: number): Promise<Quiz | null> => {
  return axios
    .get(`${process.env.API_URL}/getQuiz/${questionsNumber}`)
    .then((response) => response.data)
    .catch(() => null);
};
