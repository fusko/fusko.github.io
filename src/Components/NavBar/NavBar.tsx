import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";


export default function Layout() {
    return (
      <div className=" w-screen h-screen flex flex-col items-stretch">
        
        <nav className="hidden w-full md:block md:w-auto" id="navbar-default" >
          <div className="container flex flex-wrap items-center justify-between mx-auto">
          <h3>GameDev</h3>
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">Skills and Knowleges</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          
          </div>
        </nav>
        <Outlet />

      </div>
    );
  }