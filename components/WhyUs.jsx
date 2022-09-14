import React from 'react'
import Image from 'next/future/image'
import { Container } from 'react-bootstrap';
import Image1 from '../images/whyUs1.jpg'
import Image2 from '../images/whyUs2.jpg'
import Image3 from '../images/whyUs3.jpeg'

const data = [
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
    "heading": "Gurukul Student placed in different hospital"
  },
]


function WhyUs() {
  console.log(data)
  return (

    <>
      <section className="whyus section1">
        <div className="container">
          <div className="row">
            {
              data.map((values) => (
                <div className="col-md-4 col-lg-4 col-xl-4 col-xs-12 col-sm-12">
                  <div className="card card-whyus">
                    <div className="card-body text-center">
                    <h5 className='text-start fs-1 footer-para'>{values.id}</h5>

                      <Image key={values.id} src={values.image} className="image-whyus" />
                      <div className="row">
                        <div className="col-md-4 col-lg-8 col-xl-4">
                          <h2 className="mt-3 whyus-heading">{values.title}</h2>
                        </div>
                        <div className="col-md-8 col-lg-8 col-xl-8">
                          <p className="mt-3 text-align-start "><strong>{values.heading}</strong></p>
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
