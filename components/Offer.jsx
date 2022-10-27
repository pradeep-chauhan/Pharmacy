import React from 'react'
import Icon from 'react'
import { ShieldFillCheck, Clipboard2CheckFill, People, Laptop, Dribbble, Gear } from 'react-bootstrap-icons'

const offers = [
 
  {
    "id": "1",
    "icon": ShieldFillCheck,
    "iconClass": "offer-icons",
    "heading": "Well Equipped Labs",
    "paragraph": "Well-equipped labs to ensure smooth flow of practical learning for students"
  },
  {
    "id": "2",
    "icon": Clipboard2CheckFill,
    "iconClass": "offer-icons",
    "heading": "Library",
    "paragraph": "The Library stretches across 170 Sq.m and has over 8000 books and Journals."
  },
  {
    "id": "3",
    "icon": People,
    "iconClass": "offer-icons",
    "heading": "Certified Teachers",
    "paragraph": "Learn from the best and a well-experienced Faculty with a proven record ."
  },
  {
    "id": "4",
    "icon": Laptop,
    "iconClass": "offer-icons",
    "heading": "Smart classrooms",
    "paragraph": "Audio-Visual Technology-enabled Smart classNamees to facilitate smart learning"
  },
  {
    "id": "5",
    "icon": Gear,
    "iconClass": "offer-icons",
    "heading": "Machine Room",
    "paragraph": "Well Equipped Industrial Machine room to give a first-hand experience of the Industry"
  },
 {
    "id": "6",
    "icon": Dribbble,
    "iconClass": "offer-icons",
    "heading": "Sports Facilities",
    "paragraph": "Access to state of playfields, wellness and fitness programmes, sports"
  }
  
]

function Offer() {
  return (
    
    <>
      <section className="offer section-margin">
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
              offers.map((value) => (
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center offericon">
                      <value.icon className={value.iconClass} />
                    </div>
                    <div className="text pl-3">
                      <h3 className="subheading">{value.heading}</h3>
                      <p className="subparagraph">{value.paragraph}</p>
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
