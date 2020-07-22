import { makeReducerCreator } from '../../utils/reduxUtils';
import { QuestionTypes } from './actions';
import { mongoObjectId } from '../../utils/textProcessor';

// Setup inintial state for question
export const initialState = {
  questions: [],
  offset: 0, // offset = (page - 1) * limit;
  limit: 10,
  total: null,
  loading: false,
  listQuestionSuccess: undefined,
  listQuestionFailure: undefined,

  createQuestionSuccess: undefined,
  createQuestionFailure: undefined,

  updateQuestionSuccess: undefined,
  updateQuestionFailure: undefined,

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
  { data, total, limit, offset },
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
const createOneQuestionSuccess = (state) => {
  return {
    ...state,
    loading: false,
    createQuestionFailure: false,
    createQuestionSuccess: true,
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

  [QuestionTypes.UPLOAD_IMAGE_SUCCESS]: uploadImageSuccess,
  [QuestionTypes.UPLOAD_IMAGE_FAILURE]: uploadImageFailure,

  [QuestionTypes.REMOVE_IMAGE]: removeImage,
});
