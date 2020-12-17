import express, {Request, Response, NextFunction } from 'express'
import quizRoutes from './routes/quiz'

const app = express()

app.use('/quiz', quizRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message})
})


app.listen(3000)