import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answers: {
      type: [{
        answer: String, 
        numberOfVotes: Number
      }],
      required: true,
    },
    correctAnswer: { type: Number , default: -1},
  },
  { timestamp: true }
);

const Question = mongoose.model('Question', questionSchema);

export default Question;
