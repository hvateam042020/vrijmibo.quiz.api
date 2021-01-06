import { QuizResponse } from "../models/quiz-response";
import { dbQuizReponse } from "../db/quiz-response";
import { dbQuizes } from "../db/quizes";
import { Quiz } from "../models/quiz";
import { QuizResult } from "../models/quiz-result";

class UsersServices {
  constructor(private dbUsers: QuizResponse[], private dbQuizes: Quiz[]) {}

  addAnswers(quizResponse: QuizResponse) {
    this.dbUsers.push(quizResponse);
  }
  getResult(quizResponse: QuizResponse) {
    const quiz = this.dbQuizes.find((quiz) => quiz.id === quizResponse.quizId);

    if (quiz) {
      const result = quiz.questions.map((question, index) => {
        const valid = question.validAnswer === quizResponse.givenAnswers[index];
        return {
          question: question.question,
          validAnswer: question.validAnswer,
          givenAnswer: quizResponse.givenAnswers[index],
          isValid: valid,
        };
      });

      return new QuizResult(quizResponse.id, quizResponse.quizId, result);
    } else {
      throw new Error("quiz not found");
    }
  }
}

export default new UsersServices(dbQuizReponse, dbQuizes);
