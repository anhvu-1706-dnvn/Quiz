import { makeReducerCreator } from '../../utils/reduxUtils';
import { QuestionTypes } from './actions';
import { mongoObjectId } from '../../utils/textProcessor';

// Setup inintial state for question
export const initialState = {
  questions: [],
  offset: 0, // offset = (page - 1) * limit;
  limit: 10,
  total: 0,
  loading: false,
  listQuestionSuccess: undefined,
  listQuestionFailure: undefined,

  createQuestionSuccess: undefined,
  createQuestionFailure: undefined,

  updateQuestionSuccess: undefined,
  updateQuestionFailure: undefined,

  deleteQuestionSuccess: undefined,
  deleteQuestionFailure: undefined,

  currentQuestion: {},
  questionImage: null,

  // One question info
  questionContent: null,
  optionList: [
    {
      id: mongoObjectId(),
      content: null,
      isCorrect: false,
    },
    {
      id: mongoObjectId(),
      content: null,
      isCorrect: false,
    },
  ],
};
// End setup

// LIST QUESTION
const getListQuestionByTest = (state) => ({
  ...state,
  loading: true,
});

const getListQuestionByTestSuccess = (
  state,
  { data, total, limit, offset }
) => ({
  ...state,
  questions: data,
  limit,
  offset,
  total,
  loading: false,
  listQuestionSuccess: true,
  listQuestionFailure: false,
});

const getListQuestionByTestFailure = (state) => ({
  ...state,
  loading: false,
  listQuestionSuccess: false,
  listQuestionFailure: true,
});

// ---------------------------------------
const createOneQuestionSuccess = (state, { data }) => {
  return {
    ...state,
    loading: false,
    createQuestionFailure: false,
    createQuestionSuccess: true,
    questions: [...state.questions, data],
  };
};

const createOneQuestionFailure = (state) => ({
  ...state,
  loading: false,
  createQuestionFailure: false,
  createQuestionSuccess: true,
});
// -----------------------------------------
const updateOneQuestion = (state, { id, payload }) => {
  const questionList = [...state.questions];
  payload.key = id;
  const index = questionList.findIndex((e) => e.id === id);
  questionList[index].answers = payload.answers;
  questionList[index].content = payload.content;
  questionList[index].time = payload.time;
  questionList[index].minimumScore = payload.minimumScore;
  questionList[index].score = payload.score;
  return {
    ...state,
    questions: questionList,
  };
};
const updateOneQuestionSuccess = (state) => ({
  ...state,
  loading: false,
  updateQuestionFailure: false,
  updateQuestionSuccess: true,
});
const updateOneQuestionFailure = (state) => ({
  ...state,
  loading: false,
  updateQuestionFailure: false,
  updateQuestionSuccess: true,
});

// -----------------------------------------
const getOneQuestionSuccess = (state, { data }) => ({
  ...state,
  currentQuestion: data,
  questionContent: data.content,
  optionList: data.options,
  loading: false,
});
const getOneQuestionFailure = (state) => ({
  ...state,
  loading: false,
});

// -----------------------------------------
const deleteOneQuestionSuccess = (state, { id }) => {
  const question = state.questions.find((e) => e.id === id);
  const index = state.questions.indexOf(question);
  const newQuestions = [
    ...state.questions.slice(0, index),
    ...state.questions.slice(index + 1),
  ];
  return {
    ...state,
    questions: newQuestions,
    deleteQuestionSuccess: true,
    deleteQuestionFailure: false,
  };
};

const deleteOneQuestionFailure = (state) => ({
  ...state,
  deleteQuestionSuccess: false,
  deleteQuestionFailure: true,
});

// -----------------------------------------
// UPLOAD IMAGE
const uploadImageSuccess = (state, { fileUrl }) => {
  return {
    ...state,
    questionImage: fileUrl,
  };
};

const uploadImageFailure = (state) => ({
  ...state,
  loading: false,
});

const removeImage = (state) => ({
  ...state,
  questionImage: null,
});
// --------------------------------------------------

const updateCurrentQuestion = (state, { data }) => ({
  ...state,
  currentQuestion: data,
});

const deleteListQuestion = (state) => ({
  ...state,
  questions: [],
  total: 0,
});

export const question = makeReducerCreator(initialState, {
  [QuestionTypes.GET_LIST_QUESTION_BY_TEST]: getListQuestionByTest,
  [QuestionTypes.GET_LIST_QUESTION_BY_TEST_SUCCESS]: getListQuestionByTestSuccess,
  [QuestionTypes.GET_LIST_QUESTION_BY_TEST_FAILURE]: getListQuestionByTestFailure,

  [QuestionTypes.CREATE_ONE_QUESTION_SUCCESS]: createOneQuestionSuccess,
  [QuestionTypes.CREATE_ONE_QUESTION_FAILURE]: createOneQuestionFailure,

  [QuestionTypes.UPDATE_ONE_QUESTION]: updateOneQuestion,
  [QuestionTypes.UPDATE_ONE_QUESTION_SUCCESS]: updateOneQuestionSuccess,
  [QuestionTypes.UPDATE_ONE_QUESTION_FAILURE]: updateOneQuestionFailure,

  [QuestionTypes.GET_ONE_QUESTION_SUCCESS]: getOneQuestionSuccess,
  [QuestionTypes.GET_ONE_QUESTION_FAILURE]: getOneQuestionFailure,

  [QuestionTypes.DELETE_ONE_QUESTION_SUCCESS]: deleteOneQuestionSuccess,
  [QuestionTypes.DELETE_ONE_QUESTION_FAILURE]: deleteOneQuestionFailure,

  [QuestionTypes.UPLOAD_IMAGE_SUCCESS]: uploadImageSuccess,
  [QuestionTypes.UPLOAD_IMAGE_FAILURE]: uploadImageFailure,

  [QuestionTypes.REMOVE_IMAGE]: removeImage,

  [QuestionTypes.UPDATE_CURRENT_QUESTION]: updateCurrentQuestion,
  [QuestionTypes.DELETE_LIST_QUESTION]: deleteListQuestion,
});
