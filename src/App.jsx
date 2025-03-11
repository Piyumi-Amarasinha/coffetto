import Navbar from "./sections/Navbar";
import Section01 from "./sections/Section01";
import Section02 from "./sections/Section02";
import Section03 from "./sections/Section03";
import Section04 from "./sections/Section04";
import Section05 from "./sections/Section05";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selectiom:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(125, 182, 228, 0.94)_100%)]"></div>
      </div>
      <div className="container mx-auto ">
        <Navbar />
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
      </div>
    </div>
  );
};

export default App;
