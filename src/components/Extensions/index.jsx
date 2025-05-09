import React, { useState } from "react";
import { ListButtons } from "./ListButtons";
import { Cards } from "./Cards";
import { useSelector } from "react-redux";


const Extensions = () => {
  const data = useSelector(state => state.data)
  const [filter, setFilter] = useState("All");
  
  const filteredData = data.filter(item =>
    filter === "Active" ? item.isActive :
      filter === "Inactive" ? !item.isActive : true
  )

  return (
    <section>
      <div className="flex flex-col items-center mt-8 lg:flex-row lg:justify-between">
        <h1 className="text-3xl text-Neutral-900 font-bold font-sans tracking-wide mb-4 lg:w-full">Extensions List</h1>

        <ListButtons filter={filter} setFilter={setFilter} />
      </div>
      <Cards filteredData={filteredData} />

    </section>
  )
}

export { Extensions };