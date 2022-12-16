import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
type BoxProps = {
  children: React.ReactNode; 
};

export default  function Layout(props: BoxProps) {
    return (
      <div className=" w-screen h-screen flex flex-col items-stretch">
        
        <nav className="hidden w-full md:block md:w-auto bg-gray-50" id="navbar-default" >
          <div className="container flex flex-wrap items-center p-6 justify-between mx-auto">
          <span className="font-semibold text-xl tracking-tight">GameDev</span>
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About Me</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"/skillsandknowleges"}>Skills and Knowleges</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
          
          </div>
        </nav>
        {props.children}
        <Outlet />

      </div>
    );
  }


  