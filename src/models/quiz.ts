import { Question } from "./question";
export class Quiz {
  private id: number = 0;

  constructor(private name: string, private questions: Question[]) {
    this.id = Math.round(Math.random() * 999999999999);
  }

  get quizId() {
    return this.id;
  }
  get quizName() {
    return this.name;
  }
  get quizQuestions() {
    return this.questions;
  }
}
