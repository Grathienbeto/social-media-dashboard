import { Followers } from "./components/followers/Followers";
import { Navbar } from "./components/navbar/Navbar";
import { Overview } from "./components/overview/Overview";

function App() {
  return (
    <>
      <div className="font-inter p-7 lg:pt-10 md:h-screen dark:bg-dm_darkBlue relative">
        <div className="max-w-[1150px] mx-auto">
          <div className="md:absolute left-0 top-0 md:h-[30vh] w-full -z-10 bg-lm_paleBlue bgdark:bg-dm_darkBlueBg"></div>
          <Navbar />
          <Followers />
          <Overview />
        </div>
      </div>
    </>
  );
}

export default App;
