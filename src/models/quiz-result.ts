import { QuizResponse } from "./quiz-response";

interface quizResult {
  question: string;
  validAnswer: string;
  givenAnswer: string;
  isValid: boolean;
}

export class QuizResult {
  constructor(
    private quizResponseId: number,
    private quizId: number,
    private quizResult: quizResult[]
  ) {}
}
