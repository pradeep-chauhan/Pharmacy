import React from 'react'
import Image from 'next/future/image'
import { Container } from 'react-bootstrap';
import Image1 from'../images/whyUs1.jpg'
import Image2 from'../images/whyUs2.jpg'
import Image3 from'../images/whyUs3.jpeg'
function WhyUs() {
  return (
    <>
      <section className="whyus section1">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xl-4 col-xs-12 col-sm-12">
              <div className="card cardwhyus">
                <div className="card-body text-center">
                  <h5 className="text-start fs-1 footer-para">01</h5>
                    <Image src={Image1} className="imagewhyus" />
                    <div className="row">
                      <div className="col-md-4 col-lg-8 col-xl-4">
                        <h2 className="mt-3 whyusheading">12K+</h2>
                      </div>
                      <div className="col-md-8 col-lg-8 col-xl-8">
                        <p className="mt-3 text-align-start "><strong>Gurukul Pharmacy are supported across 30 states</strong></p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 col-xs-12 col-sm-12">
              <div className="card cardwhyus">
                <div className="card-body text-center">
                  <h5 className="text-start fs-1 footer-para">02</h5>
                  <Image src={Image2} className="imagewhyus" />
                    <div className="row">
                      <div className="col-md-4 col-lg-8 col-xl-4">
                        <h2 className="mt-3 whyusheading">32K+</h2>
                      </div>
                      <div className="col-md-8 col-lg-8 col-xl-8">
                        <p className="mt-3 text-align-start"><strong>Helping the students of all ages to get a better career </strong></p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 col-xs-12 col-sm-12">
              <div className="card cardwhyus">
                <div className="card-body text-center">
                  <h5 className="text-start fs-1 footer-para">03</h5>
                  <Image src={Image3} className="imagewhyus" />
                  <div className="row">
                    <div className="col-md-4 col-lg-8 col-xl-4">
                      <h2 className="mt-3 whyusheading">27K+</h2>
                    </div>
                    <div className="col-md-8 col-lg-8 col-xl-8">
                      <p className="mt-3 text-align-start"><strong>Gurukul Student placed in different hospital</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyUs