import express from "express";
import {getQuestion, getQuestions, voteAnswer, createQuestion} from '../controller/Question.controller.js'

const router = express.Router();

router.get("/", getQuestions);
router.get("/:questionId", getQuestion);
router.get("/:questionId/:answerNum", voteAnswer);
router.post("/", createQuestion);

export default router;
