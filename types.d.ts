declare module "*.png" {
  content: any;
  export default content;
}

declare module "*.svg" {
  content: any;
  export default content;
}

declare module "*.otf" {
  content: any;
  export default content;
}

interface GetQuizReqParams {
  questionsNumber: number;
}

interface EncryptedAnswer {
  iv: string;
  authTag: string;
  answer: string;
}

interface Question {
  id: string;
  question: string;
  category: string;
  correctAnswer: EncryptedAnswer | string;
  answers: string[];
  playerAnswer: string | null;
}

interface Quiz {
  id: string;
  date: string;
  questions: Question[];
}

interface AppState {
  currentQuiz: Quiz | null;
  setCurrentQuiz: (quiz: Quiz | null) => void;
  lastQuizzes: Quiz[] | null;
  setLastQuizzes: (quizzes: Quiz[] | null) => void;
  questionsNumber: number;
  setQuestionsNumber: (questionsNumber: number) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: boolean;
  setError: (error: boolean) => void;
}