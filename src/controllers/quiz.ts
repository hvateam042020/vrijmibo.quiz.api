import { RequestHandler } from "express";
import { Quiz } from "../models/quiz";

const Quizes: Quiz[] = []

export const createQuiz: RequestHandler = (req, res) => {
    const quiz = (req.body as Quiz)
    Quizes.push(quiz)
    res.status(201).json(quiz)
};

export const getQuizes: RequestHandler = (req, res) => {
    res.status(200).json(Quizes)
};