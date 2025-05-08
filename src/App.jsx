import React from "react"
import { Layout } from "./Layout"
import { Hero } from "./components/Hero"
import { Extensions } from "./components/Extensions"

function App() {
  return (
    <Layout>
      <Hero />
      <Extensions />
    </Layout>
  )
}

export default App
