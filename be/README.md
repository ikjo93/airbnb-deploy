## 1주차 수요일 리뷰 요청

### 진행 내용
#### AWS 인프라 구성
+ AWS 신규 VPC 생성 및 ec2 서브넷과 db 서브넷 구성
+ RDS(MySQL) 생성 및 환경 설정(Timezone, character set 등)
+ GitHub Action 및 Docker를 통한 배포(학습 중)

#### 애플리케이션
+ 도메인 모델링 및 테이블 설계(진행 중)
  + 이와 관련 프론트 엔드 팀원들과도 논의 지속 중

#### 도메인 모델과 테이블 설계(초안)
> ```
> 객체별 연관관계
> Member : Reservation = 1 : N
> Reservation : Accommodation = 1 : 1
> Accommodation : Facility = 1 : 1
> 
> 회원(Member): 회원은 이름과 이메일 그리고 예약(reservations) 리스트를 가집니다.
> 예약(Reservation): 한 번 예약 시 여러 개의 숙박을 예약할 수는 없으므로 예약과 숙소(Accommodation)는 일대일 관계입니다. 이때 예약은 예약한 회원(member)과 기타 예약 정보를 가집니다.
> 숙소(Accommodation): 숙소 관련 정보(가격, 위치, 이미지 파일경로 등)를 가집니다. 숙소 관련 시설 정보(Facility)와 일대일 관계입니다.
> 시설(Facility): 숙소 관련 시설에 대한 정보(욕실의 개수, 인터넷 사용 가능유무 등)를 가집니다.
> ```
> ![image](https://user-images.githubusercontent.com/82401504/170213984-0840cf7b-9cdd-4f20-8687-2c3065dde66b.png)

## 2주차 금요일 리뷰 요청

### 진행 내용
#### 애플리케이션
+ 도메인 모델링 및 테이블 설계(진행 중)
  + 이와 관련 프론트 엔드 팀원들과도 논의 지속 중
+ 체크인 및 체크아웃 일자 기반 1박 가격별 숙소 개수 조회 API 기능 구현(완료)
  + Repository, Service, Controller 코드 작성 
  + JPQL 활용 데이터 조회 및 처리
  + <a href="https://near-snipe-0de.notion.site/API-Description-094e9cd17eaa4c3d89e8c9966fd6d8a5">API 명세서 확인하기(클릭)</a><br/>

#### 도메인 모델과 테이블 설계(초안)
> ```
> 객체별 연관관계
> Member : Reservation = 1 : N
> Reservation : Accommodation = 1 : 1
> Accommodation : Facility = 1 : 1
> Accommodation : Schedule = 1 : N
> 
> 회원(Member): 회원은 이름과 이메일 그리고 예약(reservations) 리스트를 가집니다.
> 예약(Reservation): 한 번 예약 시 여러 개의 숙박을 예약할 수는 없으므로 예약과 숙소(Accommodation)는 일대일 관계입니다. 이때 예약은 예약한 회원(member)과 기타 예약 정보를 가집니다.
> 숙소(Accommodation): 숙소 관련 정보(가격, 위치, 이미지 파일경로 등)를 가집니다. 숙소 관련 시설 정보(Facility)와 일대일 관계이며 일정 정보(Schedule)와 일대다 관계입니다.
> 시설(Facility): 숙소 관련 시설에 대한 정보(욕실의 개수, 인터넷 사용 가능유무 등)를 가집니다.
> 일정(Schedule): 해당 숙소별 투숙 일자와 해당 일자에 수용 가능한 인원 정보를 가집니다. 
> ``` 
> ![image](https://user-images.githubusercontent.com/82401504/170532752-c9123e86-ede3-4307-a8f9-cc0ceebf0acb.png)

## 1주차 화요일 리뷰 요청

### 진행 내용
#### 애플리케이션
+ Github Actions 및 Docker를 통한 Spring boot 웹 앱 무중단 자동 배포(완료)
  + 동일한 방법으로 React 앱 자동 배포 작업 진행 중 
+ 체크인 및 체크아웃 일자 기반 1박 가격별 숙소 개수 조회 API 기능 보완
  + 사용자 현재 위치 기준 반경 1km 내 숙소 검색 조건 추가
+ 사용자 입력 정보 기반 숙소 정보 조회 API 기능 구현(초안)
  + Repository, Service, Controller 등 코드 작성 
+ <a href="https://near-snipe-0de.notion.site/API-Description-094e9cd17eaa4c3d89e8c9966fd6d8a5">API 명세서 확인하기(클릭)</a><br/>

#### 도메인 모델과 테이블 설계(초안)
> ```
> 객체별 연관관계
> Member : Reservation = 1 : N
> Reservation : Accommodation = 1 : 1
> Accommodation : Facility = 1 : 1
> Accommodation : Schedule = 1 : N
> 
> 회원(Member): 회원은 이름과 이메일 그리고 예약(reservations) 리스트를 가집니다.
> 예약(Reservation): 한 번 예약 시 여러 개의 숙박을 예약할 수는 없으므로 예약과 숙소(Accommodation)는 일대일 관계입니다. 이때 예약은 예약한 회원(member)과 기타 예약 정보를 가집니다.
> 숙소(Accommodation): 숙소 관련 정보(가격, 위치, 이미지 파일경로 등)를 가집니다. 숙소 관련 시설 정보(Facility)와 일대일 관계이며 일정 정보(Schedule)와 일대다 관계입니다.
> 시설(Facility): 숙소 관련 시설에 대한 정보(욕실의 개수, 인터넷 사용 가능유무 등)를 가집니다.
> 일정(Schedule): 해당 숙소별 투숙 일자와 해당 일자에 수용 가능한 인원 정보를 가집니다. 
> ``` 
> ![img_1.png](img_1.png)
