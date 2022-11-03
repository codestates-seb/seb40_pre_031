--! 유저 데이터 !--

INSERT INTO users(user_id, created_at, modified_at, display_name, email, password) VALUES
(1,'2022-11-03 05:12:01.688245','2022-11-03 05:12:01.688245','김안녕','hello@naver.com','{bcrypt}$2a$10$49.HzgebYp24NPzHbSP9Se5LbxC1jYqhxYS8ai4es1R2seFOZT9QK','USER_ACTIVE'),
(2,'2022-11-03 05:14:47.927134','2022-11-03 05:14:47.927134','박안녕','hello@gmail.com','{bcrypt}$2a$10$nukmhhAsTRBb34vvwfJkQeAGcdmtAET54MMrI1KXi5qWOFK7mY1Qy','USER_ACTIVE');

--! 유저 권한 데이터 !--
INSERT INTO users_roles(users_user_id, roles) VALUES (1,'USER'),(2,'USER');


--! 질문 데이터 !--
INSERT INTO question(question_id, created_at, modified_at, chosen_answer_id, content, title,  views, votes, user_id) VALUES
(1,'2022-11-03 05:19:54.147008','2022-11-03 05:19:54.147008',2,'첫 번째 내용입니다.','첫 번째 질문입니다.',1,0,1),
(2,'2022-11-03 05:21:50.490097','2022-11-03 05:21:50.490097',1,'두 번째 내용입니다.','두 번째 질문입니다.',0,0,2);

--! 질문 추천 데이터 !--

--! 답변 데이터 !--
INSERT INTO answer(answer_id, created_at, modified_at, content, status, question_id, user_id) VALUES
(1,'2022-11-03 05:24:38.518949','2022-11-03 05:24:38.518949','첫 번째 답변입니다.','PUBLIC',1,1),
(2,'2022-11-03 05:25:34.698758','2022-11-03 05:25:34.698758','두 번째 답변입니다.','PUBLIC',1,1);

--! 답변 추천 데이터 !--
INSERT INTO answer_vote(answer_vote_id, created_at, modified_at, status, answer_id, user_id) VALUES
(1,'2022-11-03 05:29:45.205676','2022-11-03 05:29:57.276102','DOWN',1,1);

--! 댓글 데이터 !--
INSERT INTO comment(comment_id, created_at, modified_at, content, status, answer_id, user_id) VALUES
(1,'2022-11-03 05:27:01.460364','2022-11-03 05:27:01.460364','첫 번째 댓글 입니다.','PUBLIC',1,1),
(2,'2022-11-03 05:28:09.360511','2022-11-03 05:28:09.360511','두 번째 댓글 입니다.','PUBLIC',1,1);
