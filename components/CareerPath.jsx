import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/Going up-rafiki (2).svg'
import Image2 from '../images/pharmacist (1).png'
import Image3 from '../images/pharmacist (3).png'
import Image4 from '../images/pharmacist (4).png'
import Image5 from '../images/pharmacist (5).png'

const offers = [
  {
    "id": "1",
    "icon": Image2,
    "iconClass": "carrer-icons",
    "heading": "Pharmacist",
  },
  {
    "id": "2",
    "icon": Image3,
    "iconClass": "carrer-icons",
    "heading": "Scientific Officer",
  },
  {
    "id": "3",
    "icon": Image4,
    "iconClass": "carrer-icons",
    "heading": "Quality Analyst",
  },
  {
    "id": "4",
    "icon": Image5,
    "iconClass": "carrer-icons",
    "heading": "Transcriptionist",
  }
]
function CareerPath() {
  return (
    <>
      <section itemscope itemtype="https://schema.org/CareerPath" className=' section-background-color section-margin'>
        <div className="container">
          <div className='row text-center mb-5'>
            <div className="row text-center mt-5">
              <h1 itemprop="name" className="mb-5 text-center heading text-white">Career path</h1>
              <p itemProp='decriptiion' className="paragraph mb-4 text-white">Career path you can choose after the course
              </p>
            </div>
          </div>
          <div className='row'>
      
         <div itemProp='image' className='col-lg-5 col-xl-5 col-md-6 col-sm-12 col-xs-12 '>
              <Image className="img-fluid career-img" src={Image1} />
            </div> 
            <div className='col-lg-7 col-xl-7 col-md-6 col-sm-12 col-xs-12 mb-5'>
              <div className='row'>
                {
                  offers.map((value) => (
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mt-5 ">
                      <div className="career-path d-flex border flex items-center justify-center p-2">
                        <div itemProp='image' className="icon mt-2 d-flex justify-content-center align-items-center ">
                          <Image src={value.icon} className="img-fluid" />
                        </div>
                        <div className="text pl-3 mt-4">
                          <h3 itemProp='subheading' className="subheading text-white">{value.heading}</h3>
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