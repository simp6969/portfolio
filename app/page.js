"use client";

import { Page3 } from "@/components/Page3";
import { AboutMePage } from "@/components/Page2";
import { Header } from "@/components/Header";
import { Page4 } from "@/components/Page4";
import { Intro } from "@/components/IntroPage";

export default function App() {
  return (
    <div>
      <Header />
      <Intro />
      <AboutMePage />
      <Page3 />
      <Page4 />
    </div>
  );
}
