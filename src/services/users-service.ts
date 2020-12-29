import { User } from "../models/user";
import { dbUsers } from "../db/users";
import { dbQuizes } from "../db/quizes";
import { Quiz } from "../models/quiz";

class UsersServices {
  constructor(private dbUsers: User[], private dbQuizes: Quiz[]) {}

  addAnswers(user: User) {
    this.dbUsers.push(user);
  }
  getResult(user: User) {
    const result = this.dbQuizes
      .find((quiz) => quiz.id === user.quizId)!
      .questions.map((question, index) => {
        const valid = question.validAnswer === user.givenAnswers[index];
        return {
          question: question.question,
          validAnswer: question.validAnswer,
          givenAnswer: user.givenAnswers[index],
          isValid: valid,
        };
      });

    return { userId: user.id, quizId: user.quizId, quizResult: result };
  }
}

export default new UsersServices(dbUsers, dbQuizes);
