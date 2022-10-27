import React from 'react'
import Image from 'next/future/image'
import { Container } from 'react-bootstrap';
import Image1 from '../images/whyUs1.jpg'
import Image2 from '../images/whyUs2.jpg'
import Image3 from '../images/whyUs3.jpeg'

const aboutUsData = [
  {
    "id": "1",
    "image": Image1,
    "title": "12K+",
    "heading": "Gurukul Pharmacy are supported across 30 states"
  },
  {
    "id": "2",
    "image": Image2,
    "title": "32K+",
    "heading": "Helping the students of all ages to get a better career"
  },
  {
    "id": "3",
    "image": Image3,
    "title": "27K+",
    "heading": "Gurukul Student placed in 100+ different hospital"
  },
]
function WhyUs() {
  return (
    <>
      <section className="whyus section-margin">
        <div className="container">
          <div className="row course-gap">
            {
              aboutUsData.map((value) => (
                <div className="col-md-4 col-lg-4 col-xl-4 col-xs-12 col-sm-12 mb-4 mt-4">
                  <div className="card card-whyus">
                    <div className="card-body text-center">
                    <h5 className='text-start fs-1 footer-para'>{value.id}</h5>

                      <Image key={value.id} src={value.image} className="image-whyus" />
                      <div className="row">
                        <div className="col-md-12 col-lg-4 col-xl-4">
                          <h2 className="mt-3 whyus-heading">{value.title}</h2>
                        </div>
                        <div className="col-md-12 col-lg-8 col-xl-8">
                          <p className="mt-3 text-align-start "><strong>{value.heading}</strong></p>
                        </div>
                      </div>
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
export default WhyUs