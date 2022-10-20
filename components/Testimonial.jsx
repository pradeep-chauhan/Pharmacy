import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/people.jpeg'

const testimonies = [
  {
    "id": "1",
    "image": Image1,
    "name": "David Jones",
    "branch": "BSc Applied Medical Sciences",
    "paragraph": "Every aspect of the course exceeded my expectations. Our professors and guest specialists delivered engaging content-rich lectures, covering body systems in health and disease  then the role of nutrition in modulating health across life."
  },
  {
    "id": "2",
    "image": Image1,
    "name": "David Jones",
    "branch": "BSc Applied Medical Sciences",
    "paragraph": "Every aspect of the course exceeded my expectations. Our professors and guest specialists delivered engaging content-rich lectures, covering body systems in health and disease  then the role of nutrition in modulating health across life."
  },
  {
    "id": "3",
    "image": Image1,
    "name": "David Jones",
    "branch": "BSc Applied Medical Sciences",
    "paragraph": "Every aspect of the course exceeded my expectations. Our professors and guest specialists delivered engaging content-rich lectures, covering body systems in health and disease  then the role of nutrition in modulating health across life."
  }
]

function Testimonial() {
  return (
    <>
      <section className="section1 testimonial-area section-background-color">
        <div className="container ">
          <div className="row text-center ">
            <h1 className="mb-5 text-center heading mt-5 text-white">Testimonials</h1>
            <p className="paragraph mb-4 text-white">Our students give us their verdict on their experience of studying at the Gurukul Pharmacy
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row course-gap">
            {
              testimonies.map((value) => (
                <div className="col-md-4 mb-5">
                  <div className="card t5 testimonial-card">
                    <div className="d-flex justify-content-center">
                      <Image key={value.id} src={value.image} className="tm-people " />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title d-flex justify-content-center">{value.name}</h5>
                      <h6 className="card-title d-flex justify-content-center">{value.branch}</h6>
                      <p className="card-text d-flex justify-content-start">{value.paragraph}</p>
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
export default Testimonial

