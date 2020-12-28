import { Quiz } from "../models/quiz";
import { dbQuizes } from "../db/quizes";
class QuizesService {
  private readonly ONE_ITEM = 1;

  constructor(private dbQuizes: Quiz[]) {}

  getQuiz(quizId: number) {
    const quiz = this.dbQuizes.find((quiz) => quiz.id === quizId);

    if (!quiz) {
      throw new Error(`quiz with id: ${quizId} not found.`);
    }
    return quiz;
  }

  addQuiz(quiz: Quiz) {
    this.dbQuizes.push(quiz);
  }

  getQuizes() {
    if (this.dbQuizes.length === 0) {
      throw new Error(`No quizes available.`);
    }
    return this.dbQuizes;
  }

  deleteQuiz(quizId: number) {
    const quizIndex = this.dbQuizes.findIndex((quiz) => quiz.id === quizId);

    if (quizIndex < 0) {
      throw new Error(`Quiz with id: ${quizId} not found.`);
    }
    this.dbQuizes.splice(quizIndex, this.ONE_ITEM);
  }
}

export default new QuizesService(dbQuizes);
