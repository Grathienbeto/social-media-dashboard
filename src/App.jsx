import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="px-5 pt-7 h-screen dark:bg-lm_darkBlue">
        <div className="max-w-[1200px] mx-auto">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
