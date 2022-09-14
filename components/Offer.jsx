import React from 'react'
import {ShieldFillCheck , Clipboard2CheckFill, People , Laptop, Dribbble, Gear} from 'react-bootstrap-icons'

function Offer() {
  return (
    <>
      <section className="offer section1">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

              <h2 className="mb-5 text-center heading"> What We Offer</h2>
              <p className="paragraph mb-4">The College of Gurukul Pharmacy focuses on developing education for the individual learner. We inspire teaching methods and policies that work for students and educators of diverse backgrounds.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="services-2 d-flex">
                <div className="icon mt-2 d-flex justify-content-center align-items-center offericon">
                  <ShieldFillCheck className='bi bi-shield-check offer-icons' />
                </div>
                <div className="text pl-3">
                  <h3 className="subheading">Well Equipped Labs</h3>
                  <p className="subparagraph">Well-equipped labs to ensure smooth flow of practical learning for students</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-2 d-flex">
                <div className="icon mt-2 d-flex justify-content-center align-items-center offericon">
                  <Clipboard2CheckFill className='fas fa-chalkboard-teacher   offer-icons' />
                </div>
                <div className="text pl-3">
                  <h3 className="subheading">Library</h3>
                  <p className="subparagraph">The Library stretches across 170 Sq.m and has over 8000 books and Journals.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-2 d-flex">
                <div className="icon mt-2 d-flex justify-content-center align-items-center offericon">
                  <People className='fas fa-graduation-cap   offer-icons' />
                </div>
                <div className="text pl-3">
                  <h3 className="subheading">Certified Teachers</h3>
                  <p className="subparagraph">Learn from the best and a well-experienced Faculty with a proven record .</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-2 d-flex">
                <div className="icon mt-2 d-flex justify-content-center align-items-center offericon">
                  <Laptop className='fas fa-school   offer-icons' />
                </div>
                <div className="text pl-3">
                  <h3 className="subheading">Smart classrooms</h3>
                  <p className="subparagraph">Audio-Visual Technology-enabled Smart classNamees to facilitate smart learning </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-2 d-flex">
                <div className="icon mt-2 d-flex justify-content-center align-items-center offericon">
                  <Gear className='fas fa-laptop-code   offer-icons' />
                </div>
                <div className="text pl-3">
                  <h3 className="subheading">Machine Room </h3>
                  <p className="subparagraph">Well Equipped Industrial Machine room to give a first-hand experience of the Industry</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-2 d-flex">
                <div className="icon mt-2 d-flex justify-content-center align-items-center offericon">
                  <Dribbble className='fas fa-shapes   offer-icons' />
                </div>
                <div className="text pl-3">
                  <h3 className="subheading">Sports Facilities</h3>
                  <p className="subparagraph">Access to state of playfields, wellness and fitness programmes, sports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Offer



/*
import React from 'react'
import Image from 'next/image'
import { Icon } from 'react-bootstrap-icons'
import { ShieldFillCheck, Clipboard2CheckFill, People, Laptop, Dribbble, Gear } from 'react-bootstrap-icons'

const data = [
  {
    "id": "1",
    "icon": ShieldFillCheck,
    "iconClass": "offer-icons",
    "heading": "Sports Facilities",
    "paragraph": "Access to state of playfields, wellness and fitness programmes, sports"
  },
  {
    "id": "2",
    "icon": ShieldFillCheck,
    "iconClass": "offer-icons",
    "heading": "Sports Facilities",
    "paragraph": "Access to state of playfields, wellness and fitness programmes, sports"
  }
  
]


function Offer() {
  return (
    <>
      <section className="offer section1">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

              <h2 className="mb-5 text-center heading"> What We Offer</h2>
              <p className="paragraph mb-4">The College of Gurukul Pharmacy focuses on developing education for the individual learner. We inspire teaching methods and policies that work for students and educators of diverse backgrounds.
              </p>
            </div>
          </div>
          <div className="row mt-5">

            {
              data.map((values) => (
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center offericon">
                      <Image key={values.id} src={values.icon} className={values.iconClass} />
                    </div>
                    <div className="text pl-3">
                      <h3 className="subheading">{values.heading}</h3>
                      <p className="subparagraph">{values.paragraph}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Offer
*/