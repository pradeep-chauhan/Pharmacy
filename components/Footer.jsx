import React from 'react'
import { Facebook, Whatsapp, Twitter, Linkedin } from 'react-bootstrap-icons'
import { Map, Phone, Envelope } from 'react-bootstrap-icons';
function Footer() {
  return (
    <>
      <section className="footer-website section1 section-background-color">
        <hr className="hr-border" />
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12">
              <h4 className="mb-4 text-white">Gurukul Pharmacy</h4>
              <p className="footer-para d-flex justify-content-start text-justify text-white">The opportunities and support provided are
                endless. If you believe in yourself and work
                hard, you can go the distance.
              </p>
              <ul className="list-inline mb-0 mt-3 mb-5">
                <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Facebook /></a> </li>
                <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Whatsapp /></a> </li>
                <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Twitter /></a> </li>
                <li className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Linkedin /></a> </li>
              </ul>
              <br />
            </div>
            <div className='col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12'>
              <p className="inline d-flex justify-content-start contact-us-paragraph text-white">
                <Map className="fa fa-map-marker contactIcon "></Map>
                Plot No, 101-103, 100 Feet Rd, near Airport road <br></br> Udaipur, Rajasthan 313001
              </p>
              <p className="inline d-flex justify-content-start contact-us-paragraph text-white ">
                <Phone className="fa fa-phone contactIcon"></Phone>
                <a href="tel:+918107973076" className="text-white">+91 8107973076</a>
              </p>
              <p className='inline d-flex justify-content-start contact-us-paragraph text-white mb-5'>
                <Envelope className='contactIcon '> </Envelope>
                <a href="" className="text-white"> abc@gmail.com </a>
              </p>
            </div>
            <div className='col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12 mb-4'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.519905876953!2d73.80689775016938!3d24.605759684097034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e760b733ed27%3A0x6a295f012d92ec1f!2sAlvrio%20Labs!5e0!3m2!1sen!2sin!4v1663225453049!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
