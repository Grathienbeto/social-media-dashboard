import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="px-5 pt-7 md:flex md:items-center md:justify-center">
        <div className="max-width-[34rem]">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
