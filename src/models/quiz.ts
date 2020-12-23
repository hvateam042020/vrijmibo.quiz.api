class Quiz{
    private id: number = 0

    constructor(private name:string, private questions: Question[] ){
        this.id = Math.round(Math.random() * 999999999999)
    }
}
