import React from "react";
import { ListButtons } from "./ListButtons";
import { Cards } from "./Cards";


const Extensions = () => {
  return (
    <section>
      <div className="flex flex-col items-center mt-8 lg:flex-row lg:justify-between">
        <h1 className="text-3xl text-Neutral-900 font-bold font-sans tracking-wide mb-4 lg:w-full">Extensions List</h1>

        <ListButtons />
      </div>
      <Cards />

    </section>
  )
}

export { Extensions };