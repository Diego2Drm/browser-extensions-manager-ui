import React from "react";
import Logo from "../../assets/images/logo.svg"
import IconMoon from "../../assets/images/icon-moon.svg"

const Hero = () => {
  return (
    <section className="bg-Neutral-0 flex justify-between items-center p-4 rounded-lg shadow-md">
      <img src={Logo} alt="logo" />
      <div className="bg-Neutral-100 w-10 h-10 rounded-lg flex justify-center items-center">
        <img src={IconMoon} alt="icon-sun" />
      </div>

    </section>
  )
};

export { Hero };