import React from 'react'
import Image from 'next/future/image';
import Image1 from '../images/flask (5).png'
import Image2 from '../images/microscope (2).png'
import Image3 from '../images/flasks.png'
import Image4 from '../images/laboratory (1).png'
import Image5 from '../images/microscope (3).png'
import Image6 from '../images/book (1).png'
import Image7 from '../images/board-meeting.png'
import Image8 from '../images/classroom.png'
import Image9 from '../images/gear.png'
import Image10 from '../images/board-meeting.png'

const offers = [
 
  {
    "id": "1",
    "icon": Image1,
    "iconClass": "offer-icons",
    "heading": "Pharmaceutics Lab",
    "paragraph": "Well-equipped labs to ensure smooth flow of practical learning for students"
  },
  {
    "id": "2",
    "icon": Image2,
    "iconClass": "offer-icons",
    "heading": "Social Pharmacy lab ",
    "paragraph": "Well-equipped labs to ensure smooth flow of practical learning for students"
  },
  {
    "id": "3",
    "icon": Image3,
    "iconClass": "offer-icons",
    "heading": "Pharmacognosy Lab",
    "paragraph": "Well-equipped labs to ensure smooth flow of practical learning for students"
  },
  {
    "id": "4",
    "icon": Image4,
    "iconClass": "offer-icons",
    "heading": "Pharmacy Practice Lab",
    "paragraph": "Well-equipped labs to ensure smooth flow of practical learning for students"
  },
  {
    "id": "5",
    "icon": Image5,
    "iconClass": "offer-icons",
    "heading": "Pharmacology Lab",
    "paragraph": "Well-equipped labs to ensure smooth flow of practical learning for students"
  },
  {
    "id": "6",
    "icon": Image6,
    "iconClass": "offer-icons",
    "heading": "Library",
    "paragraph": "The institute have a very good Library with many Reference & Text Books."
  },
  {
    "id": "7",
    "icon": Image7,
    "iconClass": "offer-icons",
    "heading": "Girl's Common Room",
    "paragraph": "Designed to give female students a place to relax, study in free time available"
  },
  {
    "id": "8",
    "icon": Image8,
    "iconClass": "offer-icons",
    "heading": "Classrooms",
    "paragraph": "Audio Visual Technology enabled class to facilitate smart learning"
  },
  {
    "id": "9",
    "icon": Image9,
    "iconClass": "offer-icons",
    "heading": "Machine Room",
    "paragraph": "Well Equipped Industrial Machine room to give a first-hand experience of the Industry"
  },
  {
    "id": "10",
    "icon": Image10,
    "iconClass": "offer-icons",
    "heading": "Boy's Common Room",
    "paragraph": "Designed to give male students a place to relax, study in free time available"
  }
  
]

function Infrastructure() {
  return (
    <>
      <section className="infrastructure section-margin section-background-color">
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
                    <div className="icon mt-2 d-flex justify-content-center align-items-center  infrastructureimage  ">
                      <Image src={value.icon} className="infrastructureimage " />
                    </div>
                    <div className="text pl-3">
                      <h3 className="subheading-infrastructure text-white">{value.heading}</h3>
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