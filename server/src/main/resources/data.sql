--! StackOverFlow Dummy Data --!

----! 유저 데이터 !--
INSERT INTO users(created_at, modified_at, avatar_color, display_name, email, password, user_status) VALUES
('2022-11-03 15:46:42.966525','2022-11-03 15:46:42.966525','#ffffff','김안녕1','hello1@naver.com','{bcrypt}$2a$10$bdYJWXa3PamqDlYUQ9cLbea97/qQBY8ES4bTxcYJr0foitA3tsPcO','USER_ACTIVE'),
('2022-11-03 15:47:47.100315','2022-11-03 15:47:47.100315','#ff0000', '김안녕2','hello2@naver.com','{bcrypt}$2a$10$8CW/HMziPl/5wHrZJfGRCueeEVSzBIXW6EsvvXPAVPaXxq1SbhuPC','USER_ACTIVE'),
('2022-11-03 15:48:07.441170','2022-11-03 15:48:07.441170','#0000ff','김안녕3','hello3@naver.com','{bcrypt}$2a$10$CnmNw4qmE2.U1HcLVcBPUuPFzaS6zgSG8zk.QnUCSbmJ/Y9dnwjKW','USER_ACTIVE'),
('2022-11-03 15:48:16.341997','2022-11-03 15:48:16.341997','#00ffff', '김안녕4','hello4@naver.com','{bcrypt}$2a$10$2Q97Oo.tfE.U9AU.AO30ieUkDNvaHMRPrbsHLSeEcDIdkTHDVoigm','USER_ACTIVE'),
('2022-11-03 15:48:24.276501','2022-11-03 15:48:24.276501','#808080', '김안녕5','hello5@naver.com','{bcrypt}$2a$10$yTjCEMRLdTRaoGkuPbiRQO7CmQaWn8GYOuNzI/BmJSY8vxXfEr86y','USER_ACTIVE'),
('2022-11-03 15:48:31.517108','2022-11-03 15:48:31.517108','#ffdead', '김안녕6','hello6@naver.com','{bcrypt}$2a$10$ePWz4fUrB5HGDs04.Jq7yu8pJYPN6kt8kWWNauF1RQmfMOt0RmtcS','USER_ACTIVE'),
('2022-11-03 15:48:39.520934','2022-11-03 15:48:39.520934','#26fcf9', '김안녕7','hello7@naver.com','{bcrypt}$2a$10$rhkOiABIXIuz5UzcHGUIoe2daKQZDV3pTJoc9z4/9Vtt8lO3MQByy','USER_ACTIVE'),
('2022-11-03 15:48:46.390662','2022-11-03 15:48:46.390662','#8e38bb', '김안녕8','hello8@naver.com','{bcrypt}$2a$10$hyMgQUDaTc0YDbPyzFT3BeFPnmv3ebBqB9X04VBoMemewcCKgM8KC','USER_ACTIVE'),
('2022-11-03 15:48:53.416234','2022-11-03 15:48:53.416234','#000000', '김안녕9','hello9@naver.com','{bcrypt}$2a$10$5YwMN1D0H4GwHlyNOXC10.4E.PRgseQNv6lfZbSX0.wwt/gyM8MKa','USER_ACTIVE'),
('2022-11-03 15:49:01.388679','2022-11-03 15:49:01.388679','#ff00ff', '김안녕10','hello10@naver.com','{bcrypt}$2a$10$vNqLhp55b/37a17RrRZx9uWZQSQgL1z9zWaf5i9RJ4L5fBrhMkc3.','USER_ACTIVE');

--! 유저 권한 데이터 !--
INSERT INTO users_roles(users_user_id, roles) VALUES
(1,'USER'),(2,'USER'),(3,'USER'),(4,'USER'),(5,'USER'),
(6,'USER'),(7,'USER'),(8,'USER'),(9,'USER'),(10,'USER');


--! 질문 데이터 !--
INSERT INTO question(created_at, modified_at, chosen_answer_id, content, title,  views, votes, user_id) VALUES
('2022-11-03 15:52:38.966848','2022-11-03 15:52:38.966848',5,'첫 번째 내용입니다.','첫 번째 질문입니다.',1,1,1),
('2022-11-03 15:52:47.652667','2022-11-03 15:52:47.652667',null,'두 번째 내용입니다.','두 번째 질문입니다.',2,2,2),
('2022-11-03 15:52:54.014826','2022-11-03 15:52:54.014826',null,'세 번째 내용입니다.','세 번째 질문입니다.',3,3,3),
('2022-11-03 15:53:00.907257','2022-11-03 15:53:00.907257',null,'네 번째 내용입니다.','네 번째 질문입니다.',4,4,4),
('2022-11-03 15:53:07.661869','2022-11-03 15:53:07.661869',null,'다섯 번째 내용입니다.','다섯 번째 질문입니다.',5,5,5),
('2022-11-03 15:53:15.399587','2022-11-03 15:53:15.399587',null,'여섯 번째 내용입니다.','여섯 번째 질문입니다.',6,6,6),
('2022-11-03 15:53:23.384465','2022-11-03 15:53:23.384465',null,'일곱 번째 내용입니다.','일곱 번째 질문입니다.',7,7,7),
('2022-11-03 15:53:32.727546','2022-11-03 15:53:32.727546',null,'여덟 번째 내용입니다.','여덟 번째 질문입니다.',8,8,8),
('2022-11-03 15:53:40.167566','2022-11-03 15:53:40.167566',null,'아홉 번째 내용입니다.','아홉 번째 질문입니다.',9,9,9),
('2022-11-03 15:53:46.892183','2022-11-03 15:53:46.892183',null,'열 번째 내용입니다.','열 번째 질문입니다.',10,10,10);

--! 질문 추천 데이터 !--
INSERT INTO question_vote(created_at, modified_at, status, question_id, user_id) VALUES
('2022-11-01 05:29:45.205676','2022-11-03 05:29:57.276102','UP',1,1),
('2022-11-02 05:29:45.205676','2022-11-03 05:29:57.276102','UP',1,2),
('2022-11-03 05:29:45.205676','2022-11-03 05:29:57.276102','UP',1,3),
('2022-11-04 05:29:45.205676','2022-11-03 05:29:57.276102','UP',1,4),
('2022-11-05 05:29:45.205676','2022-11-03 05:29:57.276102','UP',1,5),
('2022-11-06 05:29:45.205676','2022-11-03 05:29:57.276102','UP',1,6),
('2022-11-07 05:29:45.205676','2022-11-03 05:29:57.276102','DOWN',1,7),
('2022-11-08 05:29:45.205676','2022-11-03 05:29:57.276102','DOWN',1,8),
('2022-11-09 05:29:45.205676','2022-11-03 05:29:57.276102','DOWN',1,9),
('2022-11-10 05:29:45.205676','2022-11-03 05:29:57.276102','DOWN',1,10);


--! 답변 데이터 !--
INSERT INTO answer(created_at, modified_at, content, status, question_id, user_id) VALUES
('2022-11-03 05:24:38.518949','2022-11-03 05:24:38.518949','첫 번째 답변입니다.','PUBLIC',1,1),
('2022-11-03 05:25:34.698758','2022-11-03 05:25:34.698758','두 번째 답변입니다.','PUBLIC',1,2),
('2022-11-03 05:25:34.698758','2022-11-03 05:25:34.698758','세 번째 답변입니다.','PUBLIC',1,3),
('2022-11-03 05:25:34.698758','2022-11-03 05:25:34.698758','네 번째 답변입니다.','PUBLIC',1,4),
('2022-11-03 05:26:34.698758','2022-11-03 05:25:34.698758','다섯 번째 답변입니다.','PUBLIC',1,5),
('2022-11-03 05:27:34.698758','2022-11-03 05:25:34.698758','여섯 번째 답변입니다.','PUBLIC',1,6),
('2022-11-03 05:28:34.698758','2022-11-03 05:25:34.698758','일곱 번째 답변입니다.','PUBLIC',1,7),
('2022-11-03 05:29:34.698758','2022-11-03 05:25:34.698758','여덟 번째 답변입니다.','PUBLIC',1,8),
('2022-11-03 05:30:34.698758','2022-11-03 05:25:34.698758','아홉 번째 답변입니다.','PUBLIC',1,9),
('2022-11-03 05:31:34.698758','2022-11-03 05:25:34.698758','열 번째 답변입니다.','PUBLIC',1,10);


--! 답변 추천 데이터 !--
INSERT INTO answer_vote(created_at, modified_at, status, answer_id, user_id) VALUES
('2022-11-01 05:29:45.205676','2022-11-03 05:29:57.276102','UP',1,1),
('2022-11-02 05:29:45.205676','2022-11-03 05:29:57.276102','UP',1,2),
('2022-11-03 05:29:45.205676','2022-11-03 05:29:57.276102','UP',1,3),
('2022-11-04 05:29:45.205676','2022-11-03 05:29:57.276102','UP',1,4),
('2022-11-05 05:29:45.205676','2022-11-03 05:29:57.276102','UP',1,5),
('2022-11-06 05:29:45.205676','2022-11-03 05:29:57.276102','UP',1,6),
('2022-11-07 05:29:45.205676','2022-11-03 05:29:57.276102','DOWN',1,7),
('2022-11-08 05:29:45.205676','2022-11-03 05:29:57.276102','DOWN',1,8),
('2022-11-09 05:29:45.205676','2022-11-03 05:29:57.276102','DOWN',1,9),
('2022-11-10 05:29:45.205676','2022-11-03 05:29:57.276102','DOWN',1,10);

--! 댓글 데이터 !--
INSERT INTO comment(created_at, modified_at, content, status, answer_id, user_id) VALUES
('2022-11-03 05:21:01.460364','2022-11-03 05:27:01.460364','첫 번째 댓글 입니다.','PUBLIC',1,1),
('2022-11-03 05:22:01.460364','2022-11-03 05:27:01.460364','두 번째 댓글 입니다.','PUBLIC',1,2),
('2022-11-03 05:23:01.460364','2022-11-03 05:27:01.460364','세 번째 댓글 입니다.','PUBLIC',1,3),
('2022-11-03 05:24:01.460364','2022-11-03 05:27:01.460364','네 번째 댓글 입니다.','PUBLIC',1,4),
('2022-11-03 05:25:01.460364','2022-11-03 05:27:01.460364','다섯 번째 댓글 입니다.','PUBLIC',1,5),
('2022-11-03 05:26:01.460364','2022-11-03 05:27:01.460364','여섯 번째 댓글 입니다.','PUBLIC',1,6),
('2022-11-03 05:27:01.460364','2022-11-03 05:27:01.460364','일곱 번째 댓글 입니다.','PUBLIC',1,7),
('2022-11-03 05:28:01.460364','2022-11-03 05:27:01.460364','여덟 번째 댓글 입니다.','PUBLIC',1,8),
('2022-11-03 05:29:01.460364','2022-11-03 05:27:01.460364','아홉 번째 댓글 입니다.','PUBLIC',1,9),
('2022-11-03 05:30:09.360511','2022-11-03 05:28:09.360511','열 번째 댓글 입니다.','PUBLIC',1,10);
