--! 유저 테이블 !--
DROP TABLE IF EXISTS users;

 CREATE TABLE users (
  user_id bigint NOT NULL AUTO_INCREMENT,
  created_at datetime(6) DEFAULT NULL,
  modified_at datetime(6) DEFAULT NULL,
  display_name varchar(50) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  user_status varchar(20) NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE KEY UK_6dotkott2kjsp8vw4d0m25fb7 (email)
 ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--! 유저 권한 테이블 !--
DROP TABLE IF EXISTS users_roles;

CREATE TABLE users_roles (
 users_user_id bigint NOT NULL,
 roles varchar(255) DEFAULT NULL,
 KEY FKmaps3ffbyjaxkt50q1c7s7v5j (users_user_id),
 CONSTRAINT FKmaps3ffbyjaxkt50q1c7s7v5j FOREIGN KEY (users_user_id) REFERENCES users (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--! 질문 테이블 !--
DROP TABLE IF EXISTS question;

CREATE TABLE question (
 question_id bigint NOT NULL AUTO_INCREMENT,
 created_at datetime(6) DEFAULT NULL,
 modified_at datetime(6) DEFAULT NULL,
 chosen_answer_id bigint DEFAULT NULL,
 content text NOT NULL,
 title varchar(255) NOT NULL,
 views int NOT NULL,
 votes int NOT NULL,
 user_id bigint DEFAULT NULL,
 PRIMARY KEY (question_id),
 KEY FK7rnpup7eaonh2ubt922ormoij (user_id),
 CONSTRAINT FK7rnpup7eaonh2ubt922ormoij FOREIGN KEY (user_id) REFERENCES users (user_id)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



--! 질문 추천 테이블 !--
DROP TABLE IF EXISTS question_vote;

CREATE TABLE question_vote (
 question_vote_id bigint NOT NULL AUTO_INCREMENT,
 created_at datetime(6) DEFAULT NULL,
 modified_at datetime(6) DEFAULT NULL,
 status varchar(20) NOT NULL,
 question_id bigint DEFAULT NULL,
 user_id bigint DEFAULT NULL,
 PRIMARY KEY (question_vote_id),
 KEY FKast4xiggbs08xfqm2oltcl32l (question_id),
 KEY FKrxi4oalhvebx8b3drvgthnaxt (user_id),
 CONSTRAINT FKast4xiggbs08xfqm2oltcl32l FOREIGN KEY (question_id) REFERENCES question (question_id),
 CONSTRAINT FKrxi4oalhvebx8b3drvgthnaxt FOREIGN KEY (user_id) REFERENCES users (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--! 답변 테이블 !--
DROP TABLE IF EXISTS answer;

CREATE TABLE answer (
 answer_id bigint NOT NULL AUTO_INCREMENT,
 created_at datetime(6) DEFAULT NULL,
 modified_at datetime(6) DEFAULT NULL,
 content text NOT NULL,
 status varchar(20) NOT NULL,
 question_id bigint DEFAULT NULL,
 user_id bigint DEFAULT NULL,
 PRIMARY KEY (answer_id),
 KEY FK8frr4bcabmmeyyu60qt7iiblo (question_id),
 KEY FKsdj8jab9t00diflkysw22k7bv (user_id),
 CONSTRAINT FK8frr4bcabmmeyyu60qt7iiblo FOREIGN KEY (question_id) REFERENCES question (question_id),
 CONSTRAINT FKsdj8jab9t00diflkysw22k7bv FOREIGN KEY (user_id) REFERENCES users (user_id)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--! 답변 추천 테이블 !--
DROP TABLE IF EXISTS answer_vote;

CREATE TABLE answer_vote (
 answer_vote_id bigint NOT NULL AUTO_INCREMENT,
 created_at datetime(6) DEFAULT NULL,
 modified_at datetime(6) DEFAULT NULL,
 status varchar(20) NOT NULL,
 answer_id bigint DEFAULT NULL,
 user_id bigint DEFAULT NULL,
 PRIMARY KEY (answer_vote_id),
 KEY FKp422lmglrcvet69832dmygyx8 (answer_id),
 KEY FKpmlk6k42xitun8poewejccgy5 (user_id),
 CONSTRAINT FKp422lmglrcvet69832dmygyx8 FOREIGN KEY (answer_id) REFERENCES answer (answer_id),
 CONSTRAINT FKpmlk6k42xitun8poewejccgy5 FOREIGN KEY (user_id) REFERENCES users (user_id)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--! 댓글 테이블 !--

DROP TABLE IF EXISTS comment;

CREATE TABLE comment (
  comment_id bigint NOT NULL AUTO_INCREMENT,
  created_at datetime(6) DEFAULT NULL,
  modified_at datetime(6) DEFAULT NULL,
  content text NOT NULL,
  status varchar(20) NOT NULL,
  answer_id bigint DEFAULT NULL,
  user_id bigint DEFAULT NULL,
  PRIMARY KEY (comment_id),
  KEY FKdqc83j2n6hemidegfkim17d3l (answer_id),
  KEY FKqm52p1v3o13hy268he0wcngr5 (user_id),
  CONSTRAINT FKdqc83j2n6hemidegfkim17d3l FOREIGN KEY (answer_id) REFERENCES answer (answer_id),
  CONSTRAINT FKqm52p1v3o13hy268he0wcngr5 FOREIGN KEY (user_id) REFERENCES users (user_id)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

