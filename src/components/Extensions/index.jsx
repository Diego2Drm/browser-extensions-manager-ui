import React from "react";
import { ListButtons } from "./ListButtons";
import { Cards } from "./Cards";


const Extensions = () => {
  return (
    <section className="flex flex-col items-center mt-8">
      <h1 className="text-3xl text-Neutral-900 font-bold font-sans tracking-wide mb-4">Extensions List</h1>

      <ListButtons />
      <Cards />

    </section>
  )
}

export { Extensions };