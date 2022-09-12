import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/people.jpeg'
function Testimonial() {
  return (
    <>
       <section className="section1 testimonial-area">
    <div className="container">
      <div className="row text-center">
        <h1 className="mb-5 text-center heading">Testimonials</h1>
        <p className="paragraph mb-4">Our students give us their verdict on their experience of studying at the Gurukul Pharmacy
        </p>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card t5 testimonial-card">
            <div className="d-flex justify-content-center">
              
                <Image src={Image1} className="tm-people " />
            </div>
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">David Jones</h5>
              <h6 className="card-title d-flex justify-content-center">BSc Applied Medical Sciences</h6>
              <p className="card-text d-flex justify-content-start">Every aspect of the course exceeded my expectations. Our professors and guest
                specialists
                delivered engaging content-rich lectures, covering body systems in health and disease, then the
                role of nutrition in modulating health across life.</p>

            </div>
          </div>

        </div>
        <div className="col-md-4  ">
          <div className="card t5 testimonial-card">
            <div className="d-flex justify-content-center">
              <Image src={Image1} className="tm-people " />

            </div>
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">David Jones</h5>
              <h6 className="card-title d-flex justify-content-center">BSc Applied Medical Sciences</h6>
              <p className="card-text d-flex justify-content-start">Every aspect of the course exceeded my expectations. Our professors and guest
                specialists
                delivered engaging content-rich lectures, covering body systems in health and disease, then the
                role of nutrition in modulating health across life.</p>

            </div>
          </div>
        </div>
        <div className="col-md-4  ">
          <div className="card t5 testimonial-card">
            <div className="d-flex justify-content-center">
              <Image src={Image1} className="tm-people " />
            </div>
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">David Jones</h5>
              <h6 className="card-title d-flex justify-content-center">BSc Applied Medical Sciences</h6>
              <p className="card-text d-flex justify-content-start">Every aspect of the course exceeded my expectations. Our professors and guest
                specialists
                delivered engaging content-rich lectures, covering body systems in health and disease, then the
                role of nutrition in modulating health across life.</p>

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


/*



<div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-sm-12">
            <div classNameName="section-header text-center">
              <h1 classNameName="heading-text">Testimonials</h1>
              <h2>What Students Says</h2>
              <p>Our students give us their verdict on their experience of studying at the UCL Faculty of Medical
                Sciences.
              </p>
            </div>
          </div>
          <div classNameName="col-sm-12">
            <div classNameName="carousel slide" data-bs-ride="true" id="carouselExampleIndicators">
              <div classNameName="carousel-indicators">
                <button aria-label="Slide 1" classNameName="active" data-bs-slide-to="0"
                  data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2"
                    data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button
                      aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators"
                      type="button"></button>
              </div>
              <div classNameName="carousel-inner">
                <div classNameName="carousel-item active">
                  <div classNameName="icon-area">
                    <i classNameName="fa fa-comments"></i>
                  </div>
                  <div classNameName="content text-center">
                    <p>The Applied Medical Sciences course trains students to speak the language of medicine but think
                      like scientists. The exposure to some of the best science in the world allows students to become
                      extremely versatile.</p>
                    <div classNameName="person">
                      <Image src={Image1} />
                    </div>
                    <h5>David Jones</h5>
                    <h6>BSc Applied Medical Sciences</h6>
                  </div>
                </div>
                <div classNameName="carousel-item">
                  <div classNameName="icon-area">
                    <i classNameName="fa fa-comments"></i>
                  </div>
                  <div classNameName="content text-center">
                    <p>Every aspect of the course exceeded my expectations. Our professors and guest specialists
                      delivered engaging content-rich lectures, covering body systems in health and disease, then the
                      role of nutrition in modulating health across life.

                    </p>
                    <div classNameName="person">
                      <Image src={Image1} />
                    </div>
                    <h5>Adriana Salame</h5>
                    <h6>BSc Nutrition and Medical Sciences</h6>
                  </div>
                </div>
                <div classNameName="carousel-item">
                  <div classNameName="icon-area">
                    <i classNameName="fa fa-comments"></i>
                  </div>
                  <div classNameName="content text-center">
                    <p>I chose this unique course after attending an open day and seeing the enthusiasm of the course
                      leader. It constantly ignites my curiosity through its engaging, content-rich lectures and
                      exposure to exciting ongoing research.</p>
                    <div classNameName="person">
                      <Image src={Image1} />

                    </div>
                    <h5>Giselle Best</h5>
                    <h6>BSc Infection and Immunity</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


*/