
# 쇼핑몰 웹사이트 (Commerce Webpage) (진행중)
## 목적
포트폴리오 목적으로 제작된 쇼핑몰 웹사이트 프로젝트입니다.
프론트엔드 부분은 ReactJs 중심으로 제작되었으며, 백엔드 부분은 Commerce.js의 API를 활용하여 구축하였습니다.

그 외에 디자인적인 부분들은 CSS와 Material UI 를 활용하였으며, 아이템의 수량과 품목관리 및 장바구니 기능은 Redux와 Commerce.js의 API를 사용하여 상태관리를 하였습니다.
또한 결제 시스템은 stripe을 사용하였으며, 최종 결제는 Commerce.js와 stripe의 연동으로 이루어져 개발했습니다.

React-router-dom을 활용하여 SPA의 구조 형태로 웹사이트를 제작하였으며 간단한 반응형 웹 디자인을 적용하였습니다.

:heavy_check_mark:**기능**
1. 사용하기 편리하도록 직관성이 좋은 UI 구축
2. 아이템 선택 후 장바구니 담기 및 제거 기능 

:calendar: **기간** :
09.29 ~ 

:runner: **개발인원** :
1 명

:paperclip: **페이지 구성 (flow chart)** 

<img src="https://user-images.githubusercontent.com/56250064/136156422-71c66351-2cb2-45de-bdae-dfa2e0087dbc.png" witdh="500" height="300">


:page_facing_up: **gh-pages** (예정) : 


## 개발 도구 및 환경
- Visual Studio Code

:wrench:**사용기술**
1. ReactJs
2. CSS
3. Javascript
4. Redux
5. Material-UI
6. commerce.js (for backend)
<hr/>

*etc* 
- react-router-dom
- react-reveal (for animations)

## 상세 페이지 
### - 메인 페이지
![MainPage](https://user-images.githubusercontent.com/56250064/136158307-eaa41af4-287b-4ec8-a099-a03893bfd624.png)

### - About Page
![About](https://user-images.githubusercontent.com/56250064/136158630-9d082efd-bede-437d-b5ce-2daa4fe4e050.png)

### - Store Page
![Store](https://user-images.githubusercontent.com/56250064/136158983-82d14236-b394-407a-a3c0-7859c3739661.png)

## 시연 영상
![Search](https://user-images.githubusercontent.com/56250064/136161233-3a6792f8-1aa5-4587-8252-750bf95ad8fb.gif)

## :bulb: 향후 추가 계획

1. 반응형 웹 페이지 보완 필요
- Navigation Bar 및 아이템 목록 개수 표시만 완료.
2. 로그 인/아웃 기능 추가
- MongoDB 와 Mongoose를 사용하여 구축해볼 예정.
3. 결제 기능 --- 완료 :heavy_check_mark:
- Commerce.js 에 내장된 API를 활용해볼 예정.
4. Project 페이지 --- 완료 :heavy_check_mark:


### 3. 결제 기능 상세
![payment](https://user-images.githubusercontent.com/56250064/136744637-e49df9e2-8df4-415d-9a22-607f77d6432e.gif)

#### 상세 설명

- 결제 폼 및 버튼은 **Material-UI** 를 사용하여 디자인 하였습니다.
- 결제 절차 및 폼 입력 관리는 리액트 훅의 **useForm** 과 **useState** 를 사용하여 구축하였습니다.
-  최종 결제는 두 가지 방법 중 두번 째 방법을 선택하였으며, 결제 완료 후 장바구니 아이템은 초기화 되게 됩니다.
1. Commerce.js 의 Payment gateway에 stripe을 등록하고 연동하여 최종 결제 하는 방법 ( payment gateway에 카드 등록 아직 안함)
2. 입력된 사용자 배송 정보를 사용하면서 단순한 결제 완료 목업 페이지를 보여주는 방법 - :heavy_check_mark:

### 4. 프로젝트 페이지 상세
![project](https://user-images.githubusercontent.com/56250064/136909678-09875a73-f71f-4bbf-88d0-48563fdd6e4e.gif)

#### 상세설명
- Navbar에 효과를 추가함으로써 보다 역동적인 애니매이션 효과를 주었습니다.
> 모든 페이지에 공통으로 추가하였음.
- **react-reveal** 라이브러리를 사용하여 이미지에 효과를 주었습니다.
