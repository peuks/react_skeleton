import React from "react"; // import { Section1, Section2 } from "./Sections";
import { logoBookmark } from "../../assets/img";
import { Button, Burger } from "../../components/ui/";
import { SectionHero } from "./Sections";

const Home = () => {
  return (
    // Header
    <>
      <header>
        <nav className="container flex justify-between items-center py-4 mt-4 sm:mt-12">
          <div className="py-1">
            <img src={logoBookmark} alt="" />
          </div>
          <ul className="hidden gap-12 justify-end items-center text-xs uppercase sm:flex text-bookmark-blue">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <Button type="nav">Login</Button>
          </ul>
          <div className="flex sm:hidden">
            <Burger />
          </div>
        </nav>
      </header>
      <SectionHero />
    </>
  );
};
export default Home;
