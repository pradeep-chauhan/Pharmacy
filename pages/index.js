import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homepage from '../components/Homepage'
import WhyUs from '../components/WhyUs'
import Info from '../components/Info'
import Offer from '../components/Offer'
import Category from '../components/Courses'
import Gallery from '../components/Gallery'
import Testimonial from '../components/Testimonial'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div >
      <Homepage />
      <WhyUs />
      <Info />
      <Offer />
      <Category />
      <Gallery />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  )
}
