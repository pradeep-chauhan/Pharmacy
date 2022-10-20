import React from 'react'
import Icon from 'react'
import { ShieldFillCheck, Clipboard2CheckFill, People, Laptop, Dribbble, Gear } from 'react-bootstrap-icons'

const offers = [
 
  {
    "id": "1",
    "icon": ShieldFillCheck,
    "iconClass": "offer-icons",
    "heading": "Pharmaceutics Lab",
    "paragraph": "Well-equipped labs to ensure smooth flow of practical learning for students"
  },
  {
    "id": "2",
    "icon": ShieldFillCheck,
    "iconClass": "offer-icons",
    "heading": "Social Pharmacy lab ",
    "paragraph": "Well-equipped labs to ensure smooth flow of practical learning for students"
  },
  {
    "id": "3",
    "icon": ShieldFillCheck,
    "iconClass": "offer-icons",
    "heading": "Pharmacognosy Lab",
    "paragraph": "Well-equipped labs to ensure smooth flow of practical learning for students"
  },
  {
    "id": "4",
    "icon": ShieldFillCheck,
    "iconClass": "offer-icons",
    "heading": "Pharmacy Practice Lab",
    "paragraph": "Well-equipped labs to ensure smooth flow of practical learning for students"
  },
  {
    "id": "5",
    "icon": ShieldFillCheck,
    "iconClass": "offer-icons",
    "heading": "HAP/Pharmacology Lab",
    "paragraph": "Well-equipped labs to ensure smooth flow of practical learning for students"
  },
  {
    "id": "6",
    "icon": Clipboard2CheckFill,
    "iconClass": "offer-icons",
    "heading": "Library",
    "paragraph": "The institute have a very good Library with many Reference & Text Books."
  },
  {
    "id": "7",
    "icon": People,
    "iconClass": "offer-icons",
    "heading": "Girls Common Room",
    "paragraph": "Designed to give female students a place to relax, study in free time available"
  },
  {
    "id": "8",
    "icon": Laptop,
    "iconClass": "offer-icons",
    "heading": "Classrooms",
    "paragraph": "Audio-Visual Technology-enabled class to facilitate smart learning"
  },
  {
    "id": "9",
    "icon": Gear,
    "iconClass": "offer-icons",
    "heading": "Machine Room",
    "paragraph": "Well Equipped Industrial Machine room to give a first-hand experience of the Industry"
  },
  {
    "id": "10",
    "icon": People,
    "iconClass": "offer-icons",
    "heading": "Boys Common Room",
    "paragraph": "Designed to give male students a place to relax, study in free time available"
  }
  
]

function Infrastructure() {
  return (
    <>
      <section className="infrastructure section1 section-background-color">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">

              <h2 className="mb-5 text-center heading text-white"> Infrastructure</h2>
              <p className="paragraph mb-4 text-white">Gurukul College of Pharmacy is well equipped Laboratories with all facilities. The following labs and other facilities are available for students to carry out their study.
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
                      <h3 className="subheading text-white">{value.heading}</h3>
                      <p className="subparagraph text-white">{value.paragraph}</p>
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