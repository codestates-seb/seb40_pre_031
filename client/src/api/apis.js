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

export const authApi = {
  postSignUp: async (name, email, password) => {
    const body = { name, email, password };
    console.log(body);
    const result = await customAxios.post(`/signup`, body);
    return result;
  },
  getLogin: async (email, password) => {
    const body = { email, password };
    // const result = await customAxios.get('/login',body);
    const result = await customAxios.get(
      `/signup?email=${email}&password=${password}`,
      body
    );
    return result;
  },
};

export const questionApi = {
  // 메인 페이지 질문 데이터 불러오기
  getQuestion: async () => {
    const data = await customAxios.get(`/questions`);
    return data.data.content;
  },

  getQuestionPage: async (page, size) => {
    const params = {
      page: page,
      size: size,
    };
    const data = await customAxios.get(`/questions`, { params });

    return data.data.content;
  },

  // 게시물 작성
  postQuestionList: () =>
    customAxios.post(`/questions/ask`, {
      title: 'test title',
      content: 'content',
    }),

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

export const questionDetailApi = {
  //질문 상세 조회
  getQuestionDetail: async (question_id) => {
    // const data = await customAxios.get(`/questions/${question_id}`);
    const data = await customAxios.get(`/questions?questionId=${question_id}`);
    return data;
  },
  //답변 추천 비추천
  postVote: async (question_id, answer_id, std) => {
    const data = await customAxios.post(
      `/questions/${question_id}/answers/${answer_id}/votes/${std}`
    );
    return data;
  },
  //답변 추천 비추천 취소
  deleteVote: async (question_id, answer_id, std) => {
    const data = await customAxios.delete(
      `/questions/${question_id}/answers/${answer_id}/votes/${std}`
    );
    return data;
  },
};
