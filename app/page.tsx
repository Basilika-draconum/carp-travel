"use client";
import dynamic from "next/dynamic";
const About = dynamic(() => import("./sections/About/About"));
const Services = dynamic(() => import("./sections/Services/Services"));
const Career = dynamic(() => import("./sections/Career/Career"));
const Gallery = dynamic(() => import("./sections/Gallery/Gallery"));
const Contacts = dynamic(() => import("./sections/Contacts/Contacts"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contacts />
    </main>
  );
}
