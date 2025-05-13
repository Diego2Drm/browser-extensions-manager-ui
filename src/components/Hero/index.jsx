import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.svg"
import IconMoon from "../../assets/images/icon-moon.svg"
import IconSun from "../../assets/images/icon-sun.svg"
import { LogoLight } from "./LogoLight";
import { Logodark } from "./LogoDark";

const Hero = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme == 'light' ? 'dark' : 'light')
  }

  return (
    <section className="bg-Neutral-0 flex justify-between items-center p-4 rounded-lg shadow-md dark:bg-Neutral-700">
      {
        theme === 'light' ?
          <LogoLight /> :
          <Logodark />
      }
      <button className="bg-Neutral-100 w-10 h-10 rounded-lg flex justify-center items-center hover:bg-Neutral-300 duration-300 ease-in-out cursor-pointer focus:border-Red-500 focus:border-2 
      dark:bg-Neutral-800 dark:hover:bg-Neutral-600"
        onClick={handleChangeTheme}
      >
        {
          theme === 'light' ?
            <img src={IconMoon} alt="icon-moon" /> :
            <img src={IconSun} alt="icon-sun" />
        }
      </button>

    </section>
  )
};

export { Hero };