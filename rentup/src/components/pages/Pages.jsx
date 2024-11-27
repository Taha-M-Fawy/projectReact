import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from '../common/footer/Footer'
import About from "../About/About"
import Services from "../services/services"
import Blog from "../blog/blog"
import Contact from "../contact/contact"
import Pricing from "../pricing/pricing"
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/pricing' component={Pricing} />
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default Pages
