import React from "react";
import Logo from "../../assets/images/logo.svg"
import IconMoon from "../../assets/images/icon-moon.svg"

const Hero = () => {
  return (
    <section className="bg-Neutral-0 flex justify-between items-center p-4 rounded-lg shadow-md">
      <img src={Logo} alt="logo" />
      <button className="bg-Neutral-100 w-10 h-10 rounded-lg flex justify-center items-center hover:bg-Neutral-300 duration-300 ease-in-out cursor-pointer focus:border-Red-500 focus:border-2">
        <img src={IconMoon} alt="icon-sun" />
      </button>

    </section>
  )
};

export { Hero };