import Question from "../model/Question.js";

export const getQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;
    const question = await Question.findById(questionId);

    if (question) {
      res.send(question);
      return;
    }

    res.status(204).json({ msg: "No question with this ID!" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();

    if (questions) {
      res.send(questions);
      return;
    }

    res.status(204).json({ msg: "No questions" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const createQuestion = async (req, res) => {
  try {
    const { question, answers } = req.body;
    const correctAnswerReq = parseInt(req.body.correctAnswer);

    let newAnswers = answers.slice();

    newAnswers = newAnswers.map((ans) => ({
      answer: ans,
      numberOfVotes: 0,
    }));

    const newQuestion = new Question({
      question,
      answers: newAnswers,
      correctAnswer: correctAnswerReq ? correctAnswerReq : -1,
    });


    await newQuestion.save();

    res.status(201).json({ questionId: question._id, status: true });
  } catch (err) {
    res.status(400).json({ msg: err.message, status: false });
  }
};

export const voteAnswer = async (req, res) => {
  try {
    const { questionId, answerNum } = req.params;

    const question = await Question.findById(questionId);

    if (question) {
      if (question.correctAnswer === answerNum) {
        res.send(true);
        return;
      }
      res.send(false);
      return;
    }

    res.status(400).json({ msg: "No such question" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
