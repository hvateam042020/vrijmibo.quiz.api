import { json } from 'body-parser'
import express, {Request, Response, NextFunction } from 'express'
import quizRoutes from './routes/quiz'
import quizResponseRoutes from './routes/quiz-response'

const app = express()

app.use(json())

app.use('/quiz', quizRoutes)
app.use('/result', quizResponseRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message})
})


app.listen(3000)