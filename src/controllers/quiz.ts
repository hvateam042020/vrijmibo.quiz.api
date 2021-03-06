import { RequestHandler } from "express";
import { Quiz } from "../models/quiz";
import QuizesService from "../services/quizes-service";

export const createQuiz: RequestHandler = (req, res) => {
  const quiz: Quiz = req.body;
  const newQuiz = new Quiz(quiz.name, quiz.questions);
  QuizesService.addQuiz(newQuiz);
  res.status(201).json(newQuiz);
};

export const getQuizes: RequestHandler = (req, res) => {
  res.status(200).json(QuizesService.getQuizes());
};

export const getQuiz: RequestHandler = (req, res) => {
  res.status(200).json(QuizesService.getQuiz(Number(req.params.id)));
};

export const deleteQuiz: RequestHandler = (req, res) => {
  QuizesService.deleteQuiz(Number(req.params.id));
  res.status(200).json(`Quiz with id: ${req.params.id} is deleted`);
};
