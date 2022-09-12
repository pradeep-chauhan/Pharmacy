import React from 'react'
import { Facebook, Whatsapp, Twitter, Linkedin } from 'react-bootstrap-icons'
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
                hard, you can go the distance.</p>
              <ul class="list-inline mb-0 mt-3">
                <li class="list-inline-item"> <a class="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Facebook /></a> </li>
                <li class="list-inline-item"> <a class="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Whatsapp /></a> </li>
                <li class="list-inline-item"> <a class="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Twitter /></a> </li>
                <li class="list-inline-item"> <a class="btn  website-logo btn-sm shadow  px-2 text-facebook" href="#"><Linkedin /></a> </li>
              </ul>
            </div>
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
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer