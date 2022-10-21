import React from 'react'
import Image from 'next/future/image';
import Image1 from '../images/Faculty.jpg'
const facilitate = [
  {
    "id": "1",
    "image": Image1,
    "heading": "Dr. Dhanraj Patidar",
    "paragraph": "Pharmaceutics"
  },
  {
    "id": "1",
    "image": Image1,

    "heading": "Dr. Dhanraj Patidar",
    "paragraph": "Pharmaceutics"
  },
  {
    "id": "1",
    "image": Image1,
    "heading": "Dr. Dhanraj Patidar",
    "paragraph": "Pharmaceutics"
  },
  {
    "id": "1",
    "image": Image1,
    "heading": "Dr. Dhanraj Patidar",
    "paragraph": "Pharmaceutics"
  },
]
function Faculties() {
  return (
    <>
      <section className="faculties section1 section-background-color">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">
              <h2 className="mb-5 text-center heading text-white"> Meet Our Faculty Members</h2>
            </div>
          </div>
          <div className='row'>

            {/* {
              facilitate.map((value) => (
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 ">
                  <div className="card card-service  mx-2 my-1">
                    <Image src={Image1} className='image-service' />
                    <div className="card-body">
                      <h4 className="sub-heading">{value.heading}</h4>
                      <p className="paragraph">{value.paragraph}</p>
                    </div>
                  </div>
                </div>
              ))


            } */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="card card-service  mx-2 my-1">
                <Image src={Image1} className='image-service' />
                <div className="card-body">
                  <h4 className="sub-heading text-center">Dr. Dhanraj Patidar</h4>
                  <p className="paragraph text-center">Pharmaceutics</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 ">
              <div className="card card-service  mx-2 my-1">
                <Image src={Image1} className='image-service' />
                <div className="card-body">
                  <h4 className="sub-heading text-center">Dr. Dhanraj Patidar</h4>
                  <p className="paragraph text-center">Pharmaceutics</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 ">
              <div className="card card-service  mx-2 my-1">
                <Image src={Image1} className='image-service' />
                <div className="card-body">
                  <h4 className="sub-heading text-center">Dr. Dhanraj Patidar</h4>
                  <p className="paragraph text-center">Pharmaceutics</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-5 ">
              <div className="card card-service  mx-2 my-1">
                <Image src={Image1} className='image-service' />
                <div className="card-body">
                  <h4 className="sub-heading text-center">Dr. Dhanraj Patidar</h4>
                  <p className="paragraph text-center">Pharmaceutics</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Faculties
