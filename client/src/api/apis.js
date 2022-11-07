// apis.js
import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000,
});

customAxios.defaults.withCredentials = true;

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

/////////////////
/*    인증관련   */
/////////////////
export const authApi = {
  postSignUp: (displayName, email, password) => {
    const body = { displayName, email, password };
    return customAxios.post(`/signup`, JSON.stringify(body));
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

    return data.data;
  },
  // 질문 작성
  postQuestion: async (userId, title, content) => {
    const body = { userId, title, content };
    console.log(body);
    const result = await customAxios.post(
      '/questions/ask',
      JSON.stringify(body)
    );
    return result;
  },
  // 질문 수정
  patchQuestion: async (questionId, title, content) => {
    const body = { title, content };
    console.log(content);
    const result = customAxios.patch(
      `/questions/${questionId}`,
      JSON.stringify(body)
    );
    console.log(result);
    return result;
  },
  // 질문 삭제
  deleteQuestion: async (questionId) => {
    const result = customAxios.delete(`/questions/${questionId}/`);
    return result;
  },
};

export const answerApi = {
  // 답변 등록
  postAnswer: async (questionId, content) => {
    const body = { content };
    console.log(body);
    const result = customAxios.post(
      `/questions/${questionId}/answers/`,
      JSON.stringify(body)
    );
    console.log(body);
    return result;
  },

  // 답변 수정
  patchAnswer: async (questionId, answerId, content) => {
    const body = { content };
    const result = customAxios.patch(
      `/questions/${questionId}/answers/${answerId}/`,
      JSON.stringify(body)
    );
    return result;
  },
  // 답변 삭제
  deleteAnswer: async (questionId, answerId) => {
    const result = customAxios.delete(
      `/questions/${questionId}/answers/${answerId}/`
    );
    return result;
  },
};

export const commentApi = {
  //  댓글 작성

  postComment: async (questionId, answerId, userId, content) => {
    const body = { userId, content };
    console.log(body);
    const result = customAxios.post(
      `/questions/${questionId}/answers/${answerId}/comments/`,
      JSON.stringify(body)
    );
    return result;
  },
  // 댓글 수정
  patchComment: (questionId, answerId, commentId, content) => {
    const body = { content };
    const result = customAxios.patch(
      `/questions/${questionId}/answers/${answerId}/comments/${commentId}`,
      body
    );
    return result;
  },
  // 댓글 삭제
  deleteComment: (question_id, answer_id, comment_id) => {
    const result = customAxios.delete(
      `/questions/${question_id}/answers/${answer_id}/comments/${comment_id}`
    );
    return result;
  },
};

/////////////////
/* 질문상세조회관련 */
/////////////////
export const questionDetailApi = {
  //질문 상세 조회
  getQuestionDetail: (question_id) => {
    return customAxios.get(`/questions/${question_id}`);
  },
  // //답변 추천 비추천
  // postAnswerVote: (question_id, answer_id, direction) => {
  //   return customAxios.post(
  //     `/questions/${question_id}/answers/${answer_id}/votes/${direction}`
  //   );
  // },
  // //답변 추천 비추천 취소
  // deleteAnswerVote: (question_id, answer_id, direction) => {
  //   return customAxios.delete(
  //     `/questions/${question_id}/answers/${answer_id}/votes/${direction}`
  //   );
  // },
  // //질문 추천 비추천
  // postQuestionVote: (question_id, direction) => {
  //   return customAxios.post(`/questions/${question_id}/votes/${direction}`);
  // },
  // //질문 추천 비추천 취소
  // deleteQuestionVote: (question_id, direction) => {
  //   return customAxios.delete(`/questions/${question_id}/votes/${direction}`);
  // },
  //질문 추천 비추천, 추천누른상태에서 비추천눌를때, 반대
  postVote: (data, direction) => {
    let uri = data.answerId
      ? `/questions/${data.questionId}/answers/${data.answerId}/votes/${direction}`
      : `/questions/${data.questionId}/votes/${direction}`;
    console.log(uri);
    return axios.post(uri);
  },
  //질문 추천 비추천 취소
  deleteVote: (data, direction) => {
    let uri = data.answerId
      ? `/questions/${data.questionId}/answers/${data.answerId}/votes/${direction}`
      : `/questions/${data.questionId}/votes/${direction}`;
    console.log(uri);
    return axios.delete(uri);
  },
  postChosenAnswer: (questionId, answerId) => {
    return customAxios.post(
      `questions/${questionId}/answers/${answerId}/chosen`
    );
  },
};

export const myApi = {
  // 마이페이지
  getUser: async (user_id) => {
    const result = await customAxios.get(`/users/${user_id}`);
    return result.data;
  },

  patchName: async (user_id, displayName) => {
    const data = { displayName };
    const result = await customAxios.patch(
      `/users/${user_id}`,
      JSON.stringify(data)
    );

    return result.data;
  },

  patchPassword: async (user_id, password) => {
    const data = { password };
    const result = await customAxios.patch(
      `/users/${user_id}`,
      JSON.stringify(data)
    );

    return result.data;
  },

  patchColor: async (user_id, avatarColor) => {
    const data = { avatarColor };
    const result = await customAxios.patch(
      `/users/${user_id}`,
      JSON.stringify(data)
    );
    return result.data;
  },

  deleteUser: async (user_id) => {
    const result = await customAxios.patch(`/questions/${user_id}`);

    return result.data;
  },
};
