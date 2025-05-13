import React from "react"
import { Layout } from "./Layout"
import { Hero } from "./components/Hero"
import { Extensions } from "./components/Extensions"

function App() {
  return (
    <Layout>
      <Hero />
      <p className="bg-white text-black dark:text-white dark:bg-black opacity-50 w-fit p-1 my-1 rounded-xl">
        Please refresh the page to save the changes.
      </p>
      <Extensions />
    </Layout>
  )
}

export default App
