# 서버 애플리케이션 실행 jar 파일입니다 (By BE 조성호)

## 1. 실행방법

터미널에서 jar 폴더로 이동 후 다음 라인 실행

```
java -jar pre031-0.0.1-SNAPSHOT.jar
```

종료 시엔 터미널에서 **ctrl + c**

## 2. 접근 URL
로컬호스트의 8080 포트
    
    http://localhost:8080/

## 3. 실행이 안 될 때

### 1. JVM 설치 및 버전 확인

1. 터미널에서 다음 라인 실행 

    ``` 
    java -version
    ```

    jvm 설치와 환경변수 설정이 되어 있다면 자바 버전이 출력
    
2. 자바 버전은 11, zulu open jdk(jre) 권장
    
    https://www.azul.com/downloads/?version=java-11-lts&os=windows&architecture=x86-64-bit&package=jdk#download-openjdk

## 4. H2 데이터베이스 접근방법

1. 서버 애플리케이션 실행
2. H2 콘솔 접근
    http://localhost:8080/h2/
3. Saved Settings - Generic H2 (Embedded) 선택
4. 다음 입력

```
JDBC URL: jdbc:h2:mem:test
User Name: sa
```

5. Connect 클릭
6. 접속된 콘솔 화면에서 요청이 DB에 어떻게 저장되는지 확인할 수 있습니다.

## 5. 실행이 안 되거나 문제가 있으면 슬랙으로 연락주십셔
