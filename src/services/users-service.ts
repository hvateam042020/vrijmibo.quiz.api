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
    const correctAnswers: Array<boolean> = [];
    const questions = this.dbQuizes.find((quiz) => quiz.id === user.quizId)!
      .questions;

    user.givenAnswers.forEach((a, i) =>
      a === questions[i].validAnswer
        ? correctAnswers.push(true)
        : correctAnswers.push(false)
    );

    const result = { ...questions, ...user.givenAnswers, ...correctAnswers };
    return { user, result };
  }
}

export default new UsersServices(dbUsers, dbQuizes);
