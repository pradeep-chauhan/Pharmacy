import React from 'react'
import { Facebook, Whatsapp, Twitter, Linkedin } from 'react-bootstrap-icons'
import { Map, Phone, Envelope } from 'react-bootstrap-icons';
function Footer() {
  return (
    <>
      <section itemscope itemtype="https://schema.org/Footer"  className="footer-website section-margin section-background-color">
        <hr className="hr-border" />
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12">
              <h4 className="mb-4 text-white" itemProp='name'>Gurukul Pharmacy</h4>
              <p className="footer-para d-flex justify-content-start text-justify text-white" itemProp='description' >The opportunities and support provided are
                endless. If you believe in yourself and work
                hard, you can go the distance.
              </p>
              <ul className="list-inline mb-0 mt-3 mb-5">
                <li itemProp='logo' className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Facebook /></a> </li>
                <li itemProp='logo' className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Whatsapp /></a> </li>
                <li itemProp='logo' className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Twitter /></a> </li>
                <li itemProp='logo' className="list-inline-item"> <a className="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Linkedin /></a> </li>
              </ul>
              <br />
            </div>
            <div className='col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12'>
              <p className="inline d-flex justify-content-start contact-us-paragraph text-white" itemProp='address'>
                <Map className="fa fa-map-marker contactIcon "></Map>
                Gurukul College of Pharmacy
                Village - Budal, Tehsil- Girwa, Udaipur, Rajasthan 313703
              </p>
              <p className="inline d-flex justify-content-start contact-us-paragraph text-white ">
                <Phone className="fa fa-phone contactIcon" ></Phone>
                <a href="tel:+918107973076" className="text-white" itemProp='number'>+91-8107973076</a>
              </p>
              <p className='inline d-flex justify-content-start contact-us-paragraph text-white mb-5'>
                <Envelope className='contactIcon '> </Envelope>
                <a href="mailto:gurukulcollegepharmacy@gmail.com" className="text-white" itemProp='email'> gurukulcollegepharmacy@gmail.com </a>
              </p>
            </div>
            <div itemProp='logo' className='col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12 mb-4'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14529.2940673613!2d73.925506!3d24.4395586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967c0c89381f373%3A0x3d61c5ac06b2bf9a!2sThe%20Gurukul%20college%20%26%20School!5e0!3m2!1sen!2sin!4v1666853344782!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
