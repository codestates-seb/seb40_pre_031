// apis.js
import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
});

customAxios.interceptors.request.use(
  function (config) {
    // 요청 바로 직전
    // axios 설정값에 대해 작성합니다.
    return config;
  },
  function (error) {
    // 요청 에러 처리를 작성합니다.
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default customAxios;

export const authApi = {};

export const questionApi = {
  // 메인 페이지 질문 데이터 불러오기
  getQuestion: () =>
    customAxios.get(
      `/questions`
      // , {
      //   params: {
      //     page: '전역 상태에서 page',
      //     size: '전역 상태에서 size',
      //   },
      // }
    ),
  // 게시물 작성
  postQuestion: () =>
    customAxios.post(`/questions/ask`, {
      title: 'test title',
      content: 'content',
    }),

  // 질문 상세
  questionDetail: (question_id) => customAxios.get(`/questions/${question_id}`),

  // 질문 수정
  questionEdit: (question_id) =>
    customAxios.put(`/questions/${question_id}`, {
      title: 'Test title',
      content: '이걸로 수정할게요',
    }),
  // 질문 삭제
  questionDelete: (question_id) =>
    customAxios.delete(`/questions/${question_id}`),
};

export const answerApi = {
  getAnswer: (question_id) =>
    customAxios.get(`/questions/${question_id}/answers`),
  postAnswer: (question_id) =>
    customAxios.post(`/questions/${question_id}/answers`, {
      users_id: 'id',
      content: 'content',
    }),
  putAnswer: (question_id, answer_id) =>
    customAxios.put(`/questions/${question_id}/answers/${answer_id}`, {
      content: 'content',
    }),
  deleteAnswer: (question_id, answer_id) =>
    customAxios.delete(`/questions/${question_id}/answers/${answer_id}`),
};

export const commentApi = {
  getComment: (question_id, answer_id) =>
    customAxios.get(`/questions/${question_id}/answers/${answer_id}/comments`),
  postComment: (question_id, answer_id) =>
    customAxios.post(
      `/questions/${question_id}/answers/${answer_id}/comments`,
      {
        users_id: 'id',
        content: 'content',
      }
    ),
  putComment: (question_id, answer_id, comment_id) =>
    customAxios.put(
      `/questions/${question_id}/answers/${answer_id}/comments/${comment_id}`,
      { content: 'content' }
    ),
  deleteComment: (question_id, answer_id, comment_id) =>
    customAxios.delete(
      `/questions/${question_id}/answers/${answer_id}/comments/${comment_id}`
    ),
};
