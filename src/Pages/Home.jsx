import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Form from "../Components/Form"
import "../App.css"


export default function Home() {
  return (
    <div className='/home' id='home'>
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}
