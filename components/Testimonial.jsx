import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/people.jpeg'

function Testimonial() {
  return (
    <>
      <section className="section-margin testimonial-area section-background-color">
        <div className="container ">
          <div className="row text-center ">
            <h1 className="mb-5 text-center heading mt-5 text-white">Testimonials</h1>
            <p className="paragraph mb-4 text-white">Our students give us their verdict on their experience of studying at the Gurukul Pharmacy
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row course-gap">
            <div className="col-md-4 mb-4">
              <div className="card t5 testimonial-card">
                <div className="d-flex justify-content-center">
                  <Image src={Image1} className="tm-people " />
                </div>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center">David Jones</h5>
                  <h6 className="card-title d-flex justify-content-center">BSc Applied Medical Sciences</h6>
                  <p className="card-text d-flex justify-content-start">Every aspect of the course exceeded my expectations. Our professors and guest specialists delivered engaging content-rich lectures, covering body systems in health and disease  then the role of nutrition in modulating health across life.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card t5 testimonial-card">
                <div className="d-flex justify-content-center">
                  <Image src={Image1} className="tm-people " />
                </div>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center">David Jones</h5>
                  <h6 className="card-title d-flex justify-content-center">BSc Applied Medical Sciences</h6>
                  <p className="card-text d-flex justify-content-start">Every aspect of the course exceeded my expectations. Our professors and guest specialists delivered engaging content-rich lectures, covering body systems in health and disease  then the role of nutrition in modulating health across life.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card t5 testimonial-card">
                <div className="d-flex justify-content-center">
                  <Image src={Image1} className="tm-people " />
                </div>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center">David Jones</h5>
                  <h6 className="card-title d-flex justify-content-center">BSc Applied Medical Sciences</h6>
                  <p className="card-text d-flex justify-content-start">Every aspect of the course exceeded my expectations. Our professors and guest specialists delivered engaging content-rich lectures, covering body systems in health and disease  then the role of nutrition in modulating health across life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Testimonial

