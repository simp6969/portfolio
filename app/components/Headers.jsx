"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function HeadersDefault({ className }) {
  const [pageState, setPageState] = useState({
    expandAboutPage: false,
    expandProjectsPage: false,
  });
  const router = useRouter();
  useEffect(() => {
    if (pageState.expandAboutPage) {
      router.push("/about");
    }
    if (pageState.expandProjectsPage) {
      setTimeout(() => {
        router.push("/projects");
      }, 800);
    }
  }, [pageState]);

  return (
    <div className={"header h-[30px] " + className}>
      <div
        onClick={() => router.push("/")}
        className="w-[50%] poppins-bold text-[18px]"
        title="that's me"
      >
        Bold Ariunbold
      </div>
      <div className="w-[50%] flex text-[18px] align-end gap-[30px] justify-end mr-[120px]">
        <div
          onClick={() => setPageState({ ...pageState, expandAboutPage: true })}
          className="headerButton"
        >
          About
        </div>
        <div
          onClick={() =>
            setPageState({ ...pageState, expandProjectsPage: true })
          }
          className="headerButton"
        >
          Projects
        </div>
        <div
          onClick={() => setPageState({ ...pageState, expandAboutPage: true })}
          className="headerButton"
        >
          Contact
        </div>
      </div>
    </div>
  );
}
