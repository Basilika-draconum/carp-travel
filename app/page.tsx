import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Career from "./components/Career/Career";
import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Contacts/Contacts";

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
