declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

declare module "*.png" {
  content: any;
  export default content;
}

declare module "*.svg" {
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
  setCurrentQuiz: (quiz: Quiz) => void;
  lastQuizzes: Quiz[] | null;
  setLastQuizzes: (quizzes: Quiz[]) => void;
  questionsNumber: number;
  setQuestionsNumber: (questionsNumber: number) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: boolean;
  setError: (error: boolean) => void;
}
