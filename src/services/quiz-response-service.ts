import { QuizResponse } from "../models/quiz-response";
import { dbQuizReponse } from "../db/quiz-response";
import { dbQuizes } from "../db/quizes";
import { Quiz } from "../models/quiz";

class UsersServices {
  constructor(private dbUsers: QuizResponse[], private dbQuizes: Quiz[]) {}

  addAnswers(quizResponse: QuizResponse) {
    this.dbUsers.push(quizResponse);
  }
  getResult(quizResponse: QuizResponse) {
    const result = this.dbQuizes
      .find((quiz) => quiz.id === quizResponse.quizId)!
      .questions.map((question, index) => {
        const valid = question.validAnswer === quizResponse.givenAnswers[index];
        return {
          question: question.question,
          validAnswer: question.validAnswer,
          givenAnswer: quizResponse.givenAnswers[index],
          isValid: valid,
        };
      });

    return { userId: quizResponse.id, quizId: quizResponse.quizId, quizResult: result };
  }
}

export default new UsersServices(dbQuizReponse, dbQuizes);
