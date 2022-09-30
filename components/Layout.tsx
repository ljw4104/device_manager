import Link from "next/link";
import { useRouter } from "next/router";
import { useReducer, useState } from "react";
import { cls } from "../libs/client/utils";

interface layoutProps {
  title: string;
  children?: React.ReactNode;
}

export default function Counter(props: layoutProps) {
  function darkMode() {
    document.body.classList.toggle("dark");
    //.classList.toggle("문자열") 토글시 "문자열" 클래스 추가 있다면 삭제
  }

  const router = useRouter();

  return (
    <div className="flex justify-center">
      <div className="dark:bg-[#1E1E20] dark:text-white bg-[#E8F9FE] flex flex-col justify-between  border-blue-400 w-[640px] h-[100vh] p-0">
        <header className="dark:border-b-2 relative flex justify-center items-center h-[100px] shadow-md ">
          <h1 className="text-4xl font-bold font-serif">{props.title}</h1>
          {/* 다크모드버튼 */}
          <div
            onClick={darkMode}
            className="absolute right-8 cursor-pointer dark:hover:bg-[#0a7c4f] hover:bg-[#48b0ff] hover:text-white rounded-[50%] p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
        </header>
        <div className="h-[80vh]">{props.children}</div>
        <footer className="dark:border-t-2 h-[100px] shadow-md border-t-2 border-[#72BFF9] dark:border-[#2CDD96]">
          <nav className="flex justify-between h-full">
            <Link href={"/"}>
              <div
                className={cls(
                  " cursor-pointer dark:hover:bg-[#0a7c4f] hover:bg-[#48b0ff] hover:text-slate-100 w-full flex items-center justify-center ",
                  router.pathname === "/"
                    ? "bg-[#72BFF9] dark:bg-[#2CDD96]"
                    : " "
                )}
              >
                <div>
                  <div className=" flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  <div className="font-bold text-lg">HOME</div>
                </div>
              </div>
            </Link>
            <Link href={"/data"}>
              <div
                className={cls(
                  " cursor-pointer hover:bg-[#48b0ff] dark:hover:bg-[#0a7c4f] hover:text-slate-100 w-full flex items-center justify-center ",
                  router.pathname === "/data"
                    ? "bg-[#72BFF9] dark:bg-[#2CDD96]"
                    : " "
                )}
              >
                <div>
                  <div className=" flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg>
                  </div>
                  <div className="font-bold text-lg">DATA</div>
                </div>
              </div>
            </Link>
            <Link href={"/setting"}>
              <div
                className={cls(
                  " cursor-pointer hover:bg-[#48b0ff] dark:hover:bg-[#0a7c4f] hover:text-slate-100 w-full flex items-center justify-center ",
                  router.pathname === "/setting"
                    ? "bg-[#72BFF9] dark:bg-[#2CDD96]"
                    : " "
                )}
              >
                <div>
                  <div className=" flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="font-bold text-lg">SETTING</div>
                </div>
              </div>
            </Link>
            <Link href={"/chungnam"}>
              <div
                className={cls(
                  " cursor-pointer hover:bg-[#48b0ff] dark:hover:bg-[#0a7c4f] hover:text-slate-100 w-full flex items-center justify-center ",
                  router.pathname === "/setting"
                    ? "bg-[#72BFF9] dark:bg-[#2CDD96]"
                    : " "
                )}
              >
                <div>
                  <div className="text-3xl flex justify-center items-center">
                    🐱‍🏍
                  </div>
                  <div className="font-bold text-lg">충남</div>
                </div>
              </div>
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
