import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
function App() {
  return (
    <div>
          <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}



function Home() {
  return (
    <div className="space-x-8 flex flex-col  items-center justify-center bg-slate-700 p-0 h-screen ">
    <h1 className="text-6xl p-10  text-yellow-500" >Nothing to see here!</h1>

    <p>
      <Link to="/">Working in progress</Link>
    </p>
  </div>
  );
}

function About() {
  return (
    <div className="bg-co">
         <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div className=" flex flex-wrap items-center justify-center bg-slate-700 w-screen h-screen">
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App;