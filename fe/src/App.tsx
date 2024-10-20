import JobList from "./components/JobList";

function App() {
  return (
    <>
      <div className=" bg-background h-[100vh]">
        <div className="w-[1440px] mx-auto">
          <div className="flex flex-col w-[30%] overflow-auto">
            <JobList />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
