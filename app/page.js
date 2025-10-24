"use client";

import { ProjectShowcase } from "@/components/projectShowcase";
import { AboutMePage } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { ContactList } from "@/components/ContactList";
import { Intro } from "@/components/IntroPage";
import { CreativeEngineering } from "@/components/CreativeEngineering";

export default function App() {
  return (
    <div>
      <Header />
      <Intro />
      <AboutMePage />
      <ProjectShowcase />
      <CreativeEngineering />
      <ContactList />
    </div>
  );
}
