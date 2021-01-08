import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Footer from "./Footer"
import Project from "./Project"

const App = () => (
  <Router>
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/proyectos/:url" children={<Project />} />
      <Route path="/about" component={About} />
    </main>
    <Footer />
  </Router>
)

export default App
