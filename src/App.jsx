import { Followers } from "./components/followers/Followers";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="font-inter px-5 pt-7 md:h-screen dark:bg-lm_darkBlue">
        <div className="max-w-[1100px] mx-auto">
          <Navbar />
          <Followers />
        </div>
      </div>
    </>
  );
}

export default App;
