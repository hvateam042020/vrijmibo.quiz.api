import { Quiz } from "../models/quiz";
import { dbQuizes } from "../db/quizes";
import { timingSafeEqual } from "crypto";
import { threadId } from "worker_threads";

// export const addQuiz = (quiz: Quiz) => dbQuizes.push(quiz);

// export const getQuiz = (quiz: Quiz) => dbQuizes.push(quiz);

// export const getQuizes = () => dbQuizes;

// const quizesService = { addQuiz, getQuiz, getQuizes };
// export default quizesService;

class QuizesService {
  private readonly ONE_ITEM = 1;

  constructor(private dbQuizes: Quiz[]) {}

  getQuiz(quizId: number) {
    const quiz = this.dbQuizes.find((quiz) => quiz.quizId === quizId);

    if (!quiz) {
      throw new Error(`quiz with id: ${quizId} not found.`);
    }
    return quiz;
  }

  addQuiz(quiz: Quiz) {
    this.dbQuizes.push(quiz);
  }

  getQuizes() {
    return this.dbQuizes;
  }

  deleteQuiz(quizId: number) {
    if (this.dbQuizes.length === 0) {
      return undefined;
    }
    const quizIndex = this.dbQuizes.findIndex((quiz) => quiz.quizId === quizId);
    this.dbQuizes.splice(quizIndex, this.ONE_ITEM);
  }
}

export default new QuizesService(dbQuizes);
