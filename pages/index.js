import Head from 'next/head'
import Homepage from '../components/Homepage'
import Info from '../components/Info'
import Gallery from '../components/Gallery'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import CareerPath from '../components/CareerPath'
import Infrastructure from '../components/Infrastructure'
import Faculties from '../components/Faculties'
import Vision from '../components/Vision'
import Committees from '../components/Committees'
import Course from '../components/Course'
import Eligibility from '../components/Eligibility'
import FooterWebsite from '../components/Footer-website'
import Navigation from '../components/Navbar'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Gurukul Pharmacy | Pharmacy College</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Gurukul Pharmacy in Udaipur | Pharmacy College in Udaipur" key="title" />
        <meta property="og:description" content="Gurukul pharmacy college work right at the heart of human healthcare, taking on  roles relating to the design and development of new treatments, prescription and care management, and advising on the range of medical options as well and also provides lots of courses which helps grow higher in life and courses such as D-pharma.Pharm D or Doctor of Pharmacy is a professional degree in pharmacy stream. Gurukul Pharmacy Pharm D course duration is six years in total inclusive of 5 years of learning and one year of internship for practical learning. The only doctoral degree that can be pursued right after passing 10+2 qualifying examinations." key="desc" />
        <meta property='og:keywords' content="Pharmacy college, Udaipur Pharmacy College, Best Pharmacy College, Apothecary,Pharmacopoeia, Best Pharmacy College in Udaipur, Best Pharmacy College in Rajasthan,Best Udaipur College,Udaipur best pharmacy college,Gurukul Pharmacy College" key="keywords" />

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <Navigation />
      <Homepage />
      <Course />
      <Info />
      <Infrastructure />
      <Committees />
      <Vision />
      <CareerPath />
      <Eligibility />
      <Faculties />
      <Gallery />
      <ContactUs />
      <FooterWebsite />
    </div>
  )
}
