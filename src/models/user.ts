export class User {
  private _id: number = 0;

  constructor(private _quizId: number, private _givenAnswers: Array<string>) {
    this._id = Math.round(Math.random() * 999999);
  }

  get id() {
    return this._id;
  }
  get quizId() {
    return this._quizId;
  }
  get givenAnswers() {
    return this._givenAnswers;
  }
}
