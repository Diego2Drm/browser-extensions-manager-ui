import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="p-5">
      {children}
    </main>
  )
}

export { Layout };