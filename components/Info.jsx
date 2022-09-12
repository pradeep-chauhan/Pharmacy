import React from 'react'
import Image from 'next/future/image'
import { Container } from 'react-bootstrap';
import Svg1 from '../images/semicircle(1).png'
import Svg2 from '../images/zigzag-lines-in-side-view-position.png'
import { People, Award } from 'react-bootstrap-icons'
function Info() {
  return (
    <>
      <section className="info section1  ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-xs-12 col-md-5 col-lg-5 col-xl-5 mt-5">
              <div className="mt-5">
                <Image src={Svg1} className="homepagesvg3" />
                <h1>Reason to choose Gurukul Pharmacy</h1>

                <p className="paragraph">Along with lessons, answers, study resources, grad assignments, feedback and one-to-one
                  attention, The
                  experienced tutors at Learning Space also extend their support in writing.</p>

              </div>
              <button type="button" className="buttoninfo">Explore Now</button>
              <div className="d-none d-sm-block d-md-block  ">
                <Image src={Svg2} className="homepagesvg5" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-xs-12 col-md-7 col-lg-7 col-xl-7 backgroundcircle">
              <div className="container-fluid ">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12  t1 t5">
                          <div className="card t5 t6">
                            <div className="card-body">

                              <People className='fas fa-graduation-cap   icon-info mt-3 mb-3' />
                              <h4 className="card-heading">Experts Teacher</h4>
                              <p className="card-text">University of Gurukul Pharmacy is a leading modern university with a tradition of
                                providing opportunity</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12 t2 t5">
                          <div className="card t5 t6">
                            <div className="card-body">
                              <Award className='fa fa-graduation-cap icon-info mt-3 mb-3' />
                              <h4 className="card-heading">Full bright Scholarship</h4>
                              <p className="card-text">Under the able tutelage of our dedicated scholarly professionals always
                                available to help you</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12 t3 t5">
                          <div className="card t5 t6">
                            <div className="card-body">
                              <People className='fas fa-graduation-cap   icon-info mt-3 mb-3' />
                              <h4 className="card-heading">Experts Teacher</h4>
                              <p className="card-text">University of Gurukul Pharmacy is a leading modern university with a tradition of
                                providing opportunity</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12  t5">
                          <div className="card t5 t6">
                            <div className="card-body">
                              <Award className='fa fa-graduation-cap icon-info mt-3 mb-3' />
                              <h4 className="card-heading">Full bright Scholarship</h4>
                              <p className="card-text">Under the able tutelage of our dedicated scholarly professionals always
                                available to help you</p>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default Info