# 서버 애플리케이션 실행 jar 파일입니다 (By BE 조성호)

## 1. 실행방법
터미널에서 jar 폴더로 이동 후 다음 라인 실행

    java -jar pre031-0.0.1-SNAPSHOT.jar

종료 시엔 터미널에서 **ctrl + c**

## 2. 접근 URL
로컬호스트의 8080 포트
    
    http://localhost:8080/

## 3. 실행이 안 될 때

### 1. JVM 설치 및 버전 확인

    자바 버전 11, zulu jdk(jre) 권장

## 4. H2 데이터베이스 접근방법

### 1. 서버 애플리케이션 실행
### 2. H2 콘솔 접근
    http://localhost:8080/h2/
### 3. Saved Settings - Generic H2 (Embedded) 선택
### 4. 다음 입력
    JDBC URL: jdbc:h2:mem:test
    User Name: sa
### 5. Connect 클릭

## 5. 안 되면 슬랙으로 연락주세용
