import { Question } from "./question";
export class Quiz {
  private _id: number = 0;

  constructor(private _name: string, private _questions: Question[]) {
    this._id = Math.round(Math.random() * 999999999999);
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get questions() {
    return this._questions;
  }
}
