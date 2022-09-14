import React from 'react'
import { Facebook, Whatsapp, Twitter, Linkedin } from 'react-bootstrap-icons'
import { Map, Phone, Envelope } from 'react-bootstrap-icons';
function Footer() {
  return (
    <>
      <section class="footer-website section1">
        <hr class="hr-border" />
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12">
              <h4 class="mb-4">Gurukul Pharmacy</h4>
              <p class="footer-para d-flex justify-content-start text-justify">The opportunities and support provided are
                endless. If you believe in yourself and work
                hard, you can go the distance.
              </p>
              <ul class="list-inline mb-0 mt-3">
                <li class="list-inline-item"> <a class="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Facebook /></a> </li>
                <li class="list-inline-item"> <a class="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Whatsapp /></a> </li>
                <li class="list-inline-item"> <a class="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Twitter /></a> </li>
                <li class="list-inline-item"> <a class="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Linkedin /></a> </li>
              </ul>
            </div>
            <div className='col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12'>
              <p className="inline d-flex justify-content-start contact-us-paragraph">
                <Map className="fa fa-map-marker contactIcon"></Map>
                Plot No, 101-103, 100 Feet Rd, near Airport road <br></br> Udaipur, Rajasthan 313001
              </p>
              <p className="inline d-flex justify-content-start contact-us-paragraph ">
                <Phone className="fa fa-phone contactIcon"></Phone>
                <a href="tel:+91xxxxxxxxxx">9876543210</a>
              </p>
              <p className='inline d-flex justify-content-start contact-us-paragraph'>
                <Envelope className='contactIcon'> </Envelope>
                <a href=""> abc@gmail.com </a>
              </p>
            </div>
            <div className='col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.707527860593!2d73.77412261499768!3d24.599287884177762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e7c1aaaaaaab%3A0x95c274011e11044c!2sPacific%20College%20of%20Pharmacy%20%7C%20Best%20Pharmacy%20College%20in%20Udaipur!5e0!3m2!1sen!2sin!4v1663141398086!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>



          </div>
        </div>
      </section>
    </>
  )
}

export default Footer


/*
            <div class="col-lg-8 col-xl-8 col-md-8 col-sm-12 col-xs-12">
              <div class="row">
                <div class="col">
                  <h5 class="mb-4">Home</h5>
                  <p class="footer-para">Faq</p>
                  <p class="footer-para">Faq</p>
                  <p class="footer-para">Faq</p>
                </div>
                <div class="col">
                  <h5 class="mb-4">Course</h5>
                  <p class="footer-para">Course</p>
                  <p class="footer-para">Course</p>
                  <p class="footer-para">Course</p>
                </div>
                <div class="col">
                  <h5 class="mb-4">Gallery</h5>
                  <p class="footer-para">Gallery</p>
                  <p class="footer-para">Gallery</p>
                  <p class="footer-para">Gallery</p>
                </div>
                <div class="col">
                  <h5 class="mb-4">Contact</h5>
                  <p class="footer-para">Contact</p>
                  <p class="footer-para">Contact</p>
                  <p class="footer-para">Contact </p>
                </div>
              </div>
            </div>
            */