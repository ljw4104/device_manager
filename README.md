# create-next-app

next.js typescript 프로젝트 생성

```
> npx create-next-app <폴더명> --typescript
```

# tailwind CSS 적용

<h2>1. tailwind CSS install</h2>

[tailwind 설치](https://tailwindcss.com/docs/guides/nextjs)

```
> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p
```

npm : 패키지 설치

npx : 패키지 실행

패키지.제이슨 파일에 설치 확인

<h2>2. tailwind.config.js 파일에 설정</h2>

```
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
```

<h2>3. 최상위 CSS에 적용</h2>

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
