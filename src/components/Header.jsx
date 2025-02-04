'use client';
// import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Navbar, TextInput } from 'flowbite-react';
import { AiOutlineSearch } from "react-icons/ai";
// import { FaMoon, FaSun } from 'react-icons/fa';
import { useLocation } from "react-router-dom";
import { assets } from "../Assets/assets";






export default function Header() {
   const path = useLocation().pathname;
    

    return (
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Edi_Mars
          </span>
        </Link>
        <Link
          to="/blog"
          className="ml-[3%] hover:text-blue-500 text-pink-700 text-xl font-semibold"
        >
          Blog
        </Link>
        <form className="ml-48">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline text-slate-500 font-semibold"
          />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10 hidden sm:inline"
            color="gray"
            pill
          ></Button>
          <Link
            to="/cart"
            className="flex items-center text-slate-600 cursor-pointer"
          >
            <img src={assets.cart_icon} className="w-6 flex items-center text-slate-800 hover:text-blue-700" alt="" />
          </Link>
          <Link to="/login">
            <Button
              gradientDuoTone="purpleToBlue"
              outline
              className="font-semibold text-fuchsia-800 hover:text-white"
            >
              Sign In
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/">
            <Navbar.Link
              active={path === "/"}
              as={"div"}
              className="text-lg font-semibold hover:text-fuchsia-500"
            >
              Home
            </Navbar.Link>
          </Link>
          <div className="group relative">
            <img
              src={assets.profile_icon}
              className="w-6 cursor-pointer"
              alt=""
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-gray-500 rounded">
                <Link to="/about">
                  <Navbar.Link
                    active={path === "/about"}
                    as={"div"}
                    className="text-lg font-semibold text-fuchsia-500"
                  >
                    About
                  </Navbar.Link>
                </Link>
                <Link to="/projects">
                  <Navbar.Link
                    active={path === "/projects"}
                    as={"div"}
                    className="text-lg font-semibold text-fuchsia-500"
                  >
                    Projects
                  </Navbar.Link>
                </Link>
                <Link to="/task">
                  <Navbar.Link
                    active={path === "/task"} as={"div"}
                    className="text-lg font-semibold text-fuchsia500"
                  >
                    Task
                  </Navbar.Link>
                </Link>

                <Link to="/contact">
                  <Navbar.Link
                    active={path === "/contact"}
                    as={"div"}
                    className="text-lg font-semibold text-fuchsia-500"
                  >
                    Contact
                  </Navbar.Link>
                </Link>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
}