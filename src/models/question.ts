export class Question{
    constructor(private _question: string, private answerA: string, private answerB: string, private answerC: string, private answerD: string, private _validAnswer: string){}

    get question() {
        return this._question
    }
    get validAnswer() {
        return this._validAnswer
    }

}