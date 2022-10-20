import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/best-worker-specialist-event-sponsorship-employee-victory-branded-competition-marketing-competitive-event-contests-organized-by-brand-concept_335657-118-removebg-preview.png'
import { ShieldFillCheck, Clipboard2CheckFill, People, Laptop, Dribbble, Gear } from 'react-bootstrap-icons'

const offers = [

  {
    "id": "1",
    "icon": ShieldFillCheck,
    "iconClass": "carrer-icons",
    "heading": "Pharmacist",

  },
  {
    "id": "2",
    "icon": Clipboard2CheckFill,
    "iconClass": "carrer-icons",
    "heading": "Scientific Officer",

  },
  {
    "id": "3",
    "icon": People,
    "iconClass": "carrer-icons",
    "heading": "Quality Analyst",

  },
  {
    "id": "4",
    "icon": Laptop,
    "iconClass": "carrer-icons",
    "heading": "Transcriptionist",
  },
  // {
  //   "id": "5",
  //   "icon": Laptop,
  //   "iconClass": "carrer-icons",
  //   "heading": "Production Executive",
  // },
]
function CareerPath() {
  return (
    <>
      <section className='section1'>
        <div className="container">
          <div className='row text-center mb-5'>
            <div className="row text-center">
              <h1 className="mb-5 text-center heading">Career path</h1>
              <p className="paragraph mb-4">Career path you can choose after the course
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-7 col-xl-7 col-md-6col-sm-12 col-xs-12'>
              <Image className="img-fluid" src={Image1} />
            </div>
            {/* <div className='col-6'>
              <div className='row'>
                <h3>Pharmacist</h3>
                <h3>Scientific Officer</h3>
                <h3>Quality Analyst</h3>
                <h3>Production Executive</h3>
                <h3></h3>
              </div>
            </div> */}
            <div className='col-lg-5 col-xl-5 col-md-6 col-sm-12 col-xs-12'>
              <div className='row'>
                {
                  offers.map((value) => (
                    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-6">
                      <div className="services-3 d-flex">
                        <div className="icon mt-2 d-flex justify-content-center align-items-center carrericon">
                          <value.icon className={value.iconClass} />
                        </div>
                        <div className="text pl-3 mt-4">
                          <h3 className="subheading">{value.heading}</h3>
                          <p className="subparagraph">{value.paragraph}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default CareerPath


