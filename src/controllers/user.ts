import { RequestHandler } from "express";
import { User } from "../models/user";
import usersService from "../services/users-service";

export const getResult: RequestHandler = (req, res) => {
  const user: User = req.body;
  usersService.addAnswers(new User(user.quizId, user.givenAnswers));

  res
    .status(201)
    .json(usersService.getResult(new User(user.quizId, user.givenAnswers)));
};
