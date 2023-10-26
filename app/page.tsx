import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Career from "./components/Career";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <About />
        <Services />
        <Career />
        <Gallery />
        <Contacts />
      </main>
    </>
  );
}
