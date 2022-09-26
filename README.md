# create-next-app

next.js typescript 프로젝트 생성

```
> npx create-next-app <폴더명> --typescript
```

# tailwind CSS 적용

<h2>1. tailwind CSS install</h2>

참고 : [tailwind 설치](https://tailwindcss.com/docs/guides/nextjs)

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

# prisma

DataBase ORM 이다.

1. VSCODE 에서 `Prisma` 확장프로그램 설치

2. `prisma` 패키지 설치

```
> npm i prisma -D
> npx prisma init
```

init steps: 해석

프리즈마 폴더안에 스키마.프리즈마 생성완료.

```
개인정보 유출방지를 위해 `.gitignore` 파일에 `.env` 문구 추가
```

NEXT STEPS

1. 데이터베이스 URL을 `.env` 안에 추가
2. `schema.prisma` 안의 `provider` 를 내가 쓰는 db이름으로 변경 :

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb" //여기 데이터베이스 이름 변경
  url      = env("DATABASE_URL")
}
```

3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

원문

```
✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
```

데이터 베이스 생성

스키마.프리즈마 파일에

```
model User {
  id       String   @id @default(auto()) @map("_id") @db.ObjectId
  name     String
  age      Int
  addr     String
  favFood  String?  @default("없음")
  createAt DateTime @default(now())
  updateAt DateTime @updatedAt
}
```

작성후 db 업로드

```
> npx prisma db push
```

웹클라이언트 실행

```
> npx prisma studio
```

DB에 데이터 추가
client.user.create() 함수를 이용하여 추가
클라이언트 환경에서 (X)
서버 환경에서 해야함으로 API를 이용 (pages/api/addUser.ts 참고)

패치(데이터 불러오기)

```
fetch("/api/allUser")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
```
