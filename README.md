# 와이라노사우르스

## 프로젝트 진행 기간 📅

2023.08.21 ~ 2023.10.06



## 프로젝트 소개  :computer:

공룡을 좋아하는 아이들을 위해 공룡 정보를 제공해주고, 공룡 박람회인 고성공룡엑스포 소개 및 공룡엑스포의 접근성을 높이기 위한 고성 관광정보를 제공해주는 웹 서비스



## 팀원 👥

| **Name**     | 최연재👑   | 곽보선      | 김예슬      | 박슬빈     | 손민영      | 신종혁      |
|:------------:|:-------:|:--------:|:--------:|:-------:|:--------:|:--------:|
| **Position** | BackEnd | FrontEnd | FrontEnd | BackEnd | FrontEnd | FrontEnd |

## ERD 🖇️

## 아키텍처🧱

![systemarchitecture](/uploads/f4f30fac0e2dc0845601af00bea6fd20/systemarchitecture.png)

## 기술스택 🛠️

### 사용한 기술 스택 🔨

| React(v18.2.0) | TypeScript(v5.1.6) | Node(v16.20.1) | styled-component(v6.0.8) | zustand(v4.4.1)                    |
|:--------------:|:------------------:|:--------------:|:------------------------:|:----------------------------------:|
| ![react]       | ![ts]              | ![node]        | ![sc]                    | ![zustand](/images/stack/bear.jpg) |

| Spring Boot(v3.1.1) | MySQL(v8.1) | Elastic search(v) |
|:-------------------:|:-----------:|:-----------------:|
| ![spring]           | ![mysql]    | ![elastic]        |

<br />

### 개발 환경 💻

| Eslint(v8.0.1) | Prettier(v3.0.3) |
|:--------------:|:----------------:|
| ![eslint]      | ![prettier]      |

[react]: /images/stack/react.svg
[node]: /images/stack/node.svg
[ts]: /images/stack/typescript.svg
[eslint]: /images/stack/eslint.svg
[prettier]: /images/stack/prettier-color.svg
[sc]: /images/stack/styledcomponents-color.svg
[spring]: /images/stack/springboot-color.svg
[mysql]: /images/stack/mysql-color.svg
[elastic]: /images/stack/elasticsearch-color.svg

## 시연 시나리오 📑

### 🦕 와이라노사우르스
<br />
<b>공룡 이론 페이지</b>
![dinosaur](/uploads/eafa3a35f20ce5871ae103ce84573fea/dinosaur.png)
![dinosaur_location](/uploads/4128278207343754338b5f0a0f3ddd0d/dinosaur_location.png)
![dinosaur_detail](/uploads/46c9bedda571f82be813fbaef56460c3/dinosaur_detail.png)

- 공룡 상세 정보 보여주기
- 공룡 위치별 분포도 보여주기
- 공룡 검색 기능 구현

![korea_dinosaur](/uploads/356c7032c90b70c63ad9a821e95eb0d5/korea_dinosaur.png)
![koread_dino_detail](/uploads/d04cb981784802083d32e7b199090a95/koread_dino_detail.png)

- 한국의 공룡 정보 보여주기
- CLOVA api를 이용한 `TTS` 도입 ( 재생 버튼 누르면 사운드 재생)
<br />
<b>고성 페이지</b>
고성 메인 페이지
![expo](/uploads/6a2e99d3c691de398c6e6008ff1151e7/expo.png)

- 고성 공룡엑스포에 대한 기본 정보 제공
- css animation을 통해 `동적인 페이지` 제공

![course](/uploads/1b3636a4b8d77576e83d1192dbd0f296/course.png)
- 엑스포 내 `추천 코스 표시`
- `현재 위치`를 제공해, 종이 지도로 길찾기의 불편함을 해소

![convenient](/uploads/4b97b4990e35ee09587f2ec554a6c9b1/convenient.png)
- 엑스포 내 `편의시설 위치 제공`

![gosung](/uploads/03e4b63517f9a8a5c03b09269301a5b4/gosung.png)
- 고성 공룡엑스포 방문객을 위한 `고성 맛집`, `숙박`, `여행지` 추천
- 카테고리에 따른 다른 마커 제공
- 각 장소 별 상세정보 제공

<b>모바일 페이지</b>
<br />
고성 페이지는 반응형으로 별도 제작
<br />
![expo_mobile](/uploads/c37ba3924cc4cb9bc146f64d2013cee9/expo_mobile.png)
<br />
- 엑스포 모바일 페이지
<br />
![gosung_mobile](/uploads/d97e66e8c5348eff6ea8b58cd21ef9ca/gosung_mobile.png)
<br />
- 고성 모바일 페이지






### 👨🏻‍💼 관리자 페이지
