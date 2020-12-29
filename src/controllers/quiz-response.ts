import { RequestHandler } from "express";
import { QuizResponse } from "../models/quiz-response";
import usersService from "../services/quiz-response-service";

export const getResult: RequestHandler = (req, res) => {
  const user: QuizResponse = req.body;
  usersService.addAnswers(new QuizResponse(user.quizId, user.givenAnswers));

  res
    .status(201)
    .json(usersService.getResult(new QuizResponse(user.quizId, user.givenAnswers)));
};
