import React from 'react'
import "./featrued.css"
import Heading from '../../common/Heading'
import FeatruedCard from './FeatruedCard'
const Featrured = () => {
  return <>
  <section className='featured background'>
    <div className="container">
      <Heading title='Featured Property Types' subtitle='Find All Type of Property.'/>
      <FeatruedCard/>
    </div>
    </section>
    </>
  
}

export default Featrured
