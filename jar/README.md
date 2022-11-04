# ✨ 서버 애플리케이션 실행 안내 ✨
🔥 By BE 조성호, 가빈, 손경은 🔥

🌼 해당 안내는 포스트맨 작업을 기준으로 작성되었습니다.🌼

---
## 1. 빌드 및 실행방법

#### 1️⃣ 터미널에서 server 폴더로 이동
``` bash
cd ~/seb4_pre_031/server
```
- 프로젝트가 저장되어 있는 폴더에서, 서버 폴더로 들어와주세요.


#### 2️⃣ 다음 라인 입력하여 빌드
``` bash
./gradlew build
```
- 해당 코드릅 입력하면 빌드가 이루어집니다.
- 그러면 jar 파일이 생성됩니다.

#### 3️⃣ 빌드 실패 시 백엔드 측에 문의
- 만일 실패한다면 슬랙으로 연락주세요.

#### 4️⃣ 빌드 성공 시 server 안의 build/libs 폴더로 이동
``` bash
cd ~/seb4_pre_031/server/build/libs
```

#### 5️⃣ 다음 라인 입력하여 jar 실행 

❗️ 명령어 추가되었습니다! 꼭 확인해 주세요. ❗️
``` bash
java -jar pre031-0.0.1-SNAPSHOT.jar --spring.profiles.active=dev 
```
- 설명 : 추가된 명령어는 어떠한 환경설정으로 jar 파일을 실행할지 지정해주는 것입니다. 현재는 개발 중이므로 dev로 설정하였습니다.
- 해당 설정 안에서는 각 테이블 당 10개의 더미데이터가 추가되었습니다.

#### 6️⃣ 종료 시엔 터미널에서 **ctrl + c**

---
#### 🚨 이미 포트가 사용 중이라고 뜨는 경우

❗️ 아래 안내는 강제 종료를 도와주는 코드입니다.❗️

1️⃣ 아래의 코드로 8080 포트가 사용 중인지 확인합니다.
``` bash
lsof -i: 8080
```
```
COMMAND    PID   USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
Google    1190   이름   21u  IPv6 0xbe8287f8b571c445      0t0  TCP localhost:50765->localhost:http-alt (CLOSE_WAIT)
Google    1190   이름   29u  IPv6 0xbe8287f8b571b645      0t0  TCP localhost:50766->localhost:http-alt (CLOSE_WAIT)
Google    1190   이름   70u  IPv6 0xbe8287f8b5705a45      0t0  TCP localhost:50773->localhost:http-alt (CLOSE_WAIT)
java      7383   이름   11u  IPv6 0xbe8287f8b571a845      0t0  TCP *:http-alt (LISTEN)
```
- 현재 저희가 아무 설정을 하지 않았기 때문에 8080 포트 확인
- 만약 8080 포트가 사용중이라면 위의 모습처럼 출력이 됩니다.
- 아무것도 출력되지 않는다면, 백엔드로 문의주세요!

2️⃣ 아래의 코드를 사용해서 해당 프로그램을 강제 종료합니다.
``` bash
kill -9 [PID 번호]
```
``` bash
kill -9 1190
kill -9 7383
```
- 위의 처럼 각자 출력된 피드 번호를 입력하면 됩니다.
<br/>

#### 🌼 만약, 더미 데이터 없이 작업을 원하시면 백엔드 측으로 문의해주세요.🌼
---
## 2. 접근 URL
✓ 현재 기본 포트는 8080으로 로컬에서 접근할 때에는 아래의 URL로 접근하시면 됩니다.
```
http://localhost:8080/
```
- 해당 URL에 해당 기능 엔드포인트를 입력하시면 됩니다.
- 엔드 포인트가 헷갈리면 아래를 참조해주세요.
- [포스트맨 문서](https://documenter.getpostman.com/view/22571048/2s8YKAo4oY#9d1b72f3-8a59-442d-b416-8de3825b7dfa) 
- [노션 페이지](https://www.notion.so/codestates/Docs-fb46178c2c7f4e9d83bfbfd187a4dd60)

---
## 3. 로그인 사용 안내
✓ 로그인이 필요하시다면, 아래의 안내에 따라 해주세요!

1️⃣ 로그인 URL
``` 
http://localhost:8080/signup
```
2️⃣ HttpMethod는 'POST'입니다.
3️⃣ 로그인 안내
``` json
{
    "username" : "hello[1~10 사이의 숫자]@naver.com",
    "password" : "password[1~10 사이의 숫자]!"
}
```
``` json
{
    "username" : "hello1@naver.com",
    "password" : "password1!"
}
```
- 10명의 회원이 등록되어있습니다.
- 이메일의 숫자와 비밀번호의 숫자는 동일해야합니다.
- 만일 로그인이 제대로 이뤄지지 않는다면, 슬랙으로 연락주세요.
- 해당 username과 password를 입력해주시면, 로그인이 이뤄집니다.

---

## 4. 실행이 안 될 때

#### ❗️JVM 설치 및 버전 확인❗️

1️⃣ 터미널에서 다음 라인 실행 

``` bash
java -version
```
- jvm 설치와 환경변수 설정이 되어 있다면 자바 버전이 출력


2️⃣ 버전이 없으면 설치
- 자바 버전은 11 (백엔드 파일이 11로 작업되었습니다.)
- zulu open jdk(jre) 권장   
- [여기](https://www.azul.com/downloads/?version=java-11-lts&os=windows&architecture=x86-64-bit&package=jdk#download-openjdk) 를 클릭하거나 아래 링크를 클릭
- https://www.azul.com/downloads/?version=java-11-lts&os=windows&architecture=x86-64-bit&package=jdk#download-openjdk

---
## 5. H2 데이터베이스 접근방법

1️⃣ 서버 애플리케이션 실행
- jar 파일을 실행시켜주세요!

2️⃣ H2 콘솔 접근
- [여기](http://localhost:8080/h2/) 를 클릭하거나 아래 링크 클릭
- http://localhost:8080/h2/

3️⃣ Saved Settings - Generic H2 (Embedded) 선택

4️⃣ 아래의 내용을 입력

```
JDBC URL: jdbc:h2:mem:test
User Name: sa
```
<img width="456" alt="스크린샷 2022-11-04 오후 6 03 05" src="https://user-images.githubusercontent.com/107696895/199934175-e897308d-f0b0-40e6-a153-735c52e4af9b.png">

5️⃣ Connect 클릭

6️⃣ 접속된 콘솔 화면에서 요청이 DB에 어떻게 저장되는지 확인할 수 있습니다.


<img width="1209" alt="스크린샷 2022-11-04 오후 6 10 03" src="https://user-images.githubusercontent.com/107696895/199935564-d8e3f535-5b42-407a-9434-1a6a995004fe.png">
🌼 위의 모습은 질문을 검색했을 때의 모습입니다.

---

## 6. 실행이 안 되거나 문제가 있으면 슬랙으로 연락주십셔 😃

🧡 31팀 화이팅입니다 🧡
