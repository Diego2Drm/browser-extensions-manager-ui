import React, { useState } from "react";

const ListButtons = () => {

  const ButtonsList = [
    { list: "All" },
    { list: "Active" },
    { list: "Inactive" },
  ]

  return (
    <div className="flex justify-around w-full">
      {
        ButtonsList.map((button , i) => (
          <button key={i} className="bg-Neutral-0 text-Neutral-900 text-lg px-4 rounded-full">
            {button.list}
          </button>
        ))
      }
    </div>
  )
}

export { ListButtons };