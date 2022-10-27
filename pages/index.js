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
import CareerPath from '../components/CareerPath'
import Infrastructure from '../components/Infrastructure'
import Faculties from '../components/Faculties'
import Committees from '../components/Committees'
import Course from '../components/Course'
import Eligibility from '../components/Eligibility'
import FooterWebsite from '../components/Footer-website'
export default function Home() {
  return (
    <div >
      <Head>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
  <meta name="theme-color" content="#ffffff" />
        <title>Gurukul Pharmacy</title>
      </Head>
      <Homepage />
      {/* <WhyUs /> */}
      <Info />
      <Infrastructure />
      <Course />
      <Eligibility />
      {/* <Faculties /> */}
      <Committees />
      <CareerPath />
      {/* <Gallery />
      <Testimonial /> */}
      <ContactUs />
      <Footer />
      <FooterWebsite />

    </div>
  )
}
