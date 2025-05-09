import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="p-5 lg:px-40">
      {children}
    </main>
  )
}

export { Layout };