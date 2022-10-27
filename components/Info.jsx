import React from 'react'
import Image from 'next/future/image'
import Svg1 from '../images/semicircle(1).png'
import Svg2 from '../images/zigzag-lines-in-side-view-position.png'
import { People, Award, Book, JournalMedical } from 'react-bootstrap-icons'
function Info() {
  return (
    <>
      <section className="info section-margin  ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-xs-12 col-md-5 col-lg-5 col-xl-5 ">
              <div itemProp='image' className="mt-5 info-top">
                <Image src={Svg1} className="homepagesvg3" />
                <h1 itemProp='genre'>Reason to choose Gurukul Pharmacy</h1>
                <p itemProp='description' className="paragraph">Along with lessons, answers, study resources, grade assignments, feedback and one-to-one
                  attention, The
                  experienced tutors at Learning Space also extend their support in writing.</p>
              </div>
              <button type="button" className="buttoninfo">Explore Now</button>
              <div itemProp='image' className="d-none d-sm-block d-md-block  ">
                <Image src={Svg2} className="homepagesvg5" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-xs-12 col-md-7 col-lg-7 col-xl-7 backgroundcircle">
              <div className="container-fluid ">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12  card1 card5 mb-3 info-card">
                          <div className="card card5 card6">
                            <div className="card-body">
                              <People className='fas fa-graduation-cap icon-info mt-3 mb-3' />
                              <h4 itemProp='genre' className="card-heading">Expert Teacher</h4>
                              <p itemProp='desciption' className="card-text">College of Gurukul Pharmacy is a leading modern college with a tradition of
                                providing opportunity</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12 card2 card5 mb-3 info-card">
                          <div className="card card5 card6">
                            <div className="card-body">
                              <Award className='fa fa-graduation-cap icon-info mt-3 mb-3' />
                              <h4 itemProp='genre' className="card-heading">Full bright Scholarship</h4>
                              <p itemProp='description' className="card-text">Under the able tutelage of our dedicated scholarly professionals always
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
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12 card3 card5 mb-3 info-card">
                          <div className="card card5 card6">
                            <div itemProp='icon' className="card-body">
                              <JournalMedical className='fas fa-graduation-cap   icon-info mt-3 mb-3' />
                              <i className="fas fa-diagnoses"></i>
                              <h4 itemProp='genre' className="card-heading">Well Occupied Lab</h4>
                              <p itemProp='description' className="card-text">Well-designed laboratories not only make experiments fun but also help students in achieving good academic knowledge</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12  card5 mb-3 info-card">
                          <div className="card card5 card6">
                            <div className="card-body">
                              <Book className='fas fa-graduation-cap icon-info mt-3 mb-3' />
                              <h4 itemProp='genre' className="card-heading">Library</h4>
                              <p itemProp='description' className="card-text">The institute have a very good Library with many Reference, Text Books and Computer Facilities</p>
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