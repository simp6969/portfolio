"use client";

import dynamic from 'next/dynamic';
import { Header } from "@/components/Header";
import { Intro } from "@/components/IntroPage";

const AboutMePage = dynamic(() => import('@/components/AboutMe').then(mod => mod.AboutMePage));
const ProjectShowcase = dynamic(() => import('@/components/projectShowcase').then(mod => mod.ProjectShowcase));
const CreativeEngineering = dynamic(() => import('@/components/CreativeEngineering').then(mod => mod.CreativeEngineering));
const ContactList = dynamic(() => import('@/components/ContactList').then(mod => mod.ContactList));

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Intro />
      <AboutMePage />
      <ProjectShowcase />
      <CreativeEngineering />
      <ContactList />
    </main>
  );
}
