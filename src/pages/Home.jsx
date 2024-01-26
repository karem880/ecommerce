import React from 'react'
import SimpleSlider from '../components/Slider'
import CardSlide from '../components/CardSlide'
import Products from '../components/Products'
import TopProducts from '../components/TopRtaed'
import Banner from '../components/Banar'
import Subscribe from '../components/Subscribe'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <SimpleSlider/>
      <Products/>
     
      <CardSlide/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Testimonials/>
      <Footer/>

      

      
    </>
  )
}

export default Home
