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
    "paragraph": "The institute have a very good Library with many Reference & Text Books."
  },
  {
    "id": "3",
    "icon": People,
    "iconClass": "offer-icons",
    "heading": "Girls common Room",
    "paragraph": "Designed to give female students a place to relax, study in free time available"
  },
  {
    "id": "4",
    "icon": Laptop,
    "iconClass": "offer-icons",
    "heading": "Classrooms",
    "paragraph": "Audio-Visual Technology-enabled class to facilitate smart learning"
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
    "icon": People,
    "iconClass": "offer-icons",
    "heading": "Boys common Room",
    "paragraph": "Designed to give male students a place to relax, study in free time available"
  }
  
]

function Infrastructure() {
  return (
    <>
      <section className="offer section1">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

              <h2 className="mb-5 text-center heading"> Infrastructure</h2>
              <p className="paragraph mb-4">Gurukul College of Pharmacy is well equipped Laboratories with all facilities. The following labs and other facilities are available for students to carry out their study.
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

export default Infrastructure