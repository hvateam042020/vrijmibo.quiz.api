import { RequestHandler } from "express";
import { Quiz } from "../models/quiz";
import QuizesService from '../services/quizes-service'

export const createQuiz: RequestHandler = (req, res) => {
    const quiz = (req.body as Quiz)
    QuizesService.addQuiz(quiz)
    res.status(201).json(quiz)
};

export const getQuizes: RequestHandler = (req, res) => {
    res.status(200).json(QuizesService.getQuizes())
};