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
  getLogin: (username, password) => {
    const body = { username, password };
    return customAxios.post('/login', JSON.stringify(body));
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
};

export const answerApi = {
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
  postComment: (question_id, answer_id) =>
    customAxios.post(
      `/questions/${question_id}/answers/${answer_id}/comments`,
      body
    );
    console.log(body);
    return result;
  },
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
  getQuestionDetail: (question_id) => {
    return customAxios.get(`/questions/${question_id}`);
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

export const myApi = {
  // 마이페이지
  getUser: async (user_id) => {
    const data = await customAxios.get(`/user/${user_id}`);
    return data.data;
  },

  patchName: async (user_id, displayName) => {
    const data = { displayName };
    const result = await customAxios.patch(
      `/questions/${user_id}`,
      JSON.stringify(data)
    );

    return result.data;
  },

  patchPassword: async (user_id, password) => {
    const data = { password };
    const result = await customAxios.patch(
      `/questions/${user_id}`,
      JSON.stringify(data)
    );

    return result.data;
  },

  patchColor: async (user_id, avartarColor) => {
    const data = { avartarColor };
    const result = await customAxios.patch(
      `/questions/${user_id}`,
      JSON.stringify(data)
    );

    return result.data;
  },

  deleteUser: async (user_id) => {
    const result = await customAxios.patch(`/questions/${user_id}`);

    return result.data;
  },
};
